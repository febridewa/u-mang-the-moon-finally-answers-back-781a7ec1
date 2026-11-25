// The Moon Finally Answers Back — one line, in the voice of the Moon
// replying at last to the wishes, howls and late-night promises of
// everyone staring up at it. Gate: /output/entry.txt, UTF-8, 1-240 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Four billion years of wishes, howls, and 3 a.m. promises — and tonight's winner asked for a parking spot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
