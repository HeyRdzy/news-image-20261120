// News Image — 20 November 2026.
// This program writes the entry image to the output directory:
// it copies entry.png from this repository to <output>/entry.png.
//
// The output directory is never removed itself. In the grader it is
// a Docker mount point, and deleting a mount point fails with EBUSY,
// which would make the whole run fail. So we only clear what is
// inside it, and create it first if it is missing.
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

// Make sure the directory exists, then empty its contents only.
mkdirSync(outDir, { recursive: true });
for (const child of readdirSync(outDir)) {
  rmSync(join(outDir, child), { recursive: true, force: true });
}

cpSync(source, join(outDir, "entry.png"));
