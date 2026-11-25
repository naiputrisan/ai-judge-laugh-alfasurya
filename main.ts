import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My onboarding buddy quit on my first day — HR called it 'accelerated independence training.'";

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
