"use client";

import * as React from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: "class" | `data-${string}`;
  defaultTheme?: "light" | "dark" | "system";
  enableSystem?: boolean;
  storageKey?: string;
};

const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

function resolveTheme(
  theme: ThemeProviderProps["defaultTheme"],
  enableSystem: boolean,
) {
  if (theme !== "system" || !enableSystem) {
    return theme ?? "light";
  }
  return window.matchMedia(SYSTEM_THEME_QUERY).matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  storageKey = "theme",
}: ThemeProviderProps) {
  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey) as
      | "light"
      | "dark"
      | "system"
      | null;
    const resolved = resolveTheme(stored ?? defaultTheme, enableSystem);
    const root = document.documentElement;

    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    } else {
      root.setAttribute(attribute, resolved);
    }
  }, [attribute, defaultTheme, enableSystem, storageKey]);

  return <>{children}</>;
}
