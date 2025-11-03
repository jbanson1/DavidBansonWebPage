type Theme = "light" | "dark";

const storageKey = "theme";

const getStoredPreference = (): Theme | null => {
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch (_) {
    // ignore storage errors (e.g., Safari private mode)
  }
  return null;
};

const systemPrefersDark = (): boolean => {
  if (typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const updateToggleControls = (theme: Theme) => {
  const isDark = theme === "dark";
  document.querySelectorAll<HTMLElement>("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme",
    );
  });
};

const applyTheme = (theme: Theme, persist: boolean) => {
  const root = document.documentElement;
  const themeValue: Theme = theme === "dark" ? "dark" : "light";

  root.classList.remove("light", "dark");
  root.classList.add(themeValue);
  root.setAttribute("data-theme", themeValue);

  try {
    root.style.colorScheme = themeValue;
  } catch (_) {
    // ignore color-scheme assignment errors
  }

  updateToggleControls(themeValue);

  if (persist) {
    try {
      localStorage.setItem(storageKey, themeValue);
    } catch (_) {
      // ignore persistence errors
    }
  }
};

const init = () => {
  const root = document.documentElement;
  let storedPreference = getStoredPreference();

  const initialTheme: Theme =
    storedPreference ||
    (root.classList.contains("dark")
      ? "dark"
      : root.classList.contains("light")
      ? "light"
      : systemPrefersDark()
      ? "dark"
      : "light");

  applyTheme(initialTheme, false);

  const handlePreferenceChange = (event: MediaQueryListEvent) => {
    if (storedPreference) return;
    applyTheme(event.matches ? "dark" : "light", false);
  };

  const mql =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;

  if (mql) {
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handlePreferenceChange);
    } else if (typeof mql.addListener === "function") {
      // Safari < 14
      mql.addListener(handlePreferenceChange);
    }
  }

  document.addEventListener("click", (event) => {
    const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
      "[data-theme-toggle]",
    );
    if (!target) return;

    event.preventDefault();

    const nextTheme: Theme = root.classList.contains("dark") ? "light" : "dark";
    storedPreference = nextTheme;
    applyTheme(nextTheme, true);
  });

  document.addEventListener("astro:after-swap", () => {
    const currentTheme: Theme = root.classList.contains("dark") ? "dark" : "light";
    updateToggleControls(currentTheme);
  });

  // Ensure freshly rendered buttons have correct aria state.
  updateToggleControls(initialTheme);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
