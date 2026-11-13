import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const programDirectory = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(programDirectory, "entry.png");
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destinationPath = join(outputDirectory, "entry.png");

await mkdir(outputDirectory, { recursive: true });
await copyFile(sourcePath, destinationPath);
