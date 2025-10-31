// Shortens long text and adds "..."
export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

// Returns the current date/time
export function getCurrentTimeInUSA(): Date {
  return new Date();
}

// Formats time for Pacific Time (automatically switches PST/PDT)
export function formatTimeForUSA(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles", // Pacific Time Zone
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short" // automatically shows PST or PDT
  }).format(date);
}

// Formats date in Month Day, Year format
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
