import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
const entry = "Two stars: he brings bills, never bones, and still acts shocked when I audit his ankles at the gate.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
console.log(`entry.txt written (${entry.length} chars)`);
