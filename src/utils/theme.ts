import { writable } from "svelte/store";

export type Theme = "light" | "dark" | "system";

export const theme = writable<Theme>("dark");

export function applyTheme(mode: "light" | "dark" | "system") {
  const root = document.documentElement;

  root.classList.remove("light", "dark");

  if (mode === "system") {
    return;
  }

  root.classList.add(mode);
}
