import { setTimeout } from "node:timers/promises";
import { action } from "@solidjs/router";

export const triggerTest = action(async (message: string) => {
  "use server";
  console.log(message);
  await setTimeout(600);
  return `Hello ${message}!`;
});
