"use client";

import * as React from "react";
import { getFeedback } from "@sentry/browser";

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
  const feedbackWidgetRef = React.useRef<{ removeFromDom: () => void } | null>(
    null,
  );

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

  React.useEffect(() => {
    if (feedbackWidgetRef.current) {
      return;
    }

    const feedback = getFeedback();
    if (!feedback?.createWidget) {
      return;
    }

    feedbackWidgetRef.current = feedback.createWidget();

    return () => {
      feedbackWidgetRef.current?.removeFromDom();
      feedbackWidgetRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
