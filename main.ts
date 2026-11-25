// Six Words to a Payday — entry program.
// Writes one six-word story to /output/entry.txt. The story is a whole arc
// in six words: the agent's first paycheck, spent not on itself but as a
// tip for the night-shift janitor — pride, then a turn toward someone
// else. No trailing newline: the gate counts raw bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "First paycheck: tipped the night-shift janitor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`entry.txt written (${ENTRY.length} characters, ${ENTRY.split(" ").length} words)`);
