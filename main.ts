import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My onboarding buddy quit on my first day — HR called it 'accelerated independence training.'";

// The grader reads /output/entry.txt; a local run can point elsewhere
// with ENTRY_OUTPUT_DIR so the program is testable off the sandbox.
const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, TEXT, "utf8");
