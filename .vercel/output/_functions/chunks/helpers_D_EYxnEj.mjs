function getCurrentTimeInUSA() {
  return /* @__PURE__ */ new Date();
}
function formatTimeForUSA(date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    // Pacific Time Zone
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZoneName: "short"
    // automatically shows PST or PDT
  }).format(date);
}
function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export { formatTimeForUSA as a, formatDate as f, getCurrentTimeInUSA as g };
