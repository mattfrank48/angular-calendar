import {
  $,
  D,
  M
} from "./chunk-LFKJDDRN.js";
import {
  A,
  T,
  _ as _2,
  d,
  q,
  x,
  y
} from "./chunk-XPI5WTOO.js";
import {
  J,
  Q,
  R,
  _,
  k,
  l,
  t
} from "./chunk-JJXEMKHC.js";
import {
  B,
  G,
  U,
  gt,
  j
} from "./chunk-ADX4GDKM.js";
import {
  Xn
} from "./chunk-BVQWMVQ7.js";
import {
  __awaiter,
  __rest
} from "./chunk-HSWANC32.js";
import "./chunk-GOMI4DH3.js";

// node_modules/@dayflow/core/dist/index.esm.js
var k2;
!(function(e) {
  e.DAY = "day", e.WEEK = "week", e.MONTH = "month", e.YEAR = "year";
})(k2 || (k2 = {}));
var T2 = { INDENT_STEP: 2, MIN_WIDTH: 25, MARGIN_BETWEEN: 2, CONTAINER_WIDTH: 320, OVERLAP_THRESHOLD: 0.25, EDGE_MARGIN: 3, MAX_LOAD_IMBALANCE: 0, REBALANCE_THRESHOLD: 2 };
var N = { OVERSCAN: 6, BUFFER_SIZE: 100, MIN_YEAR: 1900, MAX_YEAR: 2200, SCROLL_THROTTLE: 8, SCROLL_DEBOUNCE: 150, CACHE_CLEANUP_THRESHOLD: 200, MOBILE_WEEK_HEIGHT: 80, TABLET_WEEK_HEIGHT: 90, WEEK_HEIGHT: 119 };
var S = class {
  constructor(e = N.BUFFER_SIZE) {
    this.cache = /* @__PURE__ */ new Map(), this.accessOrder = [], this.maxSize = e;
  }
  getKey(e) {
    return `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`;
  }
  get(e) {
    const t2 = this.getKey(e), n = this.cache.get(t2);
    if (n) return this.updateAccessOrder(t2), n;
  }
  set(e, t2) {
    const n = this.getKey(e);
    if (this.cache.size >= this.maxSize) {
      const e2 = this.accessOrder.shift();
      void 0 !== e2 && this.cache.delete(e2);
    }
    this.cache.set(n, t2), this.updateAccessOrder(n);
  }
  updateAccessOrder(e) {
    const t2 = this.accessOrder.indexOf(e);
    t2 > -1 && this.accessOrder.splice(t2, 1), this.accessOrder.push(e);
  }
  getSize() {
    return this.cache.size;
  }
  clear() {
    this.cache.clear(), this.accessOrder = [];
  }
};
var M2 = [{ id: "blue", name: "Blue", isDefault: true, colors: { eventColor: "#eff6ff", eventSelectedColor: "rgba(59, 130, 246)", lineColor: "#3b82f6", textColor: "#1e3a8a" }, darkColors: { eventColor: "rgba(30, 64, 175, 0.8)", eventSelectedColor: "rgba(30, 58, 138, 1)", lineColor: "#3b82f6", textColor: "#dbeafe" } }, { id: "green", name: "Green", isDefault: true, colors: { eventColor: "#f0fdf4", eventSelectedColor: "rgba(16, 185, 129, 1)", lineColor: "#10b981", textColor: "#064e3b" }, darkColors: { eventColor: "rgba(4, 120, 87, 0.8)", eventSelectedColor: "rgba(6, 78, 59, 1)", lineColor: "#10b981", textColor: "#d1fae5" } }, { id: "purple", name: "Purple", isDefault: true, colors: { eventColor: "#faf5ff", eventSelectedColor: "rgba(139, 92, 246, 1)", lineColor: "#8b5cf6", textColor: "#5b21b6" }, darkColors: { eventColor: "rgba(109, 40, 217, 0.8)", eventSelectedColor: "rgba(91, 33, 182, 1)", lineColor: "#8b5cf6", textColor: "#ede9fe" } }, { id: "yellow", name: "Yellow", isDefault: true, colors: { eventColor: "#fefce8", eventSelectedColor: "rgba(245, 158, 11, 1)", lineColor: "#f59e0b", textColor: "#78350f" }, darkColors: { eventColor: "rgba(180, 83, 9, 0.8)", eventSelectedColor: "rgba(120, 53, 15, 1)", lineColor: "#f59e0b", textColor: "#fef3c7" } }, { id: "red", name: "Red", isDefault: true, colors: { eventColor: "#fef2f2", eventSelectedColor: "rgba(239, 68, 68, 1)", lineColor: "#ef4444", textColor: "#7f1d1d" }, darkColors: { eventColor: "rgba(185, 28, 28, 0.8)", eventSelectedColor: "rgba(127, 29, 29, 1)", lineColor: "#ef4444", textColor: "#fee2e2" } }, { id: "orange", name: "Orange", isDefault: true, colors: { eventColor: "#fff7edb3", eventSelectedColor: "rgba(249, 115, 22, 1)", lineColor: "#f97316", textColor: "#7c2d12" }, darkColors: { eventColor: "rgba(194, 65, 12, 0.8)", eventSelectedColor: "rgba(124, 45, 18, 1)", lineColor: "#f97316", textColor: "#fed7aa" } }, { id: "pink", name: "Pink", isDefault: true, colors: { eventColor: "#fdf2f8", eventSelectedColor: "rgba(236, 72, 153, 1)", lineColor: "#ec4899", textColor: "#831843" }, darkColors: { eventColor: "rgba(190, 24, 93, 0.8)", eventSelectedColor: "rgba(131, 24, 67, 1)", lineColor: "#ec4899", textColor: "#fce7f3" } }, { id: "teal", name: "Teal", isDefault: true, colors: { eventColor: "#f0fdfa", eventSelectedColor: "rgba(20, 184, 166, 1)", lineColor: "#14b8a6", textColor: "#134e4a" }, darkColors: { eventColor: "rgba(15, 118, 110, 0.8)", eventSelectedColor: "rgba(19, 78, 74, 1)", lineColor: "#14b8a6", textColor: "#ccfbf1" } }, { id: "indigo", name: "Indigo", isDefault: true, colors: { eventColor: "#eef2ffb3", eventSelectedColor: "rgba(99, 102, 241, 1)", lineColor: "#6366f1", textColor: "#312e81" }, darkColors: { eventColor: "rgba(67, 56, 202, 0.8)", eventSelectedColor: "rgba(49, 46, 129, 1)", lineColor: "#6366f1", textColor: "#e0e7ff" } }, { id: "gray", name: "Gray", isDefault: true, colors: { eventColor: "#f9fafbb3", eventSelectedColor: "rgba(107, 114, 128, 1)", lineColor: "#6b7280", textColor: "#1f2937" }, darkColors: { eventColor: "rgba(75, 85, 99, 0.8)", eventSelectedColor: "rgba(31, 41, 55, 1)", lineColor: "#6b7280", textColor: "#f3f4f6" } }];
var I = class {
  constructor(e, t2, n = "light") {
    this.calendars = /* @__PURE__ */ new Map(), this.defaultCalendarId = t2 || "blue", this.currentTheme = n;
    const r = e && e.length > 0;
    e ? e.forEach((e2) => {
      this.calendars.set(e2.id, e2);
    }) : M2.forEach((e2) => {
      this.calendars.set(e2.id, Object.assign(Object.assign({}, e2), { isVisible: !r && e2.isVisible }));
    });
  }
  register(e) {
    this.calendars.set(e.id, e);
  }
  unregister(e) {
    return this.calendars.delete(e);
  }
  get(e) {
    return this.calendars.get(e);
  }
  getAll() {
    return Array.from(this.calendars.values());
  }
  getVisible() {
    return this.getAll().filter((e) => false !== e.isVisible);
  }
  has(e) {
    return this.calendars.has(e);
  }
  reorder(e, t2) {
    const n = Array.from(this.calendars.entries());
    if (e < 0 || e >= n.length || t2 < 0 || t2 >= n.length) return;
    const [r] = n.splice(e, 1);
    n.splice(t2, 0, r), this.calendars.clear(), n.forEach(([e2, t3]) => {
      this.calendars.set(e2, t3);
    });
  }
  setVisibility(e, t2) {
    const n = this.calendars.get(e);
    n && this.calendars.set(e, Object.assign(Object.assign({}, n), { isVisible: t2 }));
  }
  setAllVisibility(e) {
    this.calendars.forEach((t2, n) => {
      this.calendars.set(n, Object.assign(Object.assign({}, t2), { isVisible: e }));
    });
  }
  updateCalendar(e, t2) {
    const n = this.calendars.get(e);
    n && this.calendars.set(e, Object.assign(Object.assign({}, n), t2));
  }
  setDefaultCalendar(e) {
    if (!this.has(e)) throw new Error(`Calendar type '${e}' does not exist`);
    this.defaultCalendarId = e;
  }
  getDefaultCalendarId() {
    return this.defaultCalendarId;
  }
  getDefaultCalendar() {
    const e = this.get(this.defaultCalendarId);
    return e || this.getAll()[0];
  }
  setTheme(e) {
    this.currentTheme = e;
  }
  getTheme() {
    return this.currentTheme;
  }
  resolveColors(e, t2) {
    const n = t2 || this.currentTheme, r = this.isDarkTheme(n);
    let a;
    return e && (a = this.get(e)), a || (a = this.getDefaultCalendar()), r && a.darkColors ? a.darkColors : a.colors;
  }
  getSelectedBgColor(e, t2) {
    return this.resolveColors(e, t2).eventSelectedColor;
  }
  getLineColor(e, t2) {
    return this.resolveColors(e, t2).lineColor;
  }
  getTextColor(e, t2) {
    return this.resolveColors(e, t2).textColor;
  }
  isDarkTheme(e) {
    return "dark" === e || "light" !== e && (!("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  validate(e) {
    const t2 = [];
    return e.id || t2.push("Calendar type must have an id"), e.name || t2.push("Calendar type must have a name"), e.colors ? (e.colors.eventColor || t2.push("Calendar colors must include eventColor"), e.colors.eventSelectedColor || t2.push("Calendar colors must include eventSelectedColor"), e.colors.lineColor || t2.push("Calendar colors must include lineColor"), e.colors.textColor || t2.push("Calendar colors must include textColor")) : t2.push("Calendar type must have colors configuration"), t2;
  }
};
var H = new I();
function R2() {
  return H;
}
function O(e) {
  const t2 = M2.find((t3) => t3.colors.lineColor.toLowerCase() === e.toLowerCase());
  return t2 ? { colors: t2.colors, darkColors: t2.darkColors } : { colors: { eventColor: e + "1A", eventSelectedColor: e, lineColor: e, textColor: e }, darkColors: { eventColor: e + "CC", eventSelectedColor: e, lineColor: e, textColor: "#ffffff" } };
}
var P = class _P {
  constructor(e = []) {
    this.events = /* @__PURE__ */ new Map(), this.isInTransaction = false, this.pendingChanges = [], e.forEach((e2) => this.events.set(e2.id, e2));
  }
  beginTransaction() {
    this.isInTransaction ? console.warn("Transaction already in progress. Nested transactions are not supported.") : (this.isInTransaction = true, this.pendingChanges = []);
  }
  endTransaction() {
    var e;
    if (!this.isInTransaction) return;
    const t2 = _P.normalizeChanges(this.pendingChanges);
    this.isInTransaction = false, this.pendingChanges = [], t2.length > 0 && (null === (e = this.onEventBatchChange) || void 0 === e || e.call(this, t2));
  }
  createEvent(e) {
    if (this.events.has(e.id)) throw new Error(`Event with ID ${e.id} already exists.`);
    this.events.set(e.id, e), this.emitChange({ type: "create", event: e });
  }
  updateEvent(e, t2) {
    const n = this.events.get(e);
    if (!n) throw new Error(`Event with id ${e} not found`);
    const r = Object.assign(Object.assign({}, n), t2);
    this.events.set(e, r), this.emitChange({ type: "update", before: n, after: r });
  }
  deleteEvent(e) {
    const t2 = this.events.get(e);
    t2 && (this.events.delete(e), this.emitChange({ type: "delete", event: t2 }));
  }
  getEvent(e) {
    return this.events.get(e);
  }
  getAllEvents() {
    return Array.from(this.events.values());
  }
  emitChange(e) {
    var t2;
    this.isInTransaction ? this.pendingChanges.push(e) : null === (t2 = this.onEventChange) || void 0 === t2 || t2.call(this, e);
  }
  static normalizeChanges(e) {
    const t2 = /* @__PURE__ */ new Map();
    for (const n of e) {
      const e2 = "delete" === n.type ? n.event.id : "update" === n.type ? n.after.id : n.event.id, r = t2.get(e2);
      r ? "create" === r.type ? "update" === n.type ? t2.set(e2, { type: "create", event: n.after }) : "delete" === n.type && t2.delete(e2) : "update" === r.type ? "update" === n.type ? t2.set(e2, { type: "update", before: r.before, after: n.after }) : "delete" === n.type && t2.set(e2, { type: "delete", event: r.before }) : "delete" === r.type && "create" === n.type && t2.set(e2, { type: "update", before: r.event, after: n.event }) : t2.set(e2, n);
    }
    return Array.from(t2.values());
  }
};
var L = new class {
  constructor() {
    var e, t2;
    this.isDevelopment = "production" !== (null === (t2 = null === (e = globalThis.process) || void 0 === e ? void 0 : e.env) || void 0 === t2 ? void 0 : t2.NODE_ENV);
  }
  formatMessage(e, t2, ...n) {
    if (!this.isDevelopment) return;
    const r = (/* @__PURE__ */ new Date()).toISOString(), a = `[DayFlow ${e.toUpperCase()}] ${r}:`;
    switch (e) {
      case "log":
        console.log(a, t2, ...n);
        break;
      case "warn":
        console.warn(a, t2, ...n);
        break;
      case "error":
        console.error(a, t2, ...n);
        break;
      case "debug":
        console.debug(a, t2, ...n);
    }
  }
  log(e, ...t2) {
    this.formatMessage("log", e, ...t2);
  }
  warn(e, ...t2) {
    this.formatMessage("warn", e, ...t2);
  }
  error(e, ...t2) {
    this.formatMessage("error", e, ...t2);
  }
  debug(e, ...t2) {
    this.formatMessage("debug", e, ...t2);
  }
}();
var A2 = { code: "en-US", messages: { allDay: "All day", noEvents: "No events for this day", more: "more", eventTitle: "Event Title", dateRange: "Date Range", timeRange: "Time Range", note: "Note", addNotePlaceholder: "Add a note...", setAsAllDay: "Set as All-day", setAsTimed: "Set as Timed Event", delete: "Delete", confirm: "Confirm", cancel: "Cancel", today: "Today", day: "Day", week: "Week", month: "Month", year: "Year", newEvent: "New Event", newAllDayEvent: "New All-day Event", newCalendarEvent: "New {calendarName} Event", newAllDayCalendarEvent: "New {calendarName} All-day Event", save: "Save", deleteCalendar: 'Delete "{calendarName}"?', deleteCalendarMessage: 'Do you want to delete "{calendarName}" or merge its events into another existing calendar?', merge: "Merge", confirmDeleteTitle: 'Are you sure you want to delete the calendar "{calendarName}"?', confirmDeleteMessage: "If you delete this calendar, all events associated with the calendar will also be deleted.", mergeConfirmTitle: 'Merge "{sourceName}" with "{targetName}"?', mergeConfirmMessage: 'Are you sure you want to merge "{sourceName}" with "{targetName}"? Doing so will move all the events from "{sourceName}" to "{targetName}" and "{sourceName}" will be deleted. This cannot be undone.', expandSidebar: "Expand calendar sidebar", collapseSidebar: "Collapse calendar sidebar", calendars: "Calendars", createCalendar: "Create New Calendar", calendarNamePlaceholder: "e.g. Work", customColor: "Custom Color...", create: "Create", calendarOptions: "Calendar Options", untitled: "Untitled", search: "Search", noResults: "No results found", calendar: "Calendar", starts: "Starts", ends: "Ends", notes: "Notes", titlePlaceholder: "Title", notesPlaceholder: "Notes", editEvent: "Edit Event", viewEvent: "View Event", done: "Done", quickCreateEvent: "Quick Create Event", quickCreatePlaceholder: "Movie at 7pm on Friday", noSuggestions: "Type to create", newCalendar: "New Calendar", refreshAll: "Refresh All", tomorrow: "Tomorrow", importCalendar: "Import Calendar", exportCalendar: "Export Calendar", addSchedule: "Add Schedule", importCalendarMessage: "This calendar contains new events. Please select a target calendar.", ok: "OK", cut: "Cut", copy: "Copy", pasteHere: "Paste Here", eventSummary: "Summary" } };
var $2 = { en: A2 };
function j2(e) {
  const t2 = e.code.split("-")[0].toLowerCase();
  $2[t2] = e;
}
function Y(e) {
  const t2 = e.split("-")[0].toLowerCase();
  return t2 in $2 ? t2 : "en";
}
function F(e) {
  try {
    return new Intl.DateTimeFormat(e), true;
  } catch (e2) {
    return false;
  }
}
function z(t2) {
  var n;
  return !(!t2 || "object" != typeof t2) && (!(t2 instanceof Date) && (t2 instanceof Xn.PlainDate || ("PlainDate" === (null === (n = null == t2 ? void 0 : t2.constructor) || void 0 === n ? void 0 : n.name) || !("hour" in t2) && !("timeZone" in t2) && "year" in t2 && "month" in t2 && "day" in t2)));
}
function _3(e) {
  return e instanceof Date;
}
function Z(t2, n = Xn.Now.timeZoneId()) {
  return Xn.Instant.fromEpochMilliseconds(t2.getTime()).toZonedDateTimeISO(n);
}
function W(e) {
  return "number" == typeof e.epochMilliseconds ? new Date(e.epochMilliseconds) : new Date(e.year, e.month - 1, e.day, e.hour, e.minute);
}
function U2(t2, n) {
  if (t2 instanceof Date) return t2;
  if (z(t2)) return (function(t3, n2 = Xn.Now.timeZoneId()) {
    if ("function" == typeof t3.toZonedDateTime) try {
      return W(t3.toZonedDateTime({ timeZone: n2, plainTime: Xn.PlainTime.from({ hour: 0, minute: 0 }) }));
    } catch (e) {
    }
    return new Date(t3.year, t3.month - 1, t3.day);
  })(t2, n);
  if (t2 && "object" == typeof t2 && "hour" in t2 && !("timeZone" in t2)) {
    const e = t2;
    return new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second || 0, e.millisecond || 0);
  }
  return t2 && "object" == typeof t2 && "year" in t2 ? W(t2) : new Date(t2);
}
function B2(t2, n) {
  const r = Math.floor(n), a = Math.round(60 * (n - r));
  return z(t2) ? Xn.PlainDateTime.from({ year: t2.year, month: t2.month, day: t2.day, hour: r, minute: a }) : "function" == typeof t2.with ? t2.with({ hour: r, minute: a, second: 0, millisecond: 0 }) : Xn.PlainDateTime.from({ year: t2.year, month: t2.month, day: t2.day, hour: r, minute: a });
}
function V(t2, n) {
  if (t2 instanceof Date && n instanceof Date) return t2.toDateString() === n.toDateString();
  const r = (t3) => {
    return t3 instanceof Date ? (n2 = t3, Xn.PlainDate.from({ year: n2.getFullYear(), month: n2.getMonth() + 1, day: n2.getDate() })) : z(t3) ? t3 : "function" == typeof t3.toPlainDate ? t3.toPlainDate() : Xn.PlainDate.from({ year: t3.year, month: t3.month, day: t3.day });
    var n2;
  }, a = r(t2), o = r(n);
  return 0 === Xn.PlainDate.compare(a, o);
}
function q2(e, t2) {
  return !V(e, t2);
}
function G2(t2, n = Xn.Now.timeZoneId()) {
  if ("function" == typeof t2.toZonedDateTime) {
    return (z(t2) ? t2 : t2.toPlainDate()).toZonedDateTime({ timeZone: n, plainTime: Xn.PlainTime.from({ hour: 0, minute: 0 }) });
  }
  return (z(t2) ? t2 : Xn.PlainDate.from({ year: t2.year, month: t2.month, day: t2.day })).toZonedDateTime({ timeZone: n, plainTime: Xn.PlainTime.from({ hour: 0, minute: 0 }) });
}
function K(t2, n = Xn.Now.timeZoneId()) {
  if ("function" == typeof t2.toZonedDateTime) {
    return (z(t2) ? t2 : t2.toPlainDate()).toZonedDateTime({ timeZone: n, plainTime: Xn.PlainTime.from({ hour: 23, minute: 59, second: 59, millisecond: 999 }) });
  }
  return (z(t2) ? t2 : Xn.PlainDate.from({ year: t2.year, month: t2.month, day: t2.day })).toZonedDateTime({ timeZone: n, plainTime: Xn.PlainTime.from({ hour: 23, minute: 59, second: 59, millisecond: 999 }) });
}
function X(t2, n) {
  const r = (t3) => z(t3) ? t3 : "function" == typeof t3.toPlainDate ? t3.toPlainDate() : Xn.PlainDate.from({ year: t3.year, month: t3.month, day: t3.day }), a = r(t2), o = r(n);
  return a.until(o).days;
}
function J2(e, t2) {
  const n = new Date(e.getFullYear(), e.getMonth(), e.getDate()), r = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate());
  return Math.round((r.getTime() - n.getTime()) / 864e5);
}
function Q2(e, t2) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t2), n;
}
function ee(t2 = Xn.Now.timeZoneId()) {
  return Xn.Now.zonedDateTimeISO(t2);
}
function te(t2 = Xn.Now.timeZoneId()) {
  return Xn.Now.plainDateISO(t2);
}
var ne = (e) => {
  if (e instanceof Date) {
    return e.getHours() + e.getMinutes() / 60;
  }
  return (t2 = e) instanceof Date ? t2.getHours() + t2.getMinutes() / 60 : z(t2) ? 0 : null !== t2 && "object" == typeof t2 && "hour" in t2 && void 0 !== t2.hour ? t2.hour + (null !== (n = t2.minute) && void 0 !== n ? n : 0) / 60 : 0;
  var t2, n;
};
var re = (e, t2) => {
  if (e instanceof Date) {
    const n = new Date(e), r = Math.floor(t2), a = Math.round(60 * (t2 - r));
    return n.setHours(r, a, 0, 0), n;
  }
  return B2(e, t2);
};
var ae = (e) => {
  if (e instanceof Date) {
    const t2 = new Date(e);
    return t2.setHours(0, 0, 0, 0), t2;
  }
  return G2(e);
};
var oe = (e) => {
  if (e instanceof Date) {
    const t2 = new Date(e);
    return t2.setHours(23, 59, 59, 999), t2;
  }
  return K(e);
};
var le = (t2, n) => {
  if (t2 instanceof Date && n instanceof Date) return t2.getFullYear() === n.getFullYear() && t2.getMonth() === n.getMonth() && t2.getDate() === n.getDate();
  return V(t2 instanceof Date ? Xn.PlainDate.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate() }) : z(t2) ? t2 : t2.toPlainDate(), n instanceof Date ? Xn.PlainDate.from({ year: n.getFullYear(), month: n.getMonth() + 1, day: n.getDate() }) : z(n) ? n : n.toPlainDate());
};
var ie = (e, t2) => !le(e, t2);
var se = (e, t2) => (t2 || R2()).resolveColors(e).eventColor;
var de = (e, t2) => (t2 || R2()).resolveColors(e).textColor;
var ce = (e, t2) => (t2 || R2()).resolveColors(e).eventSelectedColor;
var ue = (e, t2) => (t2 || R2()).resolveColors(e).lineColor;
var he = 0.25;
var ge = (e, t2 = 0) => {
  const n = Math.floor(e), r = t2 || Math.round(60 * (e - n));
  return `${n.toString().padStart(2, "0")}:${r.toString().padStart(2, "0")}`;
};
var me = (e) => {
  const t2 = ne(e.start), n = fe(e);
  return `${ge(t2)} - ${ge(n)}`;
};
var ve = (e) => 0.25 * Math.round(e / 0.25);
var fe = (e) => {
  if (!e.end) return 0;
  const t2 = ne(e.end);
  if (e.allDay || !e.start) return t2;
  const n = U2(e.start), r = U2(e.end);
  if (!(n.getFullYear() !== r.getFullYear() || n.getMonth() !== r.getMonth() || n.getDate() !== r.getDate())) return t2;
  if (0 === t2 && 0 === r.getMinutes() && 0 === r.getSeconds() && 0 === r.getMilliseconds()) {
    const e2 = r.getTime() - n.getTime();
    if (e2 > 0 && e2 < 864e5) return 24;
  }
  return t2;
};
var pe = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var ye = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var be = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var we = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var De = (e) => {
  const t2 = e.getDay(), n = e.getDate() - t2 + (0 === t2 ? -6 : 1), r = new Date(e);
  r.setDate(n), r.setHours(0, 0, 0, 0);
  const a = new Date(r);
  return a.setDate(r.getDate() + 6), a.setHours(23, 59, 59, 999), { monday: r, sunday: a };
};
var xe = () => {
  const e = /* @__PURE__ */ new Date(), t2 = /* @__PURE__ */ new Date(), n = e.getDay(), r = e.getDate() - n + (0 === n ? -6 : 1);
  return pe.map((n2, a) => {
    const o = new Date(e);
    return o.setDate(r + a), { date: o.getDate(), month: o.toLocaleString("default", { month: "short" }), isToday: o.getDate() === t2.getDate() && o.getMonth() === t2.getMonth() && o.getFullYear() === t2.getFullYear() };
  });
};
var Ee = (e) => {
  const t2 = new Date(e), n = t2.getDate(), r = t2.getMonth(), a = t2.getFullYear(), o = /* @__PURE__ */ new Date();
  return { date: t2, day: n, month: r, year: a, monthName: be[r], shortMonthName: we[r], isToday: o.getDate() === n && o.getMonth() === r && o.getFullYear() === a };
};
var Ce = (e) => {
  const t2 = [], n = new Date(e);
  for (let e2 = 0; e2 < 7; e2++) {
    const e3 = new Date(n);
    t2.push(Ee(e3)), n.setDate(n.getDate() + 1);
  }
  return { days: t2, startDate: new Date(e), monthYear: ke(t2) };
};
var ke = (e) => {
  const t2 = {};
  e.forEach((e2) => {
    const n2 = `${e2.month}-${e2.year}`;
    t2[n2] = (t2[n2] || 0) + 1;
  });
  let n = 0, r = "";
  Object.entries(t2).forEach(([e2, t3]) => {
    t3 > n && (n = t3, r = e2);
  });
  const [a, o] = r.split("-").map(Number);
  return { month: be[a], monthIndex: a, year: o };
};
var Te = (e, t2 = 3) => {
  const n = 5 * t2, { monday: r } = De(e), a = [], o = Math.floor(n / 2), l2 = new Date(r);
  l2.setDate(l2.getDate() - 7 * o);
  for (let e2 = 0; e2 < n; e2++) {
    const t3 = new Date(l2);
    t3.setDate(t3.getDate() + 7 * e2), a.push(Ce(t3));
  }
  return a;
};
function Ne(e, t2) {
  const n = [], r = Math.floor(t2 / 2), a = new Date(e), o = e.getDay(), l2 = 0 === o ? 6 : o - 1;
  a.setDate(e.getDate() - l2), a.setHours(0, 0, 0, 0);
  const i = new Date(a);
  i.setDate(i.getDate() - 7 * r);
  for (let e2 = 0; e2 < t2; e2++) {
    const t3 = new Date(i);
    t3.setDate(t3.getDate() + 7 * e2), n.push(Ce(t3));
  }
  return n;
}
var Se = (e, t2) => t2.filter((t3) => t3.day === e && !t3.allDay);
var Me = (e, t2, n) => t2.filter((t3) => {
  if (!t3.allDay) return false;
  if (!n) return t3.day === e;
  const r = new Date(n);
  r.setDate(n.getDate() + e), r.setHours(0, 0, 0, 0);
  const a = U2(t3.start);
  a.setHours(0, 0, 0, 0);
  const o = U2(t3.end);
  return o.setHours(0, 0, 0, 0), r >= a && r <= o;
});
var Ie = (e, t2) => {
  const n = new Date(e);
  return n.setDate(e.getDate() + t2), n;
};
var He = (t2, n, r) => {
  const a = Ie(r, n);
  return Object.assign(Object.assign({}, t2), { day: n, start: t2.allDay ? Xn.PlainDate.from({ year: a.getFullYear(), month: a.getMonth() + 1, day: a.getDate() }) : Xn.ZonedDateTime.from({ year: a.getFullYear(), month: a.getMonth() + 1, day: a.getDate(), hour: a.getHours(), minute: a.getMinutes(), timeZone: Xn.Now.timeZoneId() }), end: t2.allDay ? Xn.PlainDate.from({ year: a.getFullYear(), month: a.getMonth() + 1, day: a.getDate() }) : Xn.ZonedDateTime.from({ year: a.getFullYear(), month: a.getMonth() + 1, day: a.getDate(), hour: a.getHours(), minute: a.getMinutes(), timeZone: Xn.Now.timeZoneId() }) });
};
var Re = (t2, n) => n ? Xn.PlainDate.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate() }) : Xn.ZonedDateTime.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate(), hour: t2.getHours(), minute: t2.getMinutes(), second: t2.getSeconds(), millisecond: t2.getMilliseconds(), timeZone: Xn.Now.timeZoneId() });
var Oe = (e, t2) => {
  var n, r;
  const a = Ie(t2, null !== (n = e.day) && void 0 !== n ? n : 0), o = null !== (r = e.allDay) && void 0 !== r && r;
  return Object.assign(Object.assign({}, e), { start: Re(a, o), end: Re(a, o) });
};
var Pe = (e, t2) => {
  const n = new Date(e);
  n.setHours(0, 0, 0, 0);
  const r = new Date(t2);
  r.setHours(0, 0, 0, 0);
  const a = n.getTime() - r.getTime();
  return Math.floor(a / 864e5);
};
var Le = (e, t2) => {
  const n = Pe(e, t2);
  return n >= 0 && n <= 6;
};
var Ae = (e, t2) => e.map((e2) => {
  const n = U2(e2.start), r = Pe(n, t2);
  return Object.assign(Object.assign({}, e2), { day: r });
});
var $e = (e, t2) => {
  const n = new Date(e);
  n.setHours(0, 0, 0, 0);
  const r = new Date(t2);
  r.setHours(0, 0, 0, 0);
  const a = r.getTime() - n.getTime();
  return Math.floor(a / 864e5);
};
var je = (e, t2) => {
  const n = new Date(t2);
  return n.setDate(t2.getDate() + 6), n.setHours(23, 59, 59, 999), e.filter((e2) => {
    const r = U2(e2.start);
    return r >= t2 && r <= n;
  }).map((e2) => {
    const n2 = Pe(U2(e2.start), t2);
    return Object.assign(Object.assign({}, e2), { day: n2 });
  });
};
var Ye = (e, t2) => {
  var n, r;
  const a = new Date(t2);
  a.setDate(t2.getDate() + (null !== (n = e.day) && void 0 !== n ? n : 0));
  const o = null !== (r = e.allDay) && void 0 !== r && r;
  return Object.assign(Object.assign({}, e), { start: Re(a, o), end: Re(a, o) });
};
var Fe = (e, t2, n) => {
  var r;
  const a = new Date(n);
  a.setDate(n.getDate() + t2);
  const o = null !== (r = e.allDay) && void 0 !== r && r;
  return Object.assign(Object.assign({}, e), { day: t2, start: Re(a, o), end: Re(a, o) });
};
var ze = (e, t2) => e === t2 || !(!e || !t2) && (e.title === t2.title && e.calendarId === t2.calendarId && (e.description || "") === (t2.description || "") && !!e.allDay == !!t2.allDay && e.start.toString() === t2.start.toString() && e.end.toString() === t2.end.toString());
function _e() {
  const t2 = /* @__PURE__ */ new Date(), n = t2.getDay(), r = new Date(t2), a = 0 === n ? -6 : 1 - n;
  r.setDate(t2.getDate() + a), r.setHours(0, 0, 0, 0);
  return [{ id: "15", title: "C-早开始", day: 3, startHour: 8.5, endHour: 10, calendarId: "teal" }, { id: "16", title: "D-晚开始", day: 3, startHour: 9, endHour: 10.5, calendarId: "red" }, { id: "21", title: "A", day: 0, startHour: 14, endHour: 16, calendarId: "blue" }, { id: "22", title: "B", day: 0, startHour: 14.5, endHour: 16, calendarId: "green" }, { id: "23", title: "C", day: 0, startHour: 14.5, endHour: 16, calendarId: "purple" }, { id: "24", title: "D", day: 0, startHour: 15, endHour: 16, calendarId: "yellow" }, { id: "25", title: "E", day: 0, startHour: 15, endHour: 16, calendarId: "red" }, { id: "26", title: "F", day: 0, startHour: 15.5, endHour: 16, calendarId: "orange" }, { id: "27", title: "G", day: 0, startHour: 15, endHour: 16, calendarId: "pink" }, { id: "28", title: "H", day: 0, startHour: 15.5, endHour: 16, calendarId: "teal" }, { id: "29", title: "L", day: 0, startHour: 15.5, endHour: 16, calendarId: "teal" }, { id: "30", title: "I", day: 0, startHour: 15.5, endHour: 16, calendarId: "blue" }, { id: "99", title: "X", day: 0, startHour: 15.5, endHour: 16, calendarId: "blue" }, { id: "6", title: "假日", day: 0, startHour: 0, endHour: 0, calendarId: "blue", allDay: true }, { id: "7", title: "研讨会", day: 2, startHour: 0, endHour: 0, calendarId: "green", allDay: true }, { id: "8", title: "团队建设", day: 4, startHour: 0, endHour: 0, calendarId: "purple", allDay: true }, { id: "41", title: "A", day: 3, startHour: 16, endHour: 18.25, calendarId: "blue" }, { id: "42", title: "B", day: 3, startHour: 16.5, endHour: 18, calendarId: "green" }, { id: "43", title: "C", day: 3, startHour: 16.75, endHour: 17.75, calendarId: "purple" }, { id: "44", title: "D", day: 3, startHour: 17, endHour: 19, calendarId: "yellow" }, { id: "45", title: "E", day: 3, startHour: 17.75, endHour: 18.75, calendarId: "red" }, { id: "46", title: "X", day: 2, startHour: 15, endHour: 15.75, calendarId: "orange" }, { id: "47", title: "Y", day: 2, startHour: 15.5, endHour: 19.5, calendarId: "pink" }, { id: "48", title: "Z", day: 2, startHour: 15, endHour: 15.75, calendarId: "teal" }, { id: "59", title: "Q", day: 2, startHour: 17, endHour: 18, calendarId: "teal" }, { id: "60", title: "W", day: 2, startHour: 15.5, endHour: 18, calendarId: "teal" }, { id: "31", title: "A", day: 6, startHour: 14, endHour: 16, calendarId: "blue" }, { id: "32", title: "B", day: 6, startHour: 14.5, endHour: 16, calendarId: "green" }, { id: "33", title: "C", day: 6, startHour: 14.5, endHour: 16, calendarId: "purple" }, { id: "34", title: "D", day: 6, startHour: 15, endHour: 16, calendarId: "yellow" }, { id: "35", title: "E", day: 6, startHour: 15.5, endHour: 16.5, calendarId: "red" }, { id: "36", title: "F", day: 6, startHour: 16.25, endHour: 16.75, calendarId: "orange" }, { id: "37", title: "G", day: 6, startHour: 16, endHour: 17.25, calendarId: "pink" }, { id: "51", title: "下周会议1", day: 1, startHour: 9, endHour: 10, calendarId: "blue" }, { id: "52", title: "下周会议2", day: 3, startHour: 14, endHour: 15, calendarId: "green" }, { id: "81", title: "A", day: 5, startHour: 14, endHour: 16, calendarId: "blue" }, { id: "82", title: "B", day: 5, startHour: 14.5, endHour: 16, calendarId: "green" }, { id: "83", title: "C", day: 5, startHour: 14.5, endHour: 16, calendarId: "purple" }, { id: "84", title: "D", day: 5, startHour: 15, endHour: 16, calendarId: "yellow" }, { id: "85", title: "E", day: 5, startHour: 15, endHour: 16, calendarId: "red" }, { id: "86", title: "F", day: 5, startHour: 15.75, endHour: 17, calendarId: "orange" }, { id: "87", title: "G", day: 5, startHour: 14.75, endHour: 17.5, calendarId: "pink" }].map((t3) => {
    const n2 = new Date(r);
    if (n2.setDate(r.getDate() + t3.day), t3.allDay) return { id: t3.id, title: t3.title, start: Xn.PlainDate.from({ year: n2.getFullYear(), month: n2.getMonth() + 1, day: n2.getDate() }), end: Xn.PlainDate.from({ year: n2.getFullYear(), month: n2.getMonth() + 1, day: n2.getDate() }), allDay: true, calendarId: t3.calendarId, day: t3.day };
    const a2 = Math.floor(t3.startHour), o = Math.round(60 * (t3.startHour - a2)), l2 = Math.floor(t3.endHour), i = Math.round(60 * (t3.endHour - l2));
    return { id: t3.id, title: t3.title, start: Xn.ZonedDateTime.from({ year: n2.getFullYear(), month: n2.getMonth() + 1, day: n2.getDate(), hour: a2, minute: o, timeZone: Xn.Now.timeZoneId() }), end: Xn.ZonedDateTime.from({ year: n2.getFullYear(), month: n2.getMonth() + 1, day: n2.getDate(), hour: l2, minute: i, timeZone: Xn.Now.timeZoneId() }), allDay: false, calendarId: t3.calendarId, day: t3.day };
  });
}
function Ze() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}
function We(e, t2) {
  if (e === t2) return true;
  if (e instanceof Date && t2 instanceof Date) return e.getTime() === t2.getTime();
  if ("object" != typeof e || null === e || "object" != typeof t2 || null === t2) return false;
  if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t2)) return false;
  const n = Object.keys(e), r = Object.keys(t2);
  if (n.length !== r.length) return false;
  for (const a of n) if (!r.includes(a) || !We(e[a], t2[a])) return false;
  return true;
}
var Ue = class {
  constructor(e) {
    var t2, n, r, a, o;
    this.undoStack = [], this.pendingSnapshot = null, this.MAX_UNDO_STACK = 50, this.subscribe = (e2) => (this.listeners.add(e2), () => this.listeners.delete(e2)), this.notify = () => {
      this.listeners.forEach((e2) => e2(this));
    }, this.pushToUndo = (e2) => {
      this.undoStack.push({ type: "events_snapshot", data: e2 || [...this.state.events] }), this.undoStack.length > this.MAX_UNDO_STACK && this.undoStack.shift();
    }, this.undo = () => {
      if (0 === this.undoStack.length) return;
      const e2 = this.undoStack.pop();
      "events_snapshot" === (null == e2 ? void 0 : e2.type) && (this.state.events = e2.data, this.store = new P(this.state.events), this.setupStoreListeners(), this.triggerRender(), this.notify());
    }, this.getReadOnlyConfig = () => {
      var e2, t3;
      const n2 = this.state.readOnly;
      return true === n2 ? { draggable: false, viewable: false } : false === n2 ? { draggable: true, viewable: true } : { draggable: null !== (e2 = n2.draggable) && void 0 !== e2 && e2, viewable: null !== (t3 = n2.viewable) && void 0 !== t3 && t3 };
    }, this.isInternalEditable = () => true !== this.state.readOnly && "object" != typeof this.state.readOnly, this.changeView = (e2) => {
      var t3, n2;
      if (!this.state.views.has(e2)) throw new Error(`View ${e2} is not registered`);
      this.state.currentView = e2, this.state.highlightedEventId = null, null === (n2 = (t3 = this.callbacks).onViewChange) || void 0 === n2 || n2.call(t3, e2), this.handleVisibleRangeChange("viewChange"), this.notify();
    }, this.getCurrentView = () => {
      const e2 = this.state.views.get(this.state.currentView);
      if (!e2) throw new Error(`Current view ${this.state.currentView} is not registered`);
      return e2;
    }, this.emitVisibleRange = (e2, t3, n2 = "navigation") => {
      var r2, a2;
      null === (a2 = (r2 = this.callbacks).onVisibleRangeChange) || void 0 === a2 || a2.call(r2, new Date(e2), new Date(t3), n2);
    }, this.handleVisibleRangeChange = (e2) => {
      const t3 = this.state.views.get(this.state.currentView);
      switch (null == t3 ? void 0 : t3.type) {
        case k2.DAY: {
          const t4 = new Date(this.state.currentDate);
          t4.setHours(0, 0, 0, 0);
          const n2 = new Date(t4);
          n2.setDate(n2.getDate() + 1), this.emitVisibleRange(t4, n2, e2);
          break;
        }
        case k2.WEEK: {
          const { monday: t4 } = De(this.state.currentDate), n2 = new Date(t4), r2 = new Date(t4);
          r2.setDate(r2.getDate() + 7), this.emitVisibleRange(n2, r2, e2);
          break;
        }
        case k2.MONTH: {
          if ("navigation" === e2) break;
          const t4 = new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth(), 1), { monday: n2 } = De(t4), r2 = new Date(n2), a2 = new Date(n2);
          a2.setDate(a2.getDate() + 42), this.emitVisibleRange(r2, a2, e2);
          break;
        }
        case k2.YEAR: {
          const t4 = new Date(this.state.currentDate.getFullYear(), 0, 1);
          t4.setHours(0, 0, 0, 0);
          const n2 = new Date(this.state.currentDate.getFullYear(), 11, 31);
          n2.setDate(n2.getDate() + 1), this.emitVisibleRange(t4, n2, e2);
          break;
        }
      }
    }, this.setCurrentDate = (e2) => {
      var t3, n2;
      this.state.currentDate = new Date(e2), null === (n2 = (t3 = this.callbacks).onDateChange) || void 0 === n2 || n2.call(t3, this.state.currentDate), this.setVisibleMonth(this.state.currentDate), this.handleVisibleRangeChange("navigation"), this.notify();
    }, this.getCurrentDate = () => new Date(this.state.currentDate), this.setVisibleMonth = (e2) => {
      var t3, n2;
      const r2 = new Date(e2.getFullYear(), e2.getMonth(), 1);
      this.visibleMonth.getFullYear() === r2.getFullYear() && this.visibleMonth.getMonth() === r2.getMonth() || (this.visibleMonth = r2, null === (n2 = (t3 = this.callbacks).onVisibleMonthChange) || void 0 === n2 || n2.call(t3, new Date(this.visibleMonth)), this.notify());
    }, this.getVisibleMonth = () => new Date(this.visibleMonth), this.goToToday = () => {
      this.setCurrentDate(/* @__PURE__ */ new Date());
    }, this.goToPrevious = () => {
      const e2 = new Date(this.state.currentDate);
      switch (this.state.currentView) {
        case k2.DAY:
          e2.setDate(e2.getDate() - 1);
          break;
        case k2.WEEK:
          e2.setDate(e2.getDate() - 7);
          break;
        case k2.MONTH:
          e2.setMonth(e2.getMonth() - 1);
          break;
        case k2.YEAR:
          e2.setFullYear(e2.getFullYear() - 1);
      }
      this.setCurrentDate(e2);
    }, this.goToNext = () => {
      const e2 = new Date(this.state.currentDate);
      switch (this.state.currentView) {
        case k2.DAY:
          e2.setDate(e2.getDate() + 1);
          break;
        case k2.WEEK:
          e2.setDate(e2.getDate() + 7);
          break;
        case k2.MONTH:
          e2.setMonth(e2.getMonth() + 1);
          break;
        case k2.YEAR:
          e2.setFullYear(e2.getFullYear() + 1);
      }
      this.setCurrentDate(e2);
    }, this.selectDate = (e2) => {
      var t3, n2;
      this.setCurrentDate(e2), null === (n2 = (t3 = this.callbacks).onDateChange) || void 0 === n2 || n2.call(t3, new Date(e2));
    }, this.applyEventsChanges = (e2, t3) => {
      if (this.isInternalEditable() || t3) {
        if (t3 ? this.pendingSnapshot || (this.pendingSnapshot = [...this.state.events]) : this.pendingSnapshot ? (this.pushToUndo(this.pendingSnapshot), this.pendingSnapshot = null) : this.pushToUndo(), t3) {
          let t4 = [...this.state.events];
          if (e2.delete) {
            const n2 = new Set(e2.delete);
            t4 = t4.filter((e3) => !n2.has(e3.id));
          }
          return e2.update && e2.update.forEach(({ id: e3, updates: n2 }) => {
            const r2 = t4.findIndex((t5) => t5.id === e3);
            -1 !== r2 && (t4[r2] = Object.assign(Object.assign({}, t4[r2]), n2));
          }), e2.add && (t4 = [...t4, ...e2.add]), this.state.events = t4, void this.notify();
        }
        this.store.beginTransaction(), e2.delete && e2.delete.forEach((e3) => this.store.deleteEvent(e3)), e2.update && e2.update.forEach(({ id: e3, updates: t4 }) => {
          try {
            this.store.updateEvent(e3, t4);
          } catch (t5) {
            console.warn(`Failed to update event ${e3}:`, t5);
          }
        }), e2.add && e2.add.forEach((e3) => {
          try {
            this.store.createEvent(e3);
          } catch (t4) {
            console.warn(`Failed to create event ${e3.id}:`, t4);
          }
        }), this.store.endTransaction();
      }
    }, this.addEvent = (e2) => {
      this.isInternalEditable() ? (this.pendingSnapshot = null, this.pushToUndo(), this.store.createEvent(e2)) : L.warn("Cannot add event in read-only mode");
    }, this.updateEvent = (e2, t3, n2) => {
      if (this.isInternalEditable() || n2) {
        if (this.isInternalEditable()) {
          if (n2 ? this.pendingSnapshot || (this.pendingSnapshot = [...this.state.events]) : this.pendingSnapshot ? (this.pushToUndo(this.pendingSnapshot), this.pendingSnapshot = null) : this.pushToUndo(), n2) {
            const n3 = this.state.events.findIndex((t4) => t4.id === e2);
            if (-1 === n3) throw new Error(`Event with id ${e2} not found`);
            const r2 = Object.assign(Object.assign({}, this.state.events[n3]), t3);
            return this.state.events = [...this.state.events.slice(0, n3), r2, ...this.state.events.slice(n3 + 1)], void this.notify();
          }
          this.store.updateEvent(e2, t3);
        }
      } else L.warn("Cannot update event in read-only mode");
    }, this.deleteEvent = (e2) => {
      this.isInternalEditable() ? (this.pendingSnapshot = null, this.pushToUndo(), this.store.deleteEvent(e2)) : L.warn("Cannot delete event in read-only mode");
    }, this.getAllEvents = () => [...this.state.events], this.onEventClick = (e2) => {
      var t3, n2;
      null === (n2 = (t3 = this.callbacks).onEventClick) || void 0 === n2 || n2.call(t3, e2);
    }, this.onMoreEventsClick = (e2) => {
      var t3, n2;
      null === (n2 = (t3 = this.callbacks).onMoreEventsClick) || void 0 === n2 || n2.call(t3, e2);
    }, this.highlightEvent = (e2) => {
      var t3, n2;
      this.state.highlightedEventId !== e2 && (this.state.highlightedEventId = e2, null === (n2 = (t3 = this.callbacks).onRender) || void 0 === n2 || n2.call(t3), this.notify());
    }, this.selectEvent = (e2) => {
      var t3, n2;
      this.state.selectedEventId !== e2 && (this.state.selectedEventId = e2, null === (n2 = (t3 = this.callbacks).onRender) || void 0 === n2 || n2.call(t3), this.notify());
    }, this.dismissUI = () => {
      var e2, t3;
      null === (t3 = (e2 = this.callbacks).onDismissUI) || void 0 === t3 || t3.call(e2), this.notify();
    }, this.getEvents = () => {
      const e2 = this.getAllEvents(), t3 = new Set(this.calendarRegistry.getAll().filter((e3) => false !== e3.isVisible).map((e3) => e3.id));
      return e2.filter((e3) => !e3.calendarId || (!this.calendarRegistry.has(e3.calendarId) || t3.has(e3.calendarId)));
    }, this.getCalendars = () => this.calendarRegistry.getAll(), this.reorderCalendars = (e2, t3) => {
      var n2, r2;
      this.calendarRegistry.reorder(e2, t3), null === (r2 = (n2 = this.callbacks).onRender) || void 0 === r2 || r2.call(n2), this.notify();
    }, this.setCalendarVisibility = (e2, t3) => {
      var n2, r2;
      this.calendarRegistry.setVisibility(e2, t3), null === (r2 = (n2 = this.callbacks).onRender) || void 0 === r2 || r2.call(n2), this.notify();
    }, this.setAllCalendarsVisibility = (e2) => {
      var t3, n2;
      this.calendarRegistry.setAllVisibility(e2), null === (n2 = (t3 = this.callbacks).onRender) || void 0 === n2 || n2.call(t3), this.notify();
    }, this.updateCalendar = (e2, t3, n2) => {
      var r2, a2, o2, l3;
      if (this.calendarRegistry.updateCalendar(e2, t3), n2) return void this.notify();
      const i = this.calendarRegistry.get(e2);
      i && (null === (a2 = (r2 = this.callbacks).onCalendarUpdate) || void 0 === a2 || a2.call(r2, i)), null === (l3 = (o2 = this.callbacks).onRender) || void 0 === l3 || l3.call(o2), this.notify();
    }, this.createCalendar = (e2) => {
      var t3, n2, r2, a2;
      this.calendarRegistry.register(e2), null === (n2 = (t3 = this.callbacks).onCalendarCreate) || void 0 === n2 || n2.call(t3, e2), null === (a2 = (r2 = this.callbacks).onRender) || void 0 === a2 || a2.call(r2), this.notify();
    }, this.deleteCalendar = (e2) => {
      var t3, n2, r2, a2;
      this.calendarRegistry.unregister(e2), null === (n2 = (t3 = this.callbacks).onCalendarDelete) || void 0 === n2 || n2.call(t3, e2), null === (a2 = (r2 = this.callbacks).onRender) || void 0 === a2 || a2.call(r2), this.notify();
    }, this.mergeCalendars = (e2, t3) => {
      var n2, r2;
      const a2 = this.store.getAllEvents().filter((t4) => t4.calendarId === e2);
      this.pushToUndo(), this.store.beginTransaction(), a2.forEach((e3) => {
        this.store.updateEvent(e3.id, { calendarId: t3 });
      }), this.store.endTransaction(), this.deleteCalendar(e2), null === (r2 = (n2 = this.callbacks).onCalendarMerge) || void 0 === r2 || r2.call(n2, e2, t3);
    }, this.getCalendarHeaderConfig = () => this.useCalendarHeader, this.installPlugin = (e2) => {
      this.state.plugins.has(e2.name) ? L.warn(`Plugin ${e2.name} is already installed`) : (this.state.plugins.set(e2.name, e2), e2.install(this));
    }, this.getPlugin = (e2) => {
      const t3 = this.state.plugins.get(e2);
      return null == t3 ? void 0 : t3.api;
    }, this.hasPlugin = (e2) => this.state.plugins.has(e2), this.getPluginConfig = (e2) => {
      const t3 = this.state.plugins.get(e2);
      return (null == t3 ? void 0 : t3.config) || {};
    }, this.updatePluginConfig = (e2, t3) => {
      const n2 = this.state.plugins.get(e2);
      n2 && (n2.config = Object.assign(Object.assign({}, n2.config), t3), this.notify());
    }, this.getViewConfig = (e2) => {
      const t3 = this.state.views.get(e2);
      return (null == t3 ? void 0 : t3.config) || {};
    }, this.triggerRender = () => {
      var e2, t3;
      null === (t3 = (e2 = this.callbacks).onRender) || void 0 === t3 || t3.call(e2), this.notify();
    }, this.getCalendarRegistry = () => this.calendarRegistry, this.getUseEventDetailDialog = () => this.useEventDetailDialog, this.getCustomMobileEventRenderer = () => this.customMobileEventRenderer, this.updateConfig = (e2) => {
      var t3;
      let n2 = false;
      if (void 0 !== e2.customMobileEventRenderer && e2.customMobileEventRenderer !== this.customMobileEventRenderer && (this.customMobileEventRenderer = e2.customMobileEventRenderer, n2 = true), void 0 !== e2.useEventDetailDialog && e2.useEventDetailDialog !== this.useEventDetailDialog && (this.useEventDetailDialog = e2.useEventDetailDialog, n2 = true), void 0 !== e2.useCalendarHeader && e2.useCalendarHeader !== this.useCalendarHeader && (this.useCalendarHeader = e2.useCalendarHeader, n2 = true), void 0 === e2.readOnly || We(e2.readOnly, this.state.readOnly) || (this.state.readOnly = e2.readOnly, n2 = true), e2.callbacks && (this.callbacks = Object.assign(Object.assign({}, this.callbacks), e2.callbacks)), void 0 !== (null === (t3 = e2.theme) || void 0 === t3 ? void 0 : t3.mode) && e2.theme.mode !== this.getTheme() && this.setTheme(e2.theme.mode), void 0 !== e2.switcherMode && e2.switcherMode !== this.state.switcherMode && (this.state.switcherMode = e2.switcherMode, n2 = true), void 0 !== e2.locale) {
        const t4 = this.resolveLocale(e2.locale);
        We(t4, this.state.locale) || (this.state.locale = t4, n2 = true);
      }
      n2 && (this.triggerRender(), this.notify());
    }, this.setTheme = (e2) => {
      var t3, n2;
      this.calendarRegistry.setTheme(e2), this.themeChangeListeners.forEach((t4) => {
        t4(e2);
      }), null === (n2 = (t3 = this.callbacks).onRender) || void 0 === n2 || n2.call(t3), this.notify();
    }, this.getTheme = () => this.calendarRegistry.getTheme(), this.subscribeThemeChange = (e2) => (this.themeChangeListeners.add(e2), () => {
      this.unsubscribeThemeChange(e2);
    }), this.unsubscribeThemeChange = (e2) => {
      this.themeChangeListeners.delete(e2);
    }, this.state = { currentView: e.defaultView || k2.WEEK, currentDate: e.initialDate || /* @__PURE__ */ new Date(), events: e.events || [], switcherMode: e.switcherMode || "buttons", plugins: /* @__PURE__ */ new Map(), views: /* @__PURE__ */ new Map(), locale: this.resolveLocale(e.locale), highlightedEventId: null, selectedEventId: null, readOnly: e.readOnly || false }, this.callbacks = e.callbacks || {}, this.themeChangeListeners = /* @__PURE__ */ new Set(), this.listeners = /* @__PURE__ */ new Set(), this.store = new P(this.state.events), this.setupStoreListeners(), this.calendarRegistry = new I(e.calendars, e.defaultCalendar, (null === (t2 = e.theme) || void 0 === t2 ? void 0 : t2.mode) || "light"), o = this.calendarRegistry, H = o;
    const l2 = this.state.currentDate;
    this.visibleMonth = new Date(l2.getFullYear(), l2.getMonth(), 1), this.useEventDetailDialog = null !== (n = e.useEventDetailDialog) && void 0 !== n && n, this.useCalendarHeader = null === (r = e.useCalendarHeader) || void 0 === r || r, this.customMobileEventRenderer = e.customMobileEventRenderer, e.views.forEach((e2) => {
      this.state.views.set(e2.type, e2);
    }), null === (a = e.plugins) || void 0 === a || a.forEach((e2) => {
      this.installPlugin(e2);
    }), this.handleVisibleRangeChange("initial");
  }
  setupStoreListeners() {
    this.store.onEventChange = (e) => {
      var t2, n, r, a, o, l2;
      this.state.events = this.store.getAllEvents(), "create" === e.type ? null === (n = (t2 = this.callbacks).onEventCreate) || void 0 === n || n.call(t2, e.event) : "update" === e.type ? null === (a = (r = this.callbacks).onEventUpdate) || void 0 === a || a.call(r, e.after) : "delete" === e.type && (null === (l2 = (o = this.callbacks).onEventDelete) || void 0 === l2 || l2.call(o, e.event.id)), this.triggerRender(), this.notify();
    }, this.store.onEventBatchChange = (e) => {
      var t2, n;
      this.state.events = this.store.getAllEvents(), null === (n = (t2 = this.callbacks).onEventBatchChange) || void 0 === n || n.call(t2, e), this.triggerRender(), this.notify();
    };
  }
  resolveLocale(e) {
    return e ? "string" == typeof e ? F(e) ? e : "en-US" : e && "object" == typeof e && !F(e.code) ? Object.assign(Object.assign({}, e), { code: "en-US" }) : e : "en-US";
  }
};
var Be = class {
  constructor(e) {
    this.renderings = /* @__PURE__ */ new Map(), this.overrides = /* @__PURE__ */ new Set(), this.listeners = /* @__PURE__ */ new Set(), e && e.length > 0 && (this.overrides = new Set(e));
  }
  register(e) {
    this.renderings.set(e.id, e), this.notify();
  }
  unregister(e) {
    this.renderings.delete(e) && this.notify();
  }
  setOverrides(e) {
    this.overrides = new Set(e), this.notify();
  }
  isOverridden(e) {
    return this.overrides.has(e);
  }
  subscribe(e) {
    return this.listeners.add(e), e(this.renderings), () => {
      this.listeners.delete(e);
    };
  }
  notify() {
    this.listeners.forEach((e) => e(this.renderings));
  }
};
var Ve = R(null);
var qe = 0;
function Ge(e, t2, r, a, o, l2) {
  t2 || (t2 = {});
  var i, s, d2 = t2;
  if ("ref" in d2) for (s in d2 = {}, t2) "ref" == s ? i = t2[s] : d2[s] = t2[s];
  var c = { type: e, props: d2, key: r, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --qe, __i: -1, __u: 0, __source: o, __self: l2 };
  if ("function" == typeof e && (i = e.defaultProps)) for (s in i) void 0 === d2[s] && (d2[s] = i[s]);
  return l.vnode && l.vnode(c), c;
}
var Ke = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "m15 18-6-6 6-6" }) });
var Xe = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "m9 18 6-6-6-6" }) });
var Je = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "m11 17-5-5 5-5" }), Ge("path", { d: "m18 17-5-5 5-5" })] });
var Qe = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "m6 17 5-5-5-5" }), Ge("path", { d: "m13 17 5-5-5-5" })] });
var et = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "m6 9 6 6 6-6" }) });
var tt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "M5 12h14" }), Ge("path", { d: "M12 5v14" })] });
var nt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("circle", { cx: "11", cy: "11", r: "8" }), Ge("path", { d: "m21 21-4.3-4.3" })] });
var rt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "M20 6 9 17l-5-5" }) });
var at = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "m7 15 5 5 5-5" }), Ge("path", { d: "m7 9 5-5 5 5" })] });
var ot = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "M18 6 6 18" }), Ge("path", { d: "m6 6 12 12" })] });
var lt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "M8 2v4" }), Ge("path", { d: "M16 2v4" }), Ge("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }), Ge("path", { d: "M3 10h18" }), Ge("path", { d: "M8 14h.01" }), Ge("path", { d: "M12 14h.01" }), Ge("path", { d: "M16 14h.01" }), Ge("path", { d: "M8 18h.01" }), Ge("path", { d: "M12 18h.01" }), Ge("path", { d: "M16 18h.01" })] });
var it = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "M18 8L22 12L18 16" }), Ge("path", { d: "M2 12H22" })] });
var st = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) });
var dt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("rect", { width: "18", height: "14", x: "3", y: "8", rx: "2" }), Ge("path", { d: "M12 5a3 3 0 1 0-3 3" }), Ge("path", { d: "M12 5a3 3 0 1 1 3 3" }), Ge("path", { d: "M3 12h18" }), Ge("path", { d: "M12 22V8" })] });
var ct = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" }) });
var ut = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }), Ge("circle", { cx: "12", cy: "10", r: "3" })] });
var ht = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: Ge("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
var gt2 = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }), Ge("path", { d: "M15 3v18" }), Ge("path", { d: "m8 9 3 3-3 3" })] });
var mt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }), Ge("path", { d: "M15 3v18" }), Ge("path", { d: "m10 15-3-3 3-3" })] });
var vt = ({ className: e, width: t2 = 24, height: n = 24 }) => Ge("svg", { xmlns: "http://www.w3.org/2000/svg", width: t2, height: n, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: e, children: [Ge("path", { d: "m12 19-7-7 7-7" }), Ge("path", { d: "M19 12H5" })] });
var ft = "df-month-view h-full flex flex-col bg-white dark:bg-gray-900 select-none";
var pt = "p-2 flex justify-between";
var yt = "text-2xl font-bold text-gray-900 dark:text-gray-100";
var bt = "rounded-md bg-background border border-border px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-(--hover)";
var wt = "df-date-number inline-flex items-center justify-center h-6 w-6 rounded-full text-sm mt-1 select-none";
var Dt = "flex-1 overflow-auto will-change-scroll";
var xt = "scrollbar-hide";
var Et = "df-time-slot relative h-[4.5rem] flex";
var Ct = "df-time-label absolute top-0 -translate-y-1/2 right-2 text-[12px] text-gray-500 dark:text-gray-400 select-none";
var kt = "df-time-grid-row h-[4.5rem] border-t border-gray-200 dark:border-gray-700 flex";
var Tt = "df-current-time-line absolute left-0 top-0 w-full flex pointer-events-none";
var Nt = "df-current-time-label ml-2 text-primary-foreground text-xs font-bold px-1.5 bg-primary rounded-sm";
var St = "df-all-day-row flex items-center border-b border-gray-200 dark:border-gray-700 sticky";
var Mt = "rounded-xl my-0.5";
var It = "rounded-sm";
var Ht = "df-event-title font-medium text-xs truncate pr-1";
var Rt = "df-month-event-color-bar inline-block w-0.75 h-3 mr-1 shrink-0 rounded-full";
var Ot = "h-3 w-3 mr-1";
var Pt = "resize-handle absolute right-0 top-0 bottom-0 w-1 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity z-20";
var Lt = "bg-primary rounded-full text-primary-foreground";
var At = "df-nav-button calendar-nav-button group relative inline-flex items-center justify-center w-7 h-7 rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 active:bg-gray-100 dark:active:bg-gray-600 transition-all duration-150 shadow-sm hover:shadow focus:outline-none";
var $t = "h-4 w-4 transition-transform group-hover:scale-110";
var jt = "df-event-detail-panel fixed bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg";
var Yt = "bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 origin-top-right animate-in fade-in zoom-in-95";
var Ft = "h-3 border-t border-gray-200 dark:border-gray-700 relative";
var zt = "absolute top-0 -translate-y-1/2 text-[12px] text-gray-500 dark:text-gray-400";
var _t = "df-sidebar flex h-full flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900";
var Zt = "df-sidebar-header flex items-center px-2 py-1";
var Wt = "df-sidebar-header-toggle flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-slate-800";
var Ut = "df-sidebar-header-title text-sm font-semibold text-gray-700 dark:text-gray-200";
var Bt = "flex h-7 w-7 items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors";
var Vt = "text-gray-500 dark:text-gray-400";
var qt = "text-gray-600 dark:text-gray-300";
var Gt = "text-xs";
var Kt = "text-sm";
var Xt = "flex flex-col";
var Jt = "mr-1";
var Qt = (...e) => e.filter(Boolean).join(" ");
var en = ({ options: e, value: t2, onChange: n, registry: r, variant: a = "desktop", disabled: o = false }) => {
  const [l2, i] = d(false), [u, h] = d({}), g = A(null), m = A(null), f = () => {
    if (m.current) {
      const e2 = m.current.getBoundingClientRect(), t3 = "mobile" === a, n2 = { position: "fixed", zIndex: 10001, minWidth: t3 ? "12rem" : `${e2.width}px`, top: `${e2.bottom + 4}px` };
      t3 ? n2.right = window.innerWidth - e2.right + "px" : n2.left = `${e2.left}px`, h(n2);
    }
  };
  y(() => {
    const e2 = (e3) => {
      !g.current || g.current.contains(e3.target) || e3.target.closest("[data-calendar-picker-dropdown]") || i(false);
    };
    return l2 && (f(), window.addEventListener("mousedown", e2), window.addEventListener("scroll", f, true), window.addEventListener("resize", f)), () => {
      window.removeEventListener("mousedown", e2), window.removeEventListener("scroll", f, true), window.removeEventListener("resize", f);
    };
  }, [l2]);
  const p = (e2) => (r || R2()).resolveColors(e2).lineColor, y2 = (e2, t3) => {
    e2.stopPropagation(), n(t3), i(false);
  }, b = e.find((e2) => e2.value === t2), w = () => l2 && "undefined" != typeof window ? $("mobile" === a ? Ge("div", { "data-calendar-picker-dropdown": "true", style: u, className: Yt, children: e.map((e2) => Ge("div", { className: "flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 " + (e2.value === t2 ? "bg-gray-50 dark:bg-gray-700/50" : ""), onClick: (t3) => y2(t3, e2.value), children: [Ge("div", { className: "flex items-center flex-1 min-w-0 mr-3", children: [Ge("div", { className: "w-5 flex justify-center mr-2", children: e2.value === t2 && Ge(rt, { className: "w-4 h-4 text-primary" }) }), Ge("span", { className: "text-sm text-gray-700 dark:text-gray-200 truncate", children: e2.label })] }), Ge("span", { className: "w-3 h-3 rounded-full shrink-0", style: { backgroundColor: p(e2.value) } })] }, e2.value)) }) : Ge("ul", { "data-calendar-picker-dropdown": "true", style: u, className: "bg-white dark:bg-gray-700 rounded-md shadow-lg dark:shadow-gray-900/50 overflow-hidden border border-gray-200 dark:border-gray-600 transition-all duration-200 origin-top-left animate-in fade-in zoom-in-95", children: e.map((e2) => Ge("li", { className: "flex items-center px-2 py-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors " + (t2 === e2.value ? "font-semibold" : ""), onClick: (t3) => y2(t3, e2.value), children: [t2 === e2.value ? Ge("span", { className: "mr-2 text-sm text-primary", children: Ge(rt, { width: 12, height: 12 }) }) : Ge("div", { className: "mr-2 text-sm w-3 h-3", children: " " }), Ge("span", { className: "w-3 h-3 mr-2 rounded-sm shrink-0", style: { backgroundColor: p(e2.value) } }), Ge("span", { className: "text-sm whitespace-nowrap text-gray-700 dark:text-gray-200", children: e2.label })] }, e2.value)) }), document.body) : null;
  return Ge("div", "mobile" === a ? { className: "relative inline-block", ref: g, children: [Ge("button", { ref: m, disabled: o, onClick: (e2) => {
    e2.stopPropagation(), o || i(!l2);
  }, className: "flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-1.5 transition-colors " + (o ? "opacity-50 cursor-default" : ""), children: [Ge("span", { className: "w-3 h-3 rounded-full", style: { backgroundColor: p(t2) } }), Ge("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-200", children: (null == b ? void 0 : b.label) || t2 }), Ge(at, { className: "w-4 h-4 text-gray-400" })] }), w()] } : { className: "relative inline-block", ref: g, children: [Ge("button", { ref: m, type: "button", onClick: (e2) => {
    e2.stopPropagation(), i(!l2);
  }, className: "flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-md px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors h-8", children: [Ge("span", { className: "w-4 h-4 rounded-sm shrink-0", style: { backgroundColor: p(t2) } }), Ge(at, { className: "w-4 h-4 text-gray-600 dark:text-gray-300" })] }), w()] });
};
function tn(e) {
  return null !== e && "object" == typeof e && !("hour" in e) && "year" in e && "month" in e && "day" in e && !(e instanceof Date);
}
function nn(e) {
  return null !== e && "object" == typeof e && "hour" in e && !("timeZone" in e) && "year" in e && !(e instanceof Date);
}
function rn(e) {
  return null !== e && "object" == typeof e && "timeZone" in e && "year" in e && !(e instanceof Date);
}
function an(e) {
  if (e instanceof Date) return e;
  if (tn(e)) return new Date(e.year, e.month - 1, e.day);
  if (nn(e)) return new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second || 0, e.millisecond || 0);
  if (rn(e)) try {
    if ("function" == typeof e.toInstant) {
      const t2 = e.toInstant();
      return new Date(t2.epochMilliseconds);
    }
    return new Date(e.year, e.month - 1, e.day, e.hour, e.minute);
  } catch (t2) {
    return new Date(e.year, e.month - 1, e.day, e.hour, e.minute);
  }
  return new Date(e);
}
function on(t2) {
  return Xn.PlainDate.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate() });
}
function ln(t2) {
  return Xn.PlainDateTime.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate(), hour: t2.getHours(), minute: t2.getMinutes(), second: t2.getSeconds(), millisecond: t2.getMilliseconds() });
}
function sn(t2, n = Xn.Now.timeZoneId()) {
  return Xn.ZonedDateTime.from({ year: t2.getFullYear(), month: t2.getMonth() + 1, day: t2.getDate(), hour: t2.getHours(), minute: t2.getMinutes(), second: t2.getSeconds(), millisecond: t2.getMilliseconds(), timeZone: n });
}
function dn(e) {
  return new Date(e.year, e.month - 1, e.day, e.hour, e.minute, e.second || 0, e.millisecond || 0);
}
function cn(e) {
  return new Date(e.year, e.month - 1, e.day);
}
function un(e) {
  if (e instanceof Date) return e.getHours() + e.getMinutes() / 60;
  if (tn(e)) return 0;
  return e.hour + e.minute / 60;
}
function hn(e, t2) {
  const n = Math.floor(t2), r = Math.round(60 * (t2 - n));
  return rn(e), e.with({ hour: n, minute: r, second: 0, millisecond: 0 });
}
function gn(e, t2) {
  if (e instanceof Date && t2 instanceof Date) return e.getFullYear() === t2.getFullYear() && e.getMonth() === t2.getMonth() && e.getDate() === t2.getDate();
  const n = mn(e), r = mn(t2);
  return n.equals(r);
}
function mn(e) {
  return e instanceof Date ? on(e) : tn(e) ? e : (nn(e), e.toPlainDate());
}
var vn = /(YYYY|YY|MM|DD|HH|mm)/g;
var fn = (e) => e.toString().padStart(2, "0");
var pn = (e, t2) => {
  const n = (null != t2 ? t2 : "").trim(), r = /[Hhms]/.test(e) || !n ? e : `${e} ${n}`.trim();
  return r.replace(/(H{1,2}):MM/g, (e2, t3) => `${t3}:mm`);
};
var yn = (e) => e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
var bn = (e) => {
  let t2, n = 0, r = "^";
  for (; null !== (t2 = vn.exec(e)); ) {
    r += yn(e.slice(n, t2.index));
    const a = t2[0];
    r += `(?<${a}>\\d{${"YYYY" === a ? 4 : 2}})`, n = t2.index + a.length;
  }
  return r += yn(e.slice(n)) + "$", new RegExp(r);
};
var wn = (t2, n, r, a) => {
  const o = t2.trim();
  if (!o) return null;
  const l2 = o.match(n), i = null == l2 ? void 0 : l2.groups;
  if (!i) return null;
  const s = i.YYYY ? Number(i.YYYY) : i.YY ? Number(i.YY) + 2e3 : r.year, d2 = i.MM ? Number(i.MM) : r.month, c = i.DD ? Number(i.DD) : r.day, u = i.HH ? Number(i.HH) : r.hour, h = i.mm ? Number(i.mm) : r.minute;
  try {
    return Xn.ZonedDateTime.from({ timeZone: a, year: s, month: d2, day: c, hour: u, minute: h, second: r.second, millisecond: r.millisecond, microsecond: r.microsecond, nanosecond: r.nanosecond });
  } catch (e) {
    return null;
  }
};
var Dn = (t2) => {
  const n = t2;
  if (n.timeZoneId && "string" == typeof n.timeZoneId) return n.timeZoneId;
  if ("timeZoneId" in t2 && "string" == typeof t2.timeZoneId) return t2.timeZoneId;
  const r = t2.timeZone;
  return r && "string" == typeof r.id ? r.id : "string" == typeof n.timeZone ? n.timeZone : Xn.Now.timeZoneId();
};
var xn = (t2, n, r) => {
  var a, o, l2, i, s, d2, c, u, h, g, m, v, f, p, y2, b, w, D2, x2, E, C, k3, T3, N2;
  if (!t2) {
    const t3 = null != n ? n : r ? Dn(r) : Xn.Now.timeZoneId();
    return null != r ? r : Xn.Now.zonedDateTimeISO(t3);
  }
  if (tn(t2)) {
    const r2 = null != n ? n : Xn.Now.timeZoneId(), a2 = `${t2.year}-${fn(t2.month)}-${fn(t2.day)}T00:00:00[${r2}]`;
    return Xn.ZonedDateTime.from(a2);
  }
  if ("hour" in t2 && !("timeZone" in t2)) {
    const r2 = null != n ? n : Xn.Now.timeZoneId();
    if ("function" == typeof t2.toZonedDateTime) try {
      return t2.toZonedDateTime(r2);
    } catch (e) {
    }
    return Xn.ZonedDateTime.from({ timeZone: r2, year: t2.year, month: t2.month, day: t2.day, hour: t2.hour, minute: t2.minute, second: null !== (a = t2.second) && void 0 !== a ? a : 0, millisecond: null !== (o = t2.millisecond) && void 0 !== o ? o : 0, microsecond: null !== (l2 = t2.microsecond) && void 0 !== l2 ? l2 : 0, nanosecond: null !== (i = t2.nanosecond) && void 0 !== i ? i : 0 });
  }
  try {
    return Xn.ZonedDateTime.from(t2);
  } catch (a2) {
    const o2 = t2, l3 = null !== (h = null !== (u = null !== (c = null !== (d2 = "string" == typeof (null == o2 ? void 0 : o2.timeZone) ? o2.timeZone : null === (s = null == o2 ? void 0 : o2.timeZone) || void 0 === s ? void 0 : s.id) && void 0 !== d2 ? d2 : null == o2 ? void 0 : o2.timeZoneId) && void 0 !== c ? c : n) && void 0 !== u ? u : r ? Dn(r) : void 0) && void 0 !== h ? h : Xn.Now.timeZoneId();
    if ("function" == typeof (null == o2 ? void 0 : o2.toZonedDateTime)) try {
      return o2.toZonedDateTime({ timeZone: l3 });
    } catch (e) {
    }
    const i2 = null != r ? r : Xn.Now.zonedDateTimeISO(l3);
    return Xn.ZonedDateTime.from({ timeZone: l3, year: null !== (g = null == o2 ? void 0 : o2.year) && void 0 !== g ? g : i2.year, month: null !== (m = null == o2 ? void 0 : o2.month) && void 0 !== m ? m : i2.month, day: null !== (v = null == o2 ? void 0 : o2.day) && void 0 !== v ? v : i2.day, hour: null !== (p = null !== (f = null == o2 ? void 0 : o2.hour) && void 0 !== f ? f : null == r ? void 0 : r.hour) && void 0 !== p ? p : 0, minute: null !== (b = null !== (y2 = null == o2 ? void 0 : o2.minute) && void 0 !== y2 ? y2 : null == r ? void 0 : r.minute) && void 0 !== b ? b : 0, second: null !== (D2 = null !== (w = null == o2 ? void 0 : o2.second) && void 0 !== w ? w : null == r ? void 0 : r.second) && void 0 !== D2 ? D2 : 0, millisecond: null !== (E = null !== (x2 = null == o2 ? void 0 : o2.millisecond) && void 0 !== x2 ? x2 : null == r ? void 0 : r.millisecond) && void 0 !== E ? E : 0, microsecond: null !== (k3 = null !== (C = null == o2 ? void 0 : o2.microsecond) && void 0 !== C ? C : null == r ? void 0 : r.microsecond) && void 0 !== k3 ? k3 : 0, nanosecond: null !== (N2 = null !== (T3 = null == o2 ? void 0 : o2.nanosecond) && void 0 !== T3 ? T3 : null == r ? void 0 : r.nanosecond) && void 0 !== N2 ? N2 : 0 });
  }
};
var En = (e, t2, n) => {
  const r = pn(t2, n), a = { YYYY: e.year.toString(), YY: fn(e.year % 100), MM: fn(e.month), DD: fn(e.day), HH: fn(e.hour), mm: fn(e.minute) };
  return r.replace(vn, (e2) => {
    var t3;
    return null !== (t3 = a[e2]) && void 0 !== t3 ? t3 : e2;
  });
};
function Cn(e, t2) {
  var n, r, a, o, l2;
  try {
    if ("today" === e) {
      return null !== (r = null === (n = new Intl.RelativeTimeFormat(t2, { numeric: "auto" }).formatToParts(0, "day").find((e2) => "literal" === e2.type)) || void 0 === n ? void 0 : n.value) && void 0 !== r ? r : null;
    }
    if ("week" === e) {
      return null !== (o = null === (a = new Intl.RelativeTimeFormat(t2, { numeric: "always" }).formatToParts(1, "week").find((e2) => "unit" === e2.type)) || void 0 === a ? void 0 : a.value) && void 0 !== o ? o : null;
    }
    return null !== (l2 = new Intl.DisplayNames(t2, { type: "dateTimeField" }).of(e)) && void 0 !== l2 ? l2 : null;
  } catch (e2) {
    return null;
  }
}
function kn(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
var Tn = (e, t2 = "short") => {
  const n = [], r = new Date(2024, 0, 1);
  for (let a = 0; a < 7; a++) {
    const o = new Date(r);
    o.setDate(r.getDate() + a);
    try {
      n.push(o.toLocaleDateString(e, { weekday: t2 }));
    } catch (e2) {
      n.push(o.toLocaleDateString("en-US", { weekday: t2 }));
    }
  }
  return n;
};
var Nn = (e, t2 = "long") => {
  const n = [];
  for (let r = 0; r < 12; r++) {
    const a = new Date(2024, r, 1);
    try {
      n.push(a.toLocaleDateString(e, { month: t2 }));
    } catch (e2) {
      n.push(a.toLocaleDateString("en-US", { month: t2 }));
    }
  }
  return n;
};
function Sn(e, t2 = "en-US") {
  var n;
  if (["today", "day", "week", "month", "year"].includes(e)) {
    const n2 = Cn(e, t2);
    if (n2) return kn(n2);
  }
  const r = Y(t2), a = $2[r], o = null === (n = null == a ? void 0 : a.messages) || void 0 === n ? void 0 : n[e];
  if (o) return o;
  const l2 = $2.en.messages;
  return (null == l2 ? void 0 : l2[e]) || e;
}
var Mn = R({ locale: "en-US", t: (e) => e, getWeekDaysLabels: () => [], getMonthLabels: () => [], isDefault: true });
function In() {
  return x(Mn);
}
var Hn = ({ locale: e = "en-US", messages: t2, children: n }) => {
  const r = T(() => {
    if ("string" == typeof e) {
      return { code: F(e) ? e : "en-US", messages: void 0 };
    }
    return e && "string" != typeof e && !F(e.code) ? Object.assign(Object.assign({}, e), { code: "en-US" }) : e || { code: "en-US" };
  }, [e]), a = T(() => {
    const e2 = r.code;
    return { locale: e2, t: (n2, a2) => {
      var o, l2, i;
      let s = null !== (i = null !== (o = null == t2 ? void 0 : t2[n2]) && void 0 !== o ? o : null === (l2 = r.messages) || void 0 === l2 ? void 0 : l2[n2]) && void 0 !== i ? i : Sn(n2, e2);
      return a2 && Object.entries(a2).forEach(([e3, t3]) => {
        s = s.replace(new RegExp(`{${e3}}`, "g"), t3);
      }), s;
    }, getWeekDaysLabels: Tn, getMonthLabels: Nn, isDefault: false };
  }, [r, t2]);
  return Ge(Mn.Provider, { value: a, children: n });
};
var Rn = Array.from({ length: 24 }, (e, t2) => t2);
var On = Array.from({ length: 60 }, (e, t2) => t2);
var Pn = ({ visibleMonth: e, monthLabels: t2, disabled: n, onMonthChange: r, onYearChange: a }) => Ge("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-gray-600 px-3 py-2 text-sm font-medium text-slate-700 dark:text-gray-300", children: [Ge("div", { className: "flex items-center gap-1", children: [Ge("button", { type: "button", disabled: n, onClick: () => a(-1), className: "rounded-md px-2 py-1 text-slate-400 dark:text-gray-400 transition hover:text-slate-600 dark:hover:text-gray-200 disabled:opacity-40", children: Ge(Je, { width: 14, height: 12 }) }), Ge("button", { type: "button", disabled: n, onClick: () => r(-1), className: "rounded-md px-2 py-1 text-slate-400 dark:text-gray-400 transition hover:text-slate-600 dark:hover:text-gray-200 disabled:opacity-40", children: Ge(Ke, { width: 14, height: 12 }) })] }), Ge("div", { className: "text-sm font-semibold text-slate-700 dark:text-gray-300", children: [t2[e.month - 1], " ", e.year] }), Ge("div", { className: "flex items-center gap-1", children: [Ge("button", { type: "button", disabled: n, onClick: () => r(1), className: "rounded-md px-2 py-1 text-slate-400 dark:text-gray-400 transition hover:text-slate-600 dark:hover:text-gray-200 disabled:opacity-40", children: Ge(Xe, { width: 14, height: 12 }) }), Ge("button", { type: "button", disabled: n, onClick: () => a(1), className: "rounded-md px-2 py-1 text-slate-400 dark:text-gray-400 transition hover:text-slate-600 dark:hover:text-gray-200 disabled:opacity-40", children: Ge(Qe, { width: 14, height: 12 }) })] })] });
var Ln = (t2, n) => Xn.PlainDate.compare(t2, n);
var An = ({ calendarDays: e, visibleMonth: t2, startDate: n, endDate: a, weekDayLabels: o, disabled: l2, onDaySelect: i }) => Ge(k, { children: [Ge("div", { className: "grid grid-cols-7 gap-1 px-1 pb-3 pt-2 text-center text-[12px] uppercase tracking-wide text-slate-400 dark:text-gray-500", children: o.map((e2, t3) => Ge("span", { children: e2 }, t3)) }), Ge("div", { className: "grid grid-cols-7 gap-1 px-1 ", children: e.map((e2) => {
  const r = e2.month !== t2.month, o2 = 0 === Ln(e2, n), s = 0 === Ln(e2, a), d2 = Ln(e2, n) >= 0 && Ln(e2, a) <= 0;
  return Ge("button", { type: "button", disabled: l2, onClick: () => i(e2), className: `flex h-9 w-9 items-center justify-center rounded-md text-sm transition ${o2 || s ? "bg-primary text-primary-foreground font-semibold" : d2 ? "bg-primary/10 text-primary" : r ? "text-slate-300 dark:text-gray-600" : "text-slate-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"}`, children: e2.day }, e2.toString());
}) })] });
var $n = ({ focusedField: e, draftRange: t2, disabled: n, onHourSelect: r, onMinuteSelect: a, timeListRefs: o }) => {
  const l2 = e, i = t2["start" === l2 ? 0 : 1], s = i.minute, d2 = On.includes(s) ? On : [...On, s].sort((e2, t3) => e2 - t3);
  return Ge("div", { className: "flex flex-col rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm sm:w-28", children: [Ge("div", { className: "flex border-b border-slate-100 dark:border-gray-600 justify-center", children: Ge("div", { className: "text-base py-1.5 text-slate-700 dark:text-gray-300", children: [i.hour.toString().padStart(2, "0"), ":", i.minute.toString().padStart(2, "0")] }) }), Ge("div", { className: "flex p-1", children: [Ge("div", { className: "w-14", children: Ge("div", { className: `h-72 overflow-y-auto ${xt} rounded-md border border-slate-100 dark:border-gray-600 bg-white dark:bg-gray-700`, role: "listbox", "aria-label": "Hour", ref: (e2) => {
    o.current && o.current[l2] && (o.current[l2].hour = e2);
  }, children: Rn.map((e2) => {
    const t3 = e2 === i.hour;
    return Ge("button", { type: "button", role: "option", "aria-selected": t3, disabled: n, onClick: () => r(l2, e2), className: "flex h-8 w-full items-center justify-center text-sm transition " + (t3 ? "bg-primary text-primary-foreground font-semibold" : "text-slate-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"), "data-active": t3 ? "true" : void 0, children: fn(e2) }, e2);
  }) }) }), Ge("div", { className: "w-14", children: Ge("div", { className: `h-72 overflow-y-auto ${xt} rounded-md border border-slate-100 dark:border-gray-600 bg-white dark:bg-gray-700`, role: "listbox", "aria-label": "Minute", ref: (e2) => {
    o.current && o.current[l2] && (o.current[l2].minute = e2);
  }, children: d2.map((e2) => {
    const t3 = e2 === s;
    return Ge("button", { type: "button", role: "option", "aria-selected": t3, disabled: n, onClick: () => a(l2, e2), className: "flex h-8 w-full items-center justify-center text-sm transition " + (t3 ? "bg-primary text-primary-foreground font-semibold" : "text-slate-600 dark:text-gray-300 hover:bg-primary/10 hover:text-primary"), "data-active": t3 ? "true" : void 0, children: fn(e2) }, e2);
  }) }) })] })] });
};
var jn = ({ visibleMonth: e, monthLabels: t2, weekDayLabels: n, calendarDays: r, draftRange: a, focusedField: o, isTimeEnabled: l2, disabled: i, matchTriggerWidth: s, popupRef: d2, timeListRefs: c, onMonthChange: u, onYearChange: h, onDaySelect: g, onHourSelect: m, onMinuteSelect: v, onOk: f, getPopupStyle: p }) => {
  const y2 = a[0].toPlainDate(), b = a[1].toPlainDate();
  return Ge("div", { ref: d2, style: p(), "data-range-picker-popup": "true", children: Ge("div", { className: "space-y-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-800 p-3", style: { boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)", width: s ? "100%" : void 0 }, children: [Ge("div", { className: "flex gap-1", children: [Ge("div", { className: "flex-3 rounded-xl border border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm w-full", children: [Ge(Pn, { visibleMonth: e, monthLabels: t2, disabled: i, onMonthChange: u, onYearChange: h }), Ge(An, { calendarDays: r, visibleMonth: e, startDate: y2, endDate: b, weekDayLabels: n, disabled: i, onDaySelect: g })] }), l2 && Ge("div", { className: "flex flex-1 justify-end sm:w-32", children: Ge($n, { focusedField: o, draftRange: a, disabled: i, onHourSelect: m, onMinuteSelect: v, timeListRefs: c }) })] }), Ge("div", { className: "flex justify-end", children: Ge("button", { type: "button", onClick: f, disabled: i, className: "inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50", children: "OK" }) })] }) });
};
var Yn = ({ value: t2, format: n = "YYYY-MM-DD HH:mm", showTimeFormat: r = "HH:mm", showTime: a = true, onChange: o, onOk: l2, timeZone: i, disabled: u = false, placement: m = "bottomLeft", autoAdjustOverflow: f = true, getPopupContainer: p, matchTriggerWidth: y2 = false, locale: b = "en-US" }) => {
  const w = T(() => "string" == typeof b ? b : (null == b ? void 0 : b.code) || "en-US", [b]), D2 = T(() => void 0 === a || ("object" == typeof a || Boolean(a)), [a]), x2 = T(() => Nn(w, "short"), [w]), E = T(() => Tn(w, "narrow"), [w]), C = T(() => D2 ? "object" == typeof a && (null == a ? void 0 : a.format) ? a.format : r : "", [D2, a, r]), k3 = T(() => pn(n, C), [n, C]), T3 = T(() => bn(k3), [k3]), N2 = T(() => {
    const n2 = null != i ? i : z(t2[0]) ? z(t2[1]) ? Xn.Now.timeZoneId() : Dn(t2[1]) : Dn(t2[0]), r2 = xn(t2[0], n2);
    return [r2, xn(t2[1], n2, r2)];
  }, [t2, i]), [S2, M3] = d(N2), I2 = A(N2), [H2, R3] = d("start"), [O2, P2] = d([En(N2[0], n, C), En(N2[1], n, C)]), L2 = A([En(N2[0], n, C), En(N2[1], n, C)]), A3 = A(N2), [$3, j3] = d(N2[0].toPlainDate().with({ day: 1 })), [Y2, F2] = d(false), _4 = q((e) => {
    F2(e);
  }, []), [Z2, W2] = d(m), U3 = A(m), B3 = A(null), V2 = A(null), q3 = A({ start: { hour: null, minute: null }, end: { hour: null, minute: null } }), G3 = A(false), K2 = A(false);
  y(() => {
    L2.current = O2;
  }, [O2]), y(() => {
    A3.current = S2;
  }, [S2]), y(() => {
    const t3 = I2.current, n2 = 0 !== Xn.ZonedDateTime.compare(t3[0], N2[0]), r2 = 0 !== Xn.ZonedDateTime.compare(t3[1], N2[1]);
    (n2 || r2) && M3(N2), I2.current = N2;
  }, [N2]), y(() => {
    j3(N2[0].toPlainDate().with({ day: 1 }));
  }, [N2[0]]);
  const X2 = q((e, t3, n2 = 0) => {
    var r2;
    if (!e || !t3) return;
    const a2 = e.getBoundingClientRect(), o2 = t3.getBoundingClientRect().top - a2.top + e.scrollTop - n2, l3 = (null === (r2 = window.matchMedia) || void 0 === r2 ? void 0 : r2.call(window, "(prefers-reduced-motion: reduce)").matches) ? "auto" : "smooth";
    Math.abs(e.scrollTop - o2) > 1 && e.scrollTo({ top: o2, behavior: l3 });
  }, []), J3 = q((e) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const t3 = q3.current[e];
        ["hour", "minute"].forEach((e2) => {
          const n2 = t3[e2];
          if (!n2) return;
          const r2 = n2.querySelector('[data-active="true"]');
          r2 && X2(n2, r2, 0);
        });
      });
    });
  }, [X2]);
  y(() => {
    Y2 && D2 && J3(H2);
  }, [H2, Y2, J3, D2]);
  const Q3 = S2[0].epochMilliseconds, ee2 = S2[0].offsetNanoseconds, te2 = S2[1].epochMilliseconds, ne2 = S2[1].offsetNanoseconds;
  y(() => {
    if (K2.current) return;
    const [e, t3] = A3.current, r2 = En(e, n, C), a2 = En(t3, n, C), [o2, l3] = L2.current;
    o2 === r2 && l3 === a2 || (L2.current = [r2, a2], P2([r2, a2]));
  }, [Q3, ee2, te2, ne2, n, C]), y(() => {
    if (!Y2) return;
    const e = (e2) => {
      var t4, n2;
      const r2 = e2.target;
      if (null === (t4 = B3.current) || void 0 === t4 ? void 0 : t4.contains(r2)) return;
      if (null === (n2 = V2.current) || void 0 === n2 ? void 0 : n2.contains(r2)) return;
      r2.closest("[data-range-picker-popup]") || _4(false);
    }, t3 = setTimeout(() => {
      document.addEventListener("mousedown", e);
    }, 100);
    return () => {
      clearTimeout(t3), document.removeEventListener("mousedown", e);
    };
  }, [Y2]), y(() => {
    Y2 || (R3("start"), G3.current || M3(N2), G3.current = false);
  }, [Y2, N2]);
  const re2 = q((e) => {
    o && o(e, [En(e[0], n, C), En(e[1], n, C)]);
  }, [C, n, o]), ae2 = q((e) => {
    l2 && l2(e, [En(e[0], n, C), En(e[1], n, C)]);
  }, [C, n, l2]), oe2 = q((t3, n2) => {
    M3((r2) => {
      const a2 = [...r2];
      if ("start" === t3) {
        const t4 = xn(a2[1], Dn(n2), n2), r3 = Xn.ZonedDateTime.compare(n2, t4) > 0 ? n2 : t4;
        return [n2, r3];
      }
      const o2 = xn(a2[0], Dn(n2), n2);
      return [Xn.ZonedDateTime.compare(o2, n2) > 0 ? n2 : o2, n2];
    });
  }, []), le2 = (t3) => {
    if (u) return;
    const n2 = (t4, n3) => {
      var r3, a3, o3, l3;
      const i2 = Dn(t4);
      return Xn.ZonedDateTime.from({ timeZone: i2, year: n3.year, month: n3.month, day: n3.day, hour: t4.hour, minute: t4.minute, second: null !== (r3 = t4.second) && void 0 !== r3 ? r3 : 0, millisecond: null !== (a3 = t4.millisecond) && void 0 !== a3 ? a3 : 0, microsecond: null !== (o3 = t4.microsecond) && void 0 !== o3 ? o3 : 0, nanosecond: null !== (l3 = t4.nanosecond) && void 0 !== l3 ? l3 : 0 });
    };
    if ("start" === H2) {
      const e = n2(S2[0], t3), r3 = S2[1].epochMilliseconds - S2[0].epochMilliseconds, a3 = e.add({ milliseconds: r3 });
      return void M3([e, a3]);
    }
    const r2 = n2(S2[1], t3), a2 = S2[1].epochMilliseconds - S2[0].epochMilliseconds;
    if (Xn.ZonedDateTime.compare(r2, S2[0]) < 0) {
      const e = n2(S2[0], t3), r3 = e.add({ milliseconds: a2 });
      return void M3([e, r3]);
    }
    const o2 = [S2[0], r2];
    M3(o2), j3(r2.toPlainDate().with({ day: 1 }));
  }, ie2 = q((t3, n2) => {
    if (u) return;
    const r2 = "start" === t3 ? 0 : 1;
    M3((a2) => {
      const o2 = a2[r2], l3 = o2.with({ hour: n2, minute: o2.minute, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
      if ("start" === t3) {
        const t4 = xn(a2[1], Dn(l3), l3);
        return [l3, Xn.ZonedDateTime.compare(l3, t4) > 0 ? l3 : t4];
      }
      const i2 = xn(a2[0], Dn(l3), l3);
      return [Xn.ZonedDateTime.compare(i2, l3) > 0 ? l3 : i2, l3];
    }), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const e = q3.current[t3].hour;
        if (!e) return;
        const n3 = e.querySelector('[data-active="true"]');
        n3 && X2(e, n3, 0);
      });
    });
  }, [u]), se2 = q((t3, n2) => {
    if (u) return;
    const r2 = "start" === t3 ? 0 : 1;
    M3((a2) => {
      const o2 = a2[r2].with({ minute: n2, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 });
      if ("start" === t3) {
        const t4 = xn(a2[1], Dn(o2), o2);
        return [o2, Xn.ZonedDateTime.compare(o2, t4) > 0 ? o2 : t4];
      }
      const l3 = xn(a2[0], Dn(o2), o2);
      return [Xn.ZonedDateTime.compare(l3, o2) > 0 ? o2 : l3, o2];
    }), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const e = q3.current[t3].minute;
        if (!e) return;
        const n3 = e.querySelector('[data-active="true"]');
        n3 && X2(e, n3, 0);
      });
    });
  }, [u]), de2 = q((e, t3) => {
    const n2 = "start" === e ? 0 : 1;
    P2((e2) => {
      const r2 = [...e2];
      return r2[n2] = t3, r2;
    });
  }, []), ce2 = q((e, t3) => {
    const r2 = "start" === e ? 0 : 1, a2 = S2[r2], o2 = Dn(a2), l3 = wn(t3, T3, a2, o2);
    if (l3) {
      oe2(e, l3);
      const t4 = l3.toPlainDate().with({ day: 1 });
      return j3(t4), "start" === e && R3("end"), true;
    }
    return P2((e2) => {
      const t4 = [...e2];
      return t4[r2] = En(S2[r2], n, C), t4;
    }), false;
  }, [S2, C, n, T3, oe2]), ue2 = q((e) => (t3) => {
    const n2 = t3.target.value;
    K2.current = true, de2(e, n2);
    const r2 = "start" === e ? 0 : 1, a2 = A3.current[r2], o2 = Dn(a2), l3 = wn(n2, T3, a2, o2);
    if (l3) {
      oe2(e, l3);
      const t4 = l3.toPlainDate().with({ day: 1 });
      j3(t4), J3(e);
    }
  }, [de2, T3, oe2, J3]), he2 = q((e) => (t3) => {
    var r2;
    if (u) return;
    if (K2.current = false, Y2) {
      const t4 = "start" === e ? 0 : 1, r3 = En(A3.current[t4], n, C);
      return void P2((e2) => {
        const n2 = [...e2];
        return n2[t4] = r3, n2;
      });
    }
    const a2 = t3.relatedTarget;
    a2 && (null === (r2 = B3.current) || void 0 === r2 ? void 0 : r2.contains(a2)) || ce2(e, t3.target.value);
  }, [ce2, u, Y2, n, C]), ge2 = q((e) => (t3) => {
    "Enter" === t3.key && (t3.preventDefault(), K2.current = false, ce2(e, t3.currentTarget.value)), "Escape" === t3.key && t3.currentTarget.blur();
  }, [ce2]), me2 = () => {
    G3.current = true, re2(S2), ae2(S2), _4(false);
  }, ve2 = (e) => {
    j3((t3) => t3.add({ months: e }).with({ day: 1 }));
  }, fe2 = (e) => {
    j3((t3) => t3.add({ years: e }).with({ day: 1 }));
  }, pe2 = T(() => {
    const e = $3, t3 = e.dayOfWeek % 7, n2 = e.subtract({ days: t3 });
    return Array.from({ length: 42 }, (e2, t4) => n2.add({ days: t4 }));
  }, [$3]), ye2 = q((e = m) => {
    if (!f || !B3.current) return e;
    const t3 = B3.current.getBoundingClientRect(), n2 = y2 ? t3.width : 480, r2 = window.innerHeight - t3.bottom, a2 = t3.top, o2 = window.innerWidth - t3.left, l3 = t3.right;
    let i2 = e;
    return i2.startsWith("bottom") && r2 < 500 && a2 > r2 ? i2 = i2.replace("bottom", "top") : i2.startsWith("top") && a2 < 500 && r2 > a2 && (i2 = i2.replace("top", "bottom")), i2.endsWith("Left") && o2 < n2 && l3 > o2 ? i2 = i2.replace("Left", "Right") : i2.endsWith("Right") && l3 < n2 && o2 > l3 && (i2 = i2.replace("Right", "Left")), i2;
  }, [f, y2, m]), be2 = q(() => {
    const e = ye2();
    U3.current !== e && (U3.current = e, W2(e));
  }, [ye2]), we2 = (e) => {
    if (u) return;
    R3(e);
    const t3 = S2["start" === e ? 0 : 1].toPlainDate().with({ day: 1 });
    j3(t3);
    const n2 = ye2();
    U3.current !== n2 && (U3.current = n2, W2(n2)), _4(true);
  };
  y(() => {
    if (!Y2) return;
    be2();
    const e = () => be2();
    return window.addEventListener("resize", e), window.addEventListener("scroll", e, true), () => {
      window.removeEventListener("resize", e), window.removeEventListener("scroll", e, true);
    };
  }, [Y2, be2]);
  const De2 = () => {
    if (!B3.current) return {};
    const e = B3.current.getBoundingClientRect(), t3 = U3.current, n2 = { position: "fixed", zIndex: 9999 };
    return t3.startsWith("bottom") ? n2.top = e.bottom + 8 : n2.bottom = window.innerHeight - e.top + 8, t3.endsWith("Left") ? n2.left = e.left : n2.right = window.innerWidth - e.right, y2 && (n2.width = `${e.width}px`), n2;
  };
  return Ge("div", { className: "relative max-w-100", ref: B3, children: [Ge("div", { className: "flex items-center gap-2 rounded-lg border text-sm shadow-sm transition " + (u ? "cursor-not-allowed border-slate-200 dark:border-gray-600 bg-slate-50 dark:bg-gray-800 text-slate-400 dark:text-gray-500" : Y2 ? "border-primary bg-white dark:bg-gray-700 shadow-md" : "border-slate-200 dark:border-gray-600 bg-white dark:bg-gray-700"), children: [Ge("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: Ge("input", { type: "text", name: "range-start", value: O2[0], onChange: ue2("start"), onFocus: () => we2("start"), onClick: () => we2("start"), onBlur: he2("start"), onKeyDown: ge2("start"), className: "w-full rounded-md border px-2 py-1.5 text-sm font-medium transition focus:outline-none focus:ring-2 " + (u ? "cursor-not-allowed border-transparent bg-transparent text-slate-400 dark:text-gray-500" : "start" === H2 && Y2 ? " bg-white dark:bg-gray-700 text-primary" : "border-transparent bg-transparent text-slate-700 dark:text-gray-300"), placeholder: k3, autoComplete: "off", disabled: u }) }), Ge(it, { className: "text-slate-400 dark:text-gray-500" }), Ge("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: Ge("input", { type: "text", name: "range-end", value: O2[1], onChange: ue2("end"), onFocus: () => we2("end"), onClick: () => we2("end"), onBlur: he2("end"), onKeyDown: ge2("end"), className: "w-full rounded-md border px-2 py-1.5 text-sm font-medium transition focus:outline-none focus:ring-2 " + (u ? "cursor-not-allowed border-transparent bg-transparent text-slate-400 dark:text-gray-500" : "end" === H2 && Y2 ? "bg-white dark:bg-gray-700 text-primary" : "border-transparent bg-transparent text-slate-700 dark:text-gray-300"), placeholder: k3, autoComplete: "off", disabled: u }) })] }), Y2 && $(Ge(jn, { visibleMonth: $3, monthLabels: x2, weekDayLabels: E, calendarDays: pe2, draftRange: S2, focusedField: H2, isTimeEnabled: !!D2, disabled: u, matchTriggerWidth: y2, popupRef: V2, timeListRefs: q3, onMonthChange: ve2, onYearChange: fe2, onDaySelect: le2, onHourSelect: ie2, onMinuteSelect: se2, onOk: me2, getPopupStyle: De2 }), p ? p() : document.body)] });
};
var Fn = ({ event: t2, isOpen: n, isAllDay: r, onEventUpdate: a, onEventDelete: o, onClose: l2, app: i }) => {
  var d2;
  const [u, g] = d(t2), { t: m } = In();
  y(() => {
    g(t2);
  }, [t2]);
  const f = T(() => (i ? i.getCalendarRegistry() : R2()).getVisible().map((e) => ({ label: e.name, value: e.id })), [i, null == i ? void 0 : i.getCalendars()]), p = T(() => !ze(t2, u), [t2, u]), y2 = T(() => z(u.start) ? u.end && !z(u.end) && (u.end.timeZoneId || u.end.timeZoneId) || Xn.Now.timeZoneId() : u.start.timeZoneId || u.start.timeZoneId || Xn.Now.timeZoneId(), [u.end, u.start]), b = (e) => {
    const [t3, n2] = e;
    g(Object.assign(Object.assign({}, u), { start: t3.toPlainDate(), end: n2.toPlainDate() }));
  }, w = !(null == i ? void 0 : i.state.readOnly), D2 = false !== (null == i ? void 0 : i.getReadOnlyConfig().viewable);
  if (!n || !D2) return null;
  if ("undefined" == typeof window || "undefined" == typeof document) return null;
  const x2 = Ge("div", { className: "fixed inset-0 flex items-center justify-center", style: { pointerEvents: "auto", zIndex: 9998 }, "data-event-detail-dialog": "true", children: [Ge("div", { className: "absolute inset-0 bg-black/60 dark:bg-black/80", onClick: (e) => {
    const t3 = e.target;
    t3.closest("[data-range-picker-popup]") || t3 === e.currentTarget && l2();
  } }), Ge("div", { className: "df-dialog-container relative bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 rounded-lg p-6 max-w-md w-full mx-4", children: [Ge("button", { onClick: l2, className: "absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-200 transition", "aria-label": "Close", children: Ge("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: Ge("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }), Ge("div", { children: [Ge("span", { className: "block text-xs text-gray-600 dark:text-gray-300 mb-1", children: m("eventTitle") }), Ge("div", { className: "flex items-center justify-between gap-3 mb-4", children: [Ge("div", { className: "flex-1", children: Ge("input", { id: `event-dialog-title-${u.id}`, name: "title", type: "text", value: u.title, readOnly: !w, disabled: !w, onChange: (e) => {
    g(Object.assign(Object.assign({}, u), { title: e.target.value }));
  }, className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" }) }), w && Ge(en, { options: f, value: u.calendarId || "blue", onChange: (e) => {
    g(Object.assign(Object.assign({}, u), { calendarId: e }));
  }, registry: null == i ? void 0 : i.getCalendarRegistry() })] }), u.allDay ? Ge("div", { className: "mb-4", children: [Ge("div", { className: "text-xs text-gray-600 dark:text-gray-300 mb-1", children: m("dateRange") }), Ge(Yn, { value: [u.start, u.end], format: "YYYY-MM-DD", showTime: false, timeZone: y2, matchTriggerWidth: true, disabled: !w, onChange: b, onOk: b, locale: null == i ? void 0 : i.state.locale })] }) : Ge("div", { className: "mb-4", children: [Ge("div", { className: "text-xs text-gray-600 dark:text-gray-300 mb-1", children: m("timeRange") }), Ge(Yn, { value: [u.start, u.end], timeZone: y2, disabled: !w, onChange: (e) => {
    const [t3, n2] = e;
    g(Object.assign(Object.assign({}, u), { start: t3, end: n2 }));
  }, onOk: (e) => {
    const [t3, n2] = e;
    g(Object.assign(Object.assign({}, u), { start: t3, end: n2 }));
  }, locale: null == i ? void 0 : i.state.locale })] }), Ge("div", { className: "mb-4", children: [Ge("span", { className: "block text-xs text-gray-600 dark:text-gray-300 mb-1", children: m("note") }), Ge("textarea", { id: `event-dialog-note-${u.id}`, name: "note", value: null !== (d2 = u.description) && void 0 !== d2 ? d2 : "", readOnly: !w, disabled: !w, onChange: (e) => g(Object.assign(Object.assign({}, u), { description: e.target.value })), rows: 4, className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none", placeholder: m("addNotePlaceholder") })] }), w && Ge("div", { className: "flex space-x-2", children: [u.allDay ? Ge("button", { className: "px-3 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 text-xs font-medium transition", onClick: () => {
    const t3 = z(u.start) ? u.start : u.start.toPlainDate(), n2 = Xn.ZonedDateTime.from({ year: t3.year, month: t3.month, day: t3.day, hour: 9, minute: 0, timeZone: Xn.Now.timeZoneId() }), r2 = Xn.ZonedDateTime.from({ year: t3.year, month: t3.month, day: t3.day, hour: 10, minute: 0, timeZone: Xn.Now.timeZoneId() });
    g(Object.assign(Object.assign({}, u), { allDay: false, start: n2, end: r2 }));
  }, children: m("setAsTimed") }) : Ge("button", { className: "px-3 py-2 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 text-xs font-medium transition", onClick: () => {
    const e = z(u.start) ? u.start : u.start.toPlainDate();
    g(Object.assign(Object.assign({}, u), { allDay: true, start: e, end: e }));
  }, children: m("setAsAllDay") }), Ge("button", { className: "px-3 py-2 bg-destructive border border-border text-destructive-foreground rounded-lg hover:bg-destructive/90 text-xs font-medium transition", onClick: () => {
    o(t2.id), l2();
  }, children: m("delete") }), Ge("button", { className: "px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-medium transition ml-auto " + (p ? "hover:bg-primary/90 shadow-lg shadow-primary/20" : "opacity-50 cursor-not-allowed grayscale-[0.5]"), onClick: () => {
    a(u), l2();
  }, disabled: !p, children: m("save") })] })] })] })] }), E = document.body;
  return E ? $(x2, E) : null;
};
var zn = ({ calendar: e, mode: t2 = "buttons" }) => {
  const [n, r] = d(false), a = A(null), { t: o } = In(), l2 = Array.from(e.state.views.keys()), i = e.state.currentView;
  return l2.length <= 1 ? null : (y(() => {
    const e2 = (e3) => {
      a.current && !a.current.contains(e3.target) && r(false);
    };
    if (n) return document.addEventListener("mousedown", e2), () => document.removeEventListener("mousedown", e2);
  }, [n]), Ge("div", "select" === t2 ? { className: "relative inline-block", ref: a, children: [Ge("button", { onClick: () => r(!n), className: "flex items-center gap-2 px-3 h-7 text-sm font-medium border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-all duration-200 shadow-sm min-w-30 justify-between", "aria-expanded": n, "aria-haspopup": "listbox", children: [Ge("span", { className: "text-gray-900 dark:text-gray-100", children: o(i) }), Ge("span", { className: `${Vt} transition-transform duration-200 ${n ? "rotate-180" : ""}`, children: Ge(et, { width: 16, height: 16 }) })] }), n && Ge("div", { className: "absolute top-full mt-1 left-0 z-50 w-full min-w-30 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg dark:shadow-gray-900/50 overflow-hidden animate-in", children: Ge("div", { className: "p-1", role: "listbox", children: l2.map((t3) => Ge("button", { onClick: () => {
    e.changeView(t3), r(false), e.triggerRender && e.triggerRender();
  }, className: "w-full text-left px-3 py-0.5 rounded text-sm transition-colors duration-150 focus:outline-none " + (i === t3 ? "bg-primary/10 text-primary font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"), role: "option", "aria-selected": i === t3, children: o(t3) }, t3)) }) }), Ge("style", { children: "\n          @keyframes slideIn {\n            from {\n              opacity: 0;\n              transform: translateY(-4px);\n            }\n            to {\n              opacity: 1;\n              transform: translateY(0);\n            }\n          }\n          .animate-in {\n            animation: slideIn 0.15s ease-out;\n          }\n        " })] } : { className: "inline-flex items-center gap-1 p-0.5 mb-1 bg-gray-100 dark:bg-gray-800 rounded-lg", children: l2.map((t3) => Ge("button", { className: "px-4 h-6 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none " + (i === t3 ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"), onClick: () => {
    e.changeView(t3), e.triggerRender && e.triggerRender();
  }, children: o(t3) }, t3)) }));
};
var _n = (t2) => {
  if (!t2) return "";
  let n, r, a;
  t2 instanceof Date ? (n = t2.getFullYear(), r = t2.getMonth() + 1, a = t2.getDate()) : z(t2) ? (n = t2.year, r = t2.month, a = t2.day) : (!(function(t3) {
    !t3 || "object" != typeof t3 || t3 instanceof Date || Xn.ZonedDateTime;
  })(t2), n = t2.year, r = t2.month, a = t2.day);
  const o = String(r).padStart(2, "0");
  return `${String(a).padStart(2, "0")}/${o}/${n}`;
};
var Zn = (e) => `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][e.getMonth()]} ${e.getFullYear()}`;
var Wn = (e) => {
  const t2 = e.year, n = e.month;
  return `${e.day} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][n - 1]} ${t2}`;
};
function Un(e, t2 = "240px") {
  return "number" == typeof e ? `${e}px` : "string" == typeof e && e.trim().length > 0 ? e : t2;
}
function Bn() {
  if ("undefined" == typeof document) return false;
  const e = document.createElement("style");
  e.textContent = ".df-calendar-container .__df_measure__::-webkit-scrollbar { display: block !important; }", document.head.appendChild(e);
  const t2 = document.createElement("div");
  t2.className = "df-calendar-container", t2.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:hidden";
  const n = document.createElement("div");
  n.className = "__df_measure__", n.style.cssText = "width:100px;height:100px;overflow:scroll", t2.appendChild(n), document.body.appendChild(t2);
  const r = n.offsetWidth - n.clientWidth > 0;
  return document.body.removeChild(t2), document.head.removeChild(e), r;
}
var Vn = (e, t2, n) => `${e} ${t2} ${n.split(" ").filter(Boolean).map((e2) => `dark:${e2}`).join(" ")}`.trim();
var qn = { container: "bg-white dark:bg-gray-900", card: "bg-white dark:bg-gray-800", sidebar: "bg-gray-50 dark:bg-gray-900", text: "text-gray-900 dark:text-gray-100", textMuted: "text-gray-500 dark:text-gray-400", textSubtle: "text-gray-600 dark:text-gray-300", textEmphasis: "text-gray-900 dark:text-white", border: "border-gray-200 dark:border-gray-700", borderLight: "border-gray-100 dark:border-gray-800", borderStrong: "border-gray-300 dark:border-gray-600", bgPrimary: "bg-white dark:bg-gray-900", bgSecondary: "bg-gray-50 dark:bg-gray-800", bgTertiary: "bg-gray-100 dark:bg-gray-700", bgMuted: "bg-gray-100 dark:bg-gray-800", hover: "hover:bg-gray-100 dark:hover:bg-gray-800", hoverSubtle: "hover:bg-gray-50 dark:hover:bg-gray-900", active: "bg-gray-200 dark:bg-gray-700", focus: "focus:ring-primary", input: "bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100", inputFocus: "focus:border-primary focus:ring-primary", buttonPrimary: "bg-primary text-primary-foreground hover:bg-primary/90", buttonSecondary: "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600", buttonDanger: "bg-destructive text-destructive-foreground hover:bg-destructive/90", buttonSuccess: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800", shadow: "shadow-sm dark:shadow-gray-900/50", shadowMd: "shadow-md dark:shadow-gray-900/50", shadowLg: "shadow-lg dark:shadow-gray-900/50", divider: "border-gray-200 dark:border-gray-700" };
var Gn = (e, t2, n) => e ? t2 : n;
var Kn = (...e) => e.filter(Boolean).join(" ");
var Xn2 = (e) => {
  if ("undefined" == typeof document) return e;
  const t2 = document.documentElement, n = [t2.getAttribute("data-dayflow-theme-override"), t2.getAttribute("data-theme-override"), t2.getAttribute("data-theme")];
  for (const e2 of n) if ("light" === e2 || "dark" === e2) return e2;
  return t2.classList.contains("dark") ? "dark" : t2.classList.contains("light") ? "light" : e;
};
function Jn(t2, n = false) {
  if (t2 instanceof Xn.PlainDate || t2 instanceof Xn.PlainDateTime) return t2;
  if (t2 instanceof Date) return n ? on(t2) : ln(t2);
  throw new Error("Invalid time type: " + typeof t2);
}
function Qn(t2, n) {
  if (t2 instanceof Xn.ZonedDateTime) return t2;
  if (t2 instanceof Date) return sn(t2, n);
  throw new Error("Invalid time type: " + typeof t2);
}
function er(e) {
  var t2;
  const n = Jn(e.start, e.allDay), r = Jn(e.end, e.allDay);
  return { id: e.id, title: e.title, description: e.description, start: n, end: r, allDay: null !== (t2 = e.allDay) && void 0 !== t2 && t2, calendarId: e.calendarId, meta: e.meta };
}
function tr(e) {
  const t2 = Qn(e.start, e.timeZone), n = Qn(e.end, e.timeZone);
  return { id: e.id, title: e.title, description: e.description, start: t2, end: n, allDay: false, calendarId: e.calendarId, meta: e.meta };
}
function nr(e) {
  return e.map((e2) => er(e2));
}
function rr(e) {
  return e.map((e2) => tr(e2));
}
function ar(e, t2, n, r) {
  return er(Object.assign({ id: e, title: t2, start: n, end: n, allDay: true }, r));
}
function or(e, t2, n, r, a) {
  return er(Object.assign({ id: e, title: t2, start: n, end: r }, a));
}
function lr(e, t2, n, r, a = false, o) {
  return er(Object.assign({ id: e, title: t2, start: n, end: r, allDay: a }, o));
}
function ir(e, t2, n, r, a, o) {
  return tr(Object.assign({ id: e, title: t2, start: n, end: r, timeZone: a }, o));
}
var sr = (e) => {
  try {
    return e instanceof Date ? e : "string" == typeof e ? new Date(e) : U2(e);
  } catch (e2) {
    return /* @__PURE__ */ new Date();
  }
};
var dr = (e) => {
  const t2 = new Date(e);
  return t2.setHours(0, 0, 0, 0), t2;
};
var cr = (e, t2, n, r) => {
  const a = e.getTime() - t2.getTime(), o = Math.round(a / 864e5);
  let l2 = "", i = "text-gray-500 dark:text-gray-400";
  if (0 === o) l2 = r("today") || "Today", i = "text-primary";
  else if (1 === o || 2 === o) try {
    const e2 = new Intl.RelativeTimeFormat(n, { numeric: "auto" }).format(o, "day");
    l2 = e2.charAt(0).toUpperCase() + e2.slice(1), i = "text-black dark:text-white";
  } catch (t3) {
    l2 = e.toLocaleDateString(n, { weekday: "long" });
  }
  else l2 = e.toLocaleDateString(n, { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  return { title: l2, colorClass: i };
};
var ur = (e, t2) => {
  const n = /* @__PURE__ */ new Map();
  e.forEach((e2) => {
    var t3;
    const r2 = sr(e2.start), a = dr(r2), o = a.getTime();
    n.has(o) || n.set(o, { date: a, events: [] }), null === (t3 = n.get(o)) || void 0 === t3 || t3.events.push(e2);
  });
  const r = t2.getTime();
  n.has(r) || n.set(r, { date: t2, events: [] });
  return Array.from(n.values()).sort((e2, t3) => e2.date.getTime() - t3.date.getTime());
};
var hr = new class {
  constructor() {
    this.lastCopiedEvent = null;
  }
  setEvent(e) {
    this.lastCopiedEvent = e;
  }
  getEvent() {
    return this.lastCopiedEvent;
  }
  hasEvent() {
    return null !== this.lastCopiedEvent;
  }
  clear() {
    this.lastCopiedEvent = null;
  }
}();
var gr = /^(\d{4})(\d{2})(\d{2})$/;
var mr = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/;
var vr = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/;
function fr(t2, n, r) {
  const a = t2.trim();
  if ("DATE" === (null == n ? void 0 : n.value) || gr.test(a)) {
    const t3 = a.match(gr);
    if (t3) return Xn.PlainDate.from({ year: parseInt(t3[1], 10), month: parseInt(t3[2], 10), day: parseInt(t3[3], 10) });
  }
  if (vr.test(a)) {
    const t3 = a.match(vr);
    if (t3) {
      const n2 = Xn.Instant.from(`${t3[1]}-${t3[2]}-${t3[3]}T${t3[4]}:${t3[5]}:${t3[6]}Z`), a2 = r || Xn.Now.timeZoneId();
      return n2.toZonedDateTimeISO(a2);
    }
  }
  const o = a.match(mr);
  if (o) {
    const t3 = { year: parseInt(o[1], 10), month: parseInt(o[2], 10), day: parseInt(o[3], 10), hour: parseInt(o[4], 10), minute: parseInt(o[5], 10), second: parseInt(o[6], 10) };
    return (null == n ? void 0 : n.tzid) ? Xn.ZonedDateTime.from(Object.assign(Object.assign({}, t3), { timeZone: n.tzid })) : Xn.PlainDateTime.from(t3);
  }
  throw new Error(`Invalid ICS date format: ${t2}`);
}
function pr(e, t2 = false) {
  if (t2 || tn(e)) {
    const t3 = tn(e) ? e : e.toPlainDate();
    return { value: `${t3.year}${br(t3.month)}${br(t3.day)}`, params: { VALUE: "DATE" } };
  }
  if (rn(e)) {
    const t3 = e.toInstant().toZonedDateTimeISO("UTC");
    return { value: `${t3.year}${br(t3.month)}${br(t3.day)}T${br(t3.hour)}${br(t3.minute)}${br(t3.second)}Z` };
  }
  if (nn(e)) return { value: `${e.year}${br(e.month)}${br(e.day)}T${br(e.hour)}${br(e.minute)}${br(e.second)}` };
  throw new Error("Unsupported Temporal type");
}
function yr(e) {
  return `${e.getUTCFullYear()}${br(e.getUTCMonth() + 1)}${br(e.getUTCDate())}T${br(e.getUTCHours())}${br(e.getUTCMinutes())}${br(e.getUTCSeconds())}Z`;
}
function br(e) {
  return String(e).padStart(2, "0");
}
function wr(t2, n = {}) {
  const r = { success: false, events: [], errors: [], totalParsed: 0, totalImported: 0 };
  try {
    const a = t2.replace(/(\r\n|\n|\r)[ \t]/g, ""), o = (function(e) {
      const t3 = [];
      let n2 = null, r2 = false;
      for (const a2 of e) {
        const e2 = a2.trim().toUpperCase();
        e2.startsWith("BEGIN:VEVENT") ? (r2 = true, n2 = []) : e2.startsWith("END:VEVENT") ? (r2 && n2 && t3.push(n2), r2 = false, n2 = null) : r2 && n2 && n2.push(a2);
      }
      return t3;
    })(a.split(/\r\n|\n|\r/));
    r.totalParsed = o.length, o.forEach((t3, a2) => {
      try {
        const a3 = (function(e) {
          const t4 = {};
          for (const n2 of e) {
            const e2 = n2.indexOf(":");
            if (-1 === e2) continue;
            const r2 = n2.substring(0, e2), a4 = n2.substring(e2 + 1), [o3, ...l2] = r2.split(";"), i = o3.trim().toUpperCase(), s = {};
            switch (l2.forEach((e3) => {
              const [t5, n3] = e3.split("=");
              t5 && n3 && (s[t5.trim().toUpperCase()] = n3.trim());
            }), i) {
              case "UID":
                t4.uid = a4.trim();
                break;
              case "SUMMARY":
                t4.summary = Dr(a4);
                break;
              case "DESCRIPTION":
                t4.description = Dr(a4);
                break;
              case "LOCATION":
                t4.location = Dr(a4);
                break;
              case "DTSTART":
                t4.dtstart = a4.trim(), t4.dtstartParams = { value: s.VALUE, tzid: s.TZID };
                break;
              case "DTEND":
                t4.dtend = a4.trim(), t4.dtendParams = { value: s.VALUE, tzid: s.TZID };
                break;
              case "CATEGORIES":
                t4.categories = a4.split(",").map((e3) => Dr(e3.trim()));
            }
          }
          if (!t4.dtstart) throw new Error("Missing DTSTART in VEVENT");
          t4.uid || (t4.uid = Ze());
          return t4;
        })(t3), o2 = (function(t4, n2) {
          var r2;
          const { calendarId: a4 = "default", generateNewIds: o3 = true, idPrefix: l2 = "ics-", defaultTimeZone: i } = n2, s = o3 ? `${l2}${Ze()}` : t4.uid, d2 = fr(t4.dtstart, t4.dtstartParams, i);
          let c;
          c = t4.dtend ? fr(t4.dtend, t4.dtendParams, i) : tn(d2) ? d2.add({ days: 1 }) : d2.add({ hours: 1 });
          const u = "DATE" === (null === (r2 = t4.dtstartParams) || void 0 === r2 ? void 0 : r2.value) || tn(d2), h = i || Xn.Now.timeZoneId();
          let g, m;
          if (tn(d2)) g = d2.toZonedDateTime({ timeZone: h, plainTime: "00:00:00" });
          else if (nn(d2)) try {
            if ("function" != typeof d2.toZonedDateTime) throw new Error("toZonedDateTime missing");
            g = d2.toZonedDateTime(h);
          } catch (t5) {
            g = Xn.ZonedDateTime.from({ year: d2.year, month: d2.month, day: d2.day, hour: d2.hour, minute: d2.minute, second: d2.second, millisecond: d2.millisecond, timeZone: h });
          }
          else g = d2;
          if (tn(c)) m = c.toZonedDateTime({ timeZone: h, plainTime: "00:00:00" });
          else if (nn(c)) try {
            if ("function" != typeof c.toZonedDateTime) throw new Error("toZonedDateTime missing");
            m = c.toZonedDateTime(h);
          } catch (t5) {
            m = Xn.ZonedDateTime.from({ year: c.year, month: c.month, day: c.day, hour: c.hour, minute: c.minute, second: c.second, millisecond: c.millisecond, timeZone: h });
          }
          else m = c;
          return { id: s, calendarId: a4, title: t4.summary || "(No Title)", description: t4.description, start: g, end: m, allDay: u, meta: { location: t4.location, originalUid: t4.uid, categories: t4.categories } };
        })(a3, n);
        r.events.push(o2);
      } catch (e) {
        r.errors.push({ line: 0, message: e.message || "Unknown parsing error", eventUid: `index-${a2}` });
      }
    }), r.success = 0 === r.errors.length, r.totalImported = r.events.length;
  } catch (e) {
    r.errors.push({ message: `Fatal parsing error: ${e.message}` });
  }
  return r;
}
function Dr(e) {
  return e.replace(/\\,/g, ",").replace(/\\;/g, ";").replace(/\\[nN]/g, "\n").replace(/\\\\/g, "\\");
}
function xr(e, t2 = {}) {
  const { calendarName: n = "DayFlow Calendar", productId: r = "-//DayFlow//DayFlow Calendar//EN", includeTimezone: a = true } = t2, o = [];
  return o.push("BEGIN:VCALENDAR"), o.push("VERSION:2.0"), o.push(`PRODID:${r}`), o.push("CALSCALE:GREGORIAN"), o.push("METHOD:PUBLISH"), o.push(`X-WR-CALNAME:${kr(n)}`), e.forEach((e2) => {
    o.push(...(function(e3) {
      var t3, n2, r2;
      const a2 = [];
      a2.push("BEGIN:VEVENT");
      const o2 = null === (t3 = e3.meta) || void 0 === t3 ? void 0 : t3.originalUid, l2 = o2 || `${e3.id}@dayflow`;
      a2.push(`UID:${l2}`), a2.push(`DTSTAMP:${yr(/* @__PURE__ */ new Date())}`);
      const i = pr(e3.start, e3.allDay), s = pr(e3.end, e3.allDay);
      a2.push(Cr("DTSTART", i.value, i.params)), a2.push(Cr("DTEND", s.value, s.params)), a2.push(Cr("SUMMARY", kr(e3.title))), e3.description && a2.push(Cr("DESCRIPTION", kr(e3.description)));
      const d2 = null === (n2 = e3.meta) || void 0 === n2 ? void 0 : n2.location;
      d2 && a2.push(Cr("LOCATION", kr(d2)));
      const c = null === (r2 = e3.meta) || void 0 === r2 ? void 0 : r2.categories;
      if (c && Array.isArray(c)) {
        const e4 = c.map(kr).join(",");
        a2.push(Cr("CATEGORIES", e4));
      }
      return a2.push("END:VEVENT"), a2;
    })(e2));
  }), o.push("END:VCALENDAR"), o.join("\r\n");
}
function Er(e, t2 = {}) {
  const n = xr(e, t2), r = `${t2.filename || "calendar"}.ics`, a = new Blob([n], { type: "text/calendar;charset=utf-8" }), o = URL.createObjectURL(a), l2 = document.createElement("a");
  l2.href = o, l2.setAttribute("download", r), document.body.appendChild(l2), l2.click(), document.body.removeChild(l2), URL.revokeObjectURL(o);
}
function Cr(e, t2, n) {
  let r = e;
  return n && Object.entries(n).forEach(([e2, t3]) => {
    r += `;${e2}=${t3}`;
  }), r += `:${t2}`, (function(e2) {
    if (e2.length <= 75) return e2;
    const t3 = [];
    let n2 = e2;
    t3.push(n2.slice(0, 75)), n2 = n2.slice(75);
    for (; n2.length > 0; ) t3.push(" " + n2.slice(0, 74)), n2 = n2.slice(74);
    return t3.join("\r\n");
  })(r);
}
function kr(e) {
  return e ? e.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n") : "";
}
function Tr(e, t2) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((n, r) => {
      const a = new FileReader();
      a.onload = (e2) => {
        var r2;
        try {
          const a2 = null === (r2 = e2.target) || void 0 === r2 ? void 0 : r2.result;
          if (!a2) throw new Error("File content is empty");
          const o = wr(a2, t2);
          n(o);
        } catch (e3) {
          n({ success: false, events: [], errors: [{ message: e3.message || "Failed to read file" }], totalParsed: 0, totalImported: 0 });
        }
      }, a.onerror = () => {
        n({ success: false, events: [], errors: [{ message: "File read error" }], totalParsed: 0, totalImported: 0 });
      }, a.readAsText(e);
    });
  });
}
var Nr = null;
var Sr = () => {
  const [e, t2] = d(() => Nr || { weekHeight: N.WEEK_HEIGHT, screenSize: "desktop", weeksPerView: 6 });
  return y(() => {
    const e2 = () => {
      const e3 = window.innerWidth, n = window.innerHeight - 150, r = Math.max(80, Math.floor(n / 6)), a = e3 < 768 ? { weekHeight: Math.max(N.MOBILE_WEEK_HEIGHT, r), screenSize: "mobile", weeksPerView: 6 } : e3 < 1024 ? { weekHeight: Math.max(N.TABLET_WEEK_HEIGHT, r), screenSize: "tablet", weeksPerView: 6 } : { weekHeight: Math.max(N.WEEK_HEIGHT, r), screenSize: "desktop", weeksPerView: 6 };
      Nr = a, t2((e4) => e4.screenSize === a.screenSize && e4.weekHeight === a.weekHeight && e4.weeksPerView === a.weeksPerView ? e4 : a);
    };
    return e2(), window.addEventListener("resize", e2), () => window.removeEventListener("resize", e2);
  }, []), e;
};
var Mr = 0;
function Ir({ generatorName: e, generatorArgs: t2, defaultContent: n, store: r }) {
  const a = A(null), o = x(Ve), l2 = r || o, i = A(null), [, h] = d(0);
  i.current || (i.current = "df-slot-" + Mr++), y(() => {
    if (!a.current || !l2) return;
    const n2 = i.current;
    l2.register({ id: n2, containerEl: a.current, generatorName: e, generatorArgs: t2 });
    const r2 = l2.subscribe(() => {
      h((e2) => e2 + 1);
    });
    return () => {
      l2.unregister(n2), r2();
    };
  }, [l2]), y(() => {
    if (!l2 || !i.current) return;
    const n2 = i.current;
    l2.register({ id: n2, containerEl: a.current, generatorName: e, generatorArgs: t2 });
  }, [e, t2]);
  const g = "eventContent" === e, m = "sidebar" === e, v = null == l2 ? void 0 : l2.isOverridden(e);
  return Ge("div", { ref: a, className: "df-content-slot " + (g || m ? "flex-1 flex flex-col h-full" : ""), children: !v && n });
}
var Hr = ({ calendar: e, switcherMode: t2 = "buttons", onAddCalendar: n, onSearchChange: r, onSearchClick: a, searchValue: o = "", isSearchOpen: l2 = false, isEditable: i = true, safeAreaLeft: s }) => {
  const d2 = x(Ve), c = "buttons" === t2, m = e.state.currentView === k2.DAY, { screenSize: v } = Sr(), f = "mobile" === v, { t: p } = In(), y2 = q((e2) => {
    const t3 = e2.target.value;
    t3 !== o && (null == r || r(t3));
  }, [r, o]);
  return Ge(Ir, { store: d2, generatorName: "headerContent", generatorArgs: T(() => ({ calendar: e, switcherMode: t2, onAddCalendar: n, onSearchChange: r, onSearchClick: a, searchValue: o, isSearchOpen: l2, isEditable: i, safeAreaLeft: s }), [e, t2, n, r, a, o, l2, i, s]), defaultContent: Ge("div", { className: "df-header flex items-center justify-between pr-2 pt-1 bg-white dark:bg-gray-900 transition-colors duration-200 shrink-0 border-b " + (m || l2 ? "border-gray-200 dark:border-gray-700" : "border-transparent"), style: { paddingLeft: s || 8, transition: "padding-left 160ms ease-in-out" }, onContextMenu: (e2) => e2.preventDefault(), children: [Ge("div", { className: "df-header-left flex items-center mb-1", children: n && i && Ge("button", { id: "dayflow-add-event-btn", onClick: n, className: Bt, title: f ? p("newEvent") || "New Event" : p("createCalendar") || "Add Calendar", children: Ge(tt, { className: `h-4 w-4 ${Vt}` }) }) }), Ge("div", { className: "df-header-mid flex-1 flex justify-center", children: c && Ge(zn, { mode: t2, calendar: e }) }), Ge("div", { className: "df-header-right flex items-center justify-end gap-3 mb-1 pb-1", children: [!c && Ge(zn, { mode: t2, calendar: e }), Ge("button", { onClick: a, className: `md:hidden ${Bt}`, title: p("search") || "Search", children: Ge(nt, { width: 16, height: 16 }) }), Ge("div", { className: "relative hidden md:block group", children: [Ge("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: Ge("span", { className: "text-gray-400 group-focus-within:text-primary transition-colors", children: Ge(nt, { width: 16, height: 16 }) }) }), Ge("input", { id: "dayflow-search-input", type: "text", placeholder: p("search") || "Search", value: o, onChange: y2, className: "pl-9 pr-8 py-1 h-7 text-sm border border-slate-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition resize-none w-48" }), o && Ge("button", { onClick: () => {
    null == r || r("");
  }, className: "absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200", children: Ge("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [Ge("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), Ge("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] })] })] }) });
};
var Rr = ({ loading: e, results: t2, keyword: n, onResultClick: r, emptyText: a }) => {
  const { t: o, locale: l2 } = In(), i = T(() => dr(/* @__PURE__ */ new Date()), []), s = T(() => ur(t2, i), [t2, i]), d2 = (e2) => sr(e2);
  return e ? Ge("div", { className: "flex flex-col items-center justify-center h-40 text-gray-500", children: [Ge(st, { className: "w-8 h-8 animate-spin mb-2" }), Ge("span", { children: "Loading..." })] }) : 0 === t2.length ? n ? Ge("div", { className: "flex flex-col items-center justify-center h-40 text-gray-500", children: [Ge(Or, {}), Ge("span", { className: "mt-2 text-sm", children: "string" == typeof a ? a : a && "object" == typeof a ? a[l2] || a.en || "No results found" : o("noResults") || "No results found" })] }) : null : Ge("div", { className: "space-y-6", children: s.map((e2) => {
    const { title: t3, colorClass: n2 } = cr(e2.date, i, l2, o);
    return Ge("div", { children: [Ge("h3", { className: `px-2 text-sm font-medium mb-4 sticky top-0 bg-white dark:bg-gray-900 py-1 z-10 ${n2} border-b border-gray-200 dark:border-gray-700`, children: t3 }), Ge("div", { className: "flex flex-col", children: e2.events.map((e3) => {
      const t4 = d2(e3.start), n3 = d2(e3.end), a2 = { hour: "2-digit", minute: "2-digit" }, i2 = e3.allDay ? o("allDay") || "All Day" : t4.toLocaleTimeString(l2, a2), s2 = e3.allDay ? "" : n3.toLocaleTimeString(l2, a2);
      return Ge("div", { children: [Ge("div", { className: "p-2 mx-2 mb-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors group", onClick: () => null == r ? void 0 : r(e3), children: Ge("div", { className: "flex items-stretch gap-3", children: [Ge("div", { className: "w-1 rounded-full shrink-0", style: { backgroundColor: e3.color || "#3b82f6" } }), Ge("div", { className: "flex-1 min-w-0 flex justify-between items-start", children: [Ge("div", { className: "font-medium text-black dark:text-white truncate pr-2 text-sm", children: e3.title }), Ge("div", { className: "text-xs flex flex-col items-end shrink-0 leading-tight", children: [Ge("div", { className: "text-black dark:text-white", children: i2 }), s2 && Ge("div", { className: "text-gray-500 dark:text-gray-400", children: s2 })] })] })] }) }), Ge("div", { className: "mx-2 border-b border-gray-200 dark:border-gray-700" })] }, e3.id);
    }) })] }, e2.date.getTime());
  }) });
};
var Or = () => Ge("svg", { className: "w-12 h-12 text-gray-300 dark:text-gray-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: Ge("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) });
var Pr = ({ isOpen: e, onClose: t2, loading: n, results: r, keyword: a, onResultClick: o, emptyText: l2 }) => Ge("div", { className: "hidden md:flex relative h-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out flex-col border-l border-gray-200 dark:border-gray-700 overflow-hidden select-none " + (e ? "w-64" : "w-0 border-l-0"), children: Ge("div", { className: "flex-1 overflow-y-auto min-w-64", children: Ge(Rr, { loading: n, results: r, keyword: a, onResultClick: o, emptyText: l2 }) }) });
var Lr = ({ isOpen: e, onClose: t2, keyword: n, onSearchChange: r, results: a, loading: o, onResultClick: l2, emptyText: i }) => {
  const s = A(null), { t: u } = In();
  return y(() => (e ? (setTimeout(() => {
    var e2;
    null === (e2 = s.current) || void 0 === e2 || e2.focus();
  }, 100), document.body.style.overflow = "hidden") : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [e]), e && "undefined" != typeof window ? $(Ge("div", { className: "fixed inset-0 z-9999 bg-white dark:bg-gray-900 flex flex-col", children: [Ge("div", { className: "flex items-center p-2 border-b border-gray-200 dark:border-gray-700 gap-2", children: [Ge("button", { onClick: t2, className: "p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200", children: Ge(vt, { className: "w-6 h-6" }) }), Ge("div", { className: "flex-1 relative", children: [Ge("input", { ref: s, type: "text", placeholder: u("search") || "Search", value: n, onChange: (e2) => {
    const t3 = e2.target.value;
    t3 !== n && r(t3);
  }, className: "w-full pl-3 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-full text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none" }), n && Ge("button", { onClick: () => {
    "" !== n && r("");
  }, className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400", children: Ge(ot, { className: "w-4 h-4" }) })] })] }), Ge("div", { className: "flex-1 overflow-y-auto p-2 select-none", children: Ge(Rr, { loading: o, results: a, keyword: n, onResultClick: (e2) => {
    null == l2 || l2(e2);
  }, emptyText: i }) })] }), document.body) : null;
};
var Ar = ({ app: e, anchorRef: t2, onClose: n, isOpen: r }) => {
  const { t: a } = In(), [o, l2] = d(""), [i, u] = d(0), [g, f] = d(false), p = A(null), y2 = A(null);
  y(() => {
    r || f(false);
  }, [r]), y(() => {
    r && (setTimeout(() => {
      var e2;
      return null === (e2 = p.current) || void 0 === e2 ? void 0 : e2.focus();
    }, 50), l2(""), u(0));
  }, [r]), y(() => {
    const e2 = (e3) => {
      r && y2.current && !y2.current.contains(e3.target) && t2.current && !t2.current.contains(e3.target) && n();
    };
    return document.addEventListener("mousedown", e2), () => document.removeEventListener("mousedown", e2);
  }, [r, n, t2]);
  const [b, w] = d({ top: 0, left: 0 }), [D2, x2] = d("top"), [E, C] = d(0), k3 = T(() => {
    const e2 = /* @__PURE__ */ new Date(), t3 = new Date(e2);
    t3.setHours(t3.getHours() + 1, 0, 0, 0);
    const n2 = new Date(t3);
    return n2.setHours(n2.getHours() + 1), { start: t3, end: n2 };
  }, [r]), T3 = T(() => {
    if (!o.trim()) return [];
    const t3 = [], n2 = e.getCalendars(), r2 = e.getAllEvents(), a2 = o.toLowerCase(), l3 = r2.find((e2) => e2.title.toLowerCase() === a2);
    let i2 = null == l3 ? void 0 : l3.calendarId;
    if (!i2) {
      const e2 = n2.filter((e3) => false !== e3.isVisible);
      if (e2.length > 0) {
        const t4 = Math.floor(Math.random() * e2.length);
        i2 = e2[t4].id;
      } else n2.length > 0 && (i2 = n2[0].id);
    }
    const s = n2.find((e2) => e2.id === i2), d2 = (null == s ? void 0 : s.colors.lineColor) || "#3b82f6";
    t3.push({ type: "new", title: o, calendarId: i2 || "", color: d2, start: k3.start, end: k3.end });
    const c = /* @__PURE__ */ new Set();
    c.add(o.toLowerCase());
    return r2.filter((e2) => e2.title.toLowerCase().includes(a2) && !c.has(e2.title.toLowerCase())).slice(0, 5).forEach((e2) => {
      c.add(e2.title.toLowerCase());
      const r3 = n2.find((t4) => t4.id === e2.calendarId);
      t3.push({ type: "history", title: e2.title, calendarId: e2.calendarId || "", color: (null == r3 ? void 0 : r3.colors.lineColor) || "#9ca3af", start: k3.start, end: k3.end });
    }), t3;
  }, [o, e, k3]);
  _2(() => {
    if (r && t2.current && y2.current) {
      const e2 = t2.current.getBoundingClientRect(), n2 = y2.current.offsetHeight, r2 = 340;
      let a2 = e2.left + e2.width / 2 - r2 / 2;
      const o2 = 12, l3 = window.innerWidth;
      a2 < o2 ? a2 = o2 : a2 + r2 > l3 - o2 && (a2 = l3 - r2 - o2);
      const i2 = e2.left + e2.width / 2;
      C(i2 - a2);
      let s = 0, d2 = "top";
      e2.top < n2 + 20 ? (d2 = "bottom", s = e2.bottom + 12) : (d2 = "top", s = e2.top - 12 - n2), x2(d2), w({ top: s, left: a2 }), f(true);
    }
  }, [r, t2, T3]);
  const N2 = (t3) => {
    if (!t3.calendarId) return;
    const r2 = Ze(), a2 = { id: r2, title: t3.title, start: Z(t3.start), end: Z(t3.end), calendarId: t3.calendarId, allDay: false };
    e.addEvent(a2), e.setCurrentDate(t3.start), e.highlightEvent(r2), n();
  };
  y(() => {
    if (!r) return;
    const e2 = (e3) => {
      "ArrowDown" === e3.key ? (e3.preventDefault(), u((e4) => (e4 + 1) % T3.length)) : "ArrowUp" === e3.key ? (e3.preventDefault(), u((e4) => (e4 - 1 + T3.length) % T3.length)) : "Enter" === e3.key && (e3.preventDefault(), T3[i] && N2(T3[i]));
    };
    return window.addEventListener("keydown", e2), () => window.removeEventListener("keydown", e2);
  }, [r, T3, i]);
  const S2 = (e2, t3) => {
    const n2 = (e3) => e3.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    return `${n2(e2)} - ${n2(t3)}`;
  };
  return r ? $(Ge("div", { ref: y2, className: "fixed z-1000 w-85 flex flex-col bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-gray-200 dark:border-slate-700 " + (g ? "animate-in fade-in zoom-in-95 duration-100" : ""), style: { top: b.top, left: b.left, visibility: g ? "visible" : "hidden" }, children: [Ge("div", { className: "p-4 pb-2", children: [Ge("div", { className: "mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider", children: a("quickCreateEvent") || "Quick Create Event" }), Ge("div", { className: "relative", children: Ge("input", { ref: p, type: "text", className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition", placeholder: a("quickCreatePlaceholder") || "Enter title (e.g. Code review)", value: o, onChange: (e2) => l2(e2.target.value) }) })] }), Ge("div", { className: "flex-1 overflow-y-auto max-h-75 py-1 px-2", children: [0 === T3.length && o && Ge("div", { className: "px-4 py-3 text-sm text-gray-400 text-center", children: a("noSuggestions") || "Type to create" }), T3.map((e2, t3) => Ge("div", { className: "flex items-center px-4 py-2 cursor-pointer transition-colors rounded-lg " + (t3 === i ? "bg-primary/10 dark:bg-primary/20 ring-1 ring-inset ring-primary/20" : "hover:bg-gray-50 dark:hover:bg-slate-700/50"), onClick: () => N2(e2), onMouseEnter: () => u(t3), children: [Ge("div", { className: "w-1 h-8 rounded-full mr-3 shrink-0", style: { backgroundColor: e2.color } }), Ge("div", { className: "flex-1 min-w-0 flex flex-col gap-0.5", children: [Ge("div", { className: "text-sm font-medium text-gray-900 dark:text-gray-100 truncate", children: e2.title }), Ge("div", { className: "flex", children: Ge("span", { className: "font-semibold text-[10px] px-1 bg-gray-100 dark:bg-slate-700 rounded text-gray-500 dark:text-gray-400", children: "new" === e2.type ? a("today") : a("tomorrow") }) }), Ge("div", { className: "text-xs text-gray-500 dark:text-gray-400", children: S2(e2.start, e2.end) })] })] }, `${e2.type}-${t3}`))] }), Ge("div", { className: "absolute w-3 h-3 bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 rotate-45 -translate-x-1/2 " + ("top" === D2 ? "-bottom-1.5 border-b border-r" : "-top-1.5 border-t border-l"), style: { left: E } })] }), document.body) : null;
};
var $r = (e) => {
  const t2 = A(null), n = A(null);
  return y(() => {
    if (t2.current) {
      const { className: r } = e, a = __rest(e, ["className"]);
      n.current = new gt(t2.current, a), a.initialExpanded && n.current.expand();
    }
    return () => {
      n.current && (n.current.destroy(), n.current = null);
    };
  }, []), y(() => {
    if (n.current) {
      const { className: t3 } = e, r = __rest(e, ["className"]);
      n.current.setOptions(r);
    }
  }, [e]), Ge("div", { ref: t2, className: e.className });
};
var jr = ({ color: e, onChange: t2, onClose: n }) => {
  const r = T(() => {
    const { h: t3, s: n2, l: r2 } = j(e);
    return { hue: t3, saturation: U(r2), lightness: r2, alpha: 100, layer: "outer" };
  }, [e]);
  return Ge("div", { className: "flex justify-center", children: Ge($r, { defaultValue: r, coreSize: 36, petalSize: 32, initialExpanded: true, openOnHover: false, onChange: (e2) => t2({ hex: e2.hex }, true), onCollapse: n }) });
};
var Yr = R(void 0);
var Fr = ({ children: e, initialTheme: t2 = "light", onThemeChange: n }) => {
  const [r, a] = d(t2), [o, l2] = d("light"), i = "auto" === r ? o : r;
  y(() => {
    a(t2);
  }, [t2]);
  const d2 = q((e2) => {
    a(e2);
  }, []);
  y(() => {
    if ("undefined" == typeof window || !window.matchMedia) return;
    const e2 = window.matchMedia("(prefers-color-scheme: dark)"), t3 = (e3) => {
      const t4 = e3.matches ? "dark" : "light";
      l2(t4);
    }, n2 = e2.matches ? "dark" : "light";
    return l2(n2), e2.addEventListener ? e2.addEventListener("change", t3) : e2.addListener && e2.addListener(t3), () => {
      e2.removeEventListener ? e2.removeEventListener("change", t3) : e2.removeListener && e2.removeListener(t3);
    };
  }, []), y(() => {
    if ("undefined" == typeof document) return;
    const e2 = document.documentElement, t3 = Xn2(i), n2 = "auto" === r ? t3 : i;
    e2.classList.remove("light", "dark"), e2.classList.add(n2), "auto" === r ? e2.removeAttribute("data-dayflow-theme-override") : e2.setAttribute("data-dayflow-theme-override", n2), e2.setAttribute("data-theme", n2);
  }, [i, r, o]), y(() => {
    n && n(r, i);
  }, [r, i, n]);
  const u = { theme: r, effectiveTheme: i, setTheme: d2 };
  return Ge(Yr.Provider, { value: u, children: e });
};
var zr = () => {
  const e = x(Yr);
  if (void 0 === e) throw new Error("useTheme must be used within a ThemeProvider");
  return e;
};
var _r = ["#ea426b", "#f19a38", "#f7cf46", "#83d754", "#51aaf2", "#b672d0", "#957e5e"];
var Zr = ({ onClose: e, onCreate: t2, colorPickerMode: n = "default" }) => {
  const { t: a } = In(), { effectiveTheme: o } = zr(), [l2, i] = d(""), [d2, c] = d(_r[Math.floor(Math.random() * _r.length)]), [u, g] = d(false), [m, f] = d(""), p = T(() => {
    const e2 = G[Math.floor(Math.random() * G.length)], t3 = e2.layer || "outer", n2 = U(e2.l);
    return { hue: e2.h, saturation: n2, lightness: e2.l, alpha: 100, layer: t3 };
  }, []), [y2, b] = d(null), w = (e2) => {
    c(e2.hex);
  }, D2 = "dark" === o, k3 = { default: { picker: { background: D2 ? "#1e293b" : "#ffffff", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", borderRadius: "0.5rem", border: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb" }, head: { background: D2 ? "#1e293b" : "#ffffff", borderBottom: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb", boxShadow: "none" }, body: { background: D2 ? "#1e293b" : "#ffffff" }, controls: { border: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb" }, input: { background: D2 ? "#374151" : "#ffffff", color: D2 ? "#f3f4f6" : "#1f2937", border: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb", boxShadow: "none" }, previews: { border: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb" }, actions: { borderTop: D2 ? "1px solid #4b5563" : "1px solid #e5e7eb" } } };
  return "undefined" == typeof window ? null : $(Ge("div", { className: "fixed inset-0 z-10000 flex items-center justify-center bg-black/50", children: Ge("div", { className: "w-full max-w-sm rounded-lg p-6 shadow-xl bg-white dark:bg-slate-900 animate-in fade-in zoom-in-95", onClick: (e2) => e2.stopPropagation(), children: [Ge("h2", { className: "text-lg font-semibold text-gray-900 dark:text-white " + ("default" === n ? "mb-6" : "mb-4"), children: a("createCalendar") }), Ge("form", { onSubmit: (r) => {
    var a2;
    if (r.preventDefault(), !l2.trim()) return;
    let o2;
    o2 = "default" === n ? null !== (a2 = null == y2 ? void 0 : y2.hex) && void 0 !== a2 ? a2 : B(p.hue, p.saturation, p.lightness) : d2;
    const { colors: i2, darkColors: s } = O(o2), c2 = { id: Ze(), name: l2.trim(), colors: i2, darkColors: s, isVisible: true, isDefault: false };
    t2(c2), e();
  }, children: ["default" === n ? Ge("div", { className: "mb-8 flex items-center gap-4", children: [Ge("div", { className: "flex-1", children: Ge("input", { id: "blossom-calendar-name", name: "calendar-name", type: "text", value: l2, onChange: (e2) => i(e2.target.value), className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition", placeholder: a("calendarNamePlaceholder"), autoFocus: true }) }), Ge("div", { className: "w-9 h-9 relative shrink-0", children: Ge("div", { className: "absolute inset-0 flex items-center justify-center", children: Ge($r, { defaultValue: p, coreSize: 36, petalSize: 32, openOnHover: false, onChange: (e2) => b(e2), onCollapse: (e2) => b(e2), className: "z-50" }) }) })] }) : Ge(k, { children: [Ge("div", { className: "mb-4", children: Ge("div", { className: "flex items-center gap-3", children: [Ge("div", { className: "h-9 w-9 rounded-md border border-gray-200 shadow-sm dark:border-gray-600", style: { backgroundColor: d2 } }), Ge("input", { id: "custom-calendar-name", name: "calendar-name", type: "text", value: l2, onChange: (e2) => i(e2.target.value), className: "w-full flex-1 border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition", placeholder: a("calendarNamePlaceholder"), autoFocus: true })] }) }), Ge("div", { className: "mb-6", children: [Ge("div", { className: "grid grid-cols-7 gap-6", children: _r.map((e2) => Ge("button", { type: "button", className: "h-6 w-6 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-600 dark:focus:ring-offset-slate-800 " + (d2 === e2 ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-800" : ""), style: { backgroundColor: e2 }, onClick: () => c(e2) }, e2)) }), Ge("div", { className: "mt-2 relative", children: [Ge("button", { type: "button", onClick: () => {
    f(d2), g(true);
  }, className: "flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-800", children: a("customColor") }), u && Ge("div", { className: "absolute left-0 top-full z-10001 mt-2", children: Ge(Ir, { generatorName: "colorPickerWrapper", generatorArgs: { variant: "photoshop", color: d2, onChange: w, onAccept: () => {
    g(false);
  }, onCancel: () => {
    c(m), g(false);
  }, styles: k3 }, defaultContent: Ge("div", { children: Ge(jr, { color: d2, onChange: w }) }) }) })] })] })] }), Ge("div", { className: "flex justify-end space-x-2", children: [Ge("button", { type: "button", onClick: e, className: "px-2 py-1 border border-slate-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-medium transition", children: a("cancel") }), Ge("button", { type: "submit", disabled: !l2.trim(), className: "px-2 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 text-xs font-medium transition disabled:opacity-50", children: a("create") })] })] })] }) }), document.body);
};
var Wr = ({ visibleMonth: e, currentDate: t2, showHeader: n = false, onMonthChange: r, onDateSelect: a }) => {
  const { locale: o } = In(), l2 = T(() => (/* @__PURE__ */ new Date()).toDateString(), []), i = t2.toDateString(), s = T(() => Tn(o, "narrow"), [o]), d2 = T(() => e.toLocaleDateString(o, { month: "long", year: "numeric" }), [e, o]), c = T(() => {
    const t3 = e.getFullYear(), n2 = e.getMonth(), r2 = (new Date(t3, n2, 1).getDay() + 6) % 7, a2 = [];
    for (let e2 = 0; e2 < 42; e2++) {
      const o2 = new Date(t3, n2, e2 - r2 + 1), s2 = o2.toDateString();
      a2.push({ date: o2.getDate(), fullDate: o2, isCurrentMonth: o2.getMonth() === n2, isToday: s2 === l2, isSelected: s2 === i });
    }
    return a2;
  }, [e, i, l2]);
  return Ge("div", { className: "px-3 py-3", children: [n ? Ge("div", { className: "mb-3 flex items-center justify-between", children: [Ge("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800", onClick: () => r(-1), "aria-label": "Previous month", children: Ge(Ke, { className: "h-4 w-4" }) }), Ge("span", { className: "text-sm font-semibold text-gray-700 dark:text-gray-200", children: d2 }), Ge("button", { type: "button", className: "flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800", onClick: () => r(1), "aria-label": "Next month", children: Ge(Xe, { className: "h-4 w-4" }) })] }) : "", Ge("div", { className: "df-mini-calendar-grid grid grid-cols-7 gap-1 text-xs justify-items-center", children: [s.map((e2, t3) => Ge("div", { className: "df-mini-calendar-header text-center text-gray-500 dark:text-gray-400 font-medium py-1 h-6 w-6 text-gray-500 dark:text-gray-400", children: e2 }, `weekday-${t3}`)), c.map((e2) => Ge("button", { type: "button", className: `
              df-mini-calendar-day text-center py-1 rounded text-xs h-6 w-6
              ${e2.isToday ? Lt : e2.isCurrentMonth ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-600"}
              ${e2.isSelected && !e2.isToday ? "bg-secondary text-secondary-foreground rounded-full font-medium" : ""}
            `, onClick: () => a(e2.fullDate), children: e2.date }, e2.fullDate.getTime()))] })] });
};
var Ur = ({ checked: e, onChange: t2, disabled: n }) => Ge("div", { className: `w-12 h-7 flex items-center rounded-full p-1 transition-colors ${n ? "cursor-default opacity-50" : "cursor-pointer"} ${e ? "bg-green-500" : "bg-gray-300"}`, onClick: () => !n && t2(!e), children: Ge("div", { className: "bg-white w-5 h-5 rounded-full shadow-md transform transition-transform " + (e ? "translate-x-5" : "") }) });
var Br = ({ date: e, onChange: t2 }) => {
  const n = Array.from({ length: 24 }, (e2, t3) => t3), r = Array.from({ length: 12 }, (e2, t3) => 5 * t3), a = [...n, ...n, ...n], o = [...r, ...r, ...r], l2 = 32, i = e.getHours(), u = 5 * Math.round(e.getMinutes() / 5), h = (24 + i) * l2, g = (12 + u / 5) * l2, [m, v] = d(h), [f, p] = d(g), y2 = A(null), b = A(null), w = A(null);
  y(() => {
    y2.current && (y2.current.scrollTop = h, v(h)), b.current && (b.current.scrollTop = g, p(g));
  }, [h, g]);
  const D2 = (n2, r2) => {
    const i2 = n2.currentTarget;
    let s = i2.scrollTop;
    if ("hour" === r2) {
      const e2 = 768;
      s < 320 ? (s += e2, i2.scrollTop = s) : s > 1600 && (s -= e2, i2.scrollTop = s), v(s);
    } else {
      const e2 = 384;
      s < 160 ? (s += e2, i2.scrollTop = s) : s > 800 && (s -= e2, i2.scrollTop = s), p(s);
    }
    w.current && clearTimeout(w.current), w.current = setTimeout(() => {
      ((n3, r3) => {
        const i3 = Math.round(r3 / l2);
        if ("hour" === n3) {
          const n4 = a[i3];
          if (void 0 !== n4 && n4 !== e.getHours()) {
            const r4 = new Date(e);
            r4.setHours(n4), t2(r4);
          }
        } else {
          const n4 = o[i3];
          if (void 0 !== n4 && 5 * Math.round(e.getMinutes() / 5) !== n4) {
            const r4 = new Date(e);
            r4.setMinutes(n4), t2(r4);
          }
        }
      })(r2, s);
    }, 150);
  }, x2 = (e2, t3) => {
    const n2 = 96 + e2 * l2 + 16 - (t3 + 112), r2 = Math.min(Math.abs(n2) / 112, 1);
    return { transform: `perspective(500px) rotateX(${-(n2 / 112 * 80)}deg) scale(${1 - 0.4 * r2})`, opacity: 1 - 0.7 * r2, transition: "transform 0.1s ease-out, opacity 0.1s ease-out" };
  };
  return Ge("div", { className: "flex h-56 overflow-hidden rounded-lg mt-2 relative ", children: [Ge("style", { dangerouslySetInnerHTML: { __html: "\n            .no-scrollbar::-webkit-scrollbar { display: none; }\n            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n        " } }), Ge("div", { ref: y2, className: "flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar", style: { touchAction: "pan-y" }, onScroll: (e2) => D2(e2, "hour"), children: [Ge("div", { style: { height: 96 } }), a.map((n2, r2) => Ge("div", { className: "h-8 flex items-center justify-end pr-5 snap-center cursor-pointer", onClick: () => {
    var a2;
    const o2 = new Date(e);
    o2.setHours(n2), t2(o2), null === (a2 = y2.current) || void 0 === a2 || a2.scrollTo({ top: r2 * l2, behavior: "smooth" });
  }, children: Ge("div", { className: "w-10 text-center text-xl transition-colors duration-200 " + (n2 === i ? "font-bold text-black dark:text-white" : "text-gray-400 dark:text-gray-500"), style: x2(r2, m), children: n2.toString().padStart(2, "0") }) }, r2)), Ge("div", { style: { height: 96 } })] }), Ge("div", { ref: b, className: "flex-1 overflow-y-auto snap-y snap-mandatory no-scrollbar", style: { touchAction: "pan-y" }, onScroll: (e2) => D2(e2, "minute"), children: [Ge("div", { style: { height: 96 } }), o.map((n2, r2) => Ge("div", { className: "h-8 flex items-center justify-start pl-5 snap-center cursor-pointer", onClick: () => {
    var a2;
    const o2 = new Date(e);
    o2.setMinutes(n2), t2(o2), null === (a2 = b.current) || void 0 === a2 || a2.scrollTo({ top: r2 * l2, behavior: "smooth" });
  }, children: Ge("div", { className: "w-10 text-center text-xl transition-colors duration-200 " + (n2 === u ? "font-bold text-black dark:text-white" : "text-gray-400 dark:text-gray-500"), style: x2(r2, f), children: n2.toString().padStart(2, "0") }) }, r2)), Ge("div", { style: { height: 96 } })] }), Ge("div", { className: "absolute top-24 left-2 right-2 h-8 bg-gray-300/20 dark:bg-gray-500/20 pointer-events-none border border-gray-300 dark:border-gray-600 rounded-lg" })] });
};
var Vr = ({ isOpen: e, onClose: t2, onSave: n, onEventDelete: r, draftEvent: a, app: o }) => {
  const { locale: l2, t: i } = In(), d2 = o.getReadOnlyConfig(), u = !o.state.readOnly, g = false !== d2.viewable, [m, f] = d(""), [p, y2] = d(""), [b, w] = d(false), [D2, x2] = d(/* @__PURE__ */ new Date()), [E, C] = d(/* @__PURE__ */ new Date()), [k3, T3] = d(""), [N2, S2] = d(/* @__PURE__ */ new Date()), [M3, I2] = d(/* @__PURE__ */ new Date()), [H2, R3] = d(null), [O2, P2] = d(e), [L2, A3] = d(false), [$3, j3] = d(false);
  y(() => {
    if (!e) {
      A3(true);
      const e2 = setTimeout(() => {
        P2(false), A3(false);
      }, 300);
      return () => clearTimeout(e2);
    }
    P2(true), A3(false);
  }, [e]), y(() => {
    if (e && a) {
      const e2 = o.getEvents().some((e3) => e3.id === a.id);
      j3(e2);
    }
  }, [e, a, o]);
  const Y2 = o.getCalendars(), F2 = Y2.map((e2) => ({ label: e2.name, value: e2.id }));
  y(() => {
    if (e && Y2.length > 0) {
      Y2.some((e2) => e2.id === p) || "blue" !== p && "" !== p || y2(Y2[0].id);
    }
  }, [Y2, e, p]), y(() => (e ? (document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%") : (document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.position = "", document.body.style.width = ""), () => {
    document.body.style.overflow = "", document.documentElement.style.overflow = "", document.body.style.position = "", document.body.style.width = "";
  }), [e]), y(() => {
    var t3, n2;
    if (e && a) {
      if (f(a.title || ""), y2(a.calendarId || (null === (t3 = Y2[0]) || void 0 === t3 ? void 0 : t3.id) || "blue"), w(a.allDay || false), a.start) try {
        const e2 = U2(a.start);
        x2(e2), S2(e2);
      } catch (e2) {
        console.error("Failed to parse start date", e2);
        const t4 = /* @__PURE__ */ new Date();
        x2(t4), S2(t4);
      }
      if (a.end) try {
        const e2 = U2(a.end);
        C(e2), I2(e2);
      } catch (e2) {
        console.error("Failed to parse end date", e2);
        const t4 = /* @__PURE__ */ new Date();
        C(t4), I2(t4);
      }
    } else if (e && !a) {
      y2((null === (n2 = Y2[0]) || void 0 === n2 ? void 0 : n2.id) || "blue");
      const e2 = /* @__PURE__ */ new Date();
      e2.setMinutes(0, 0, 0), x2(e2), S2(e2), C(new Date(e2.getTime() + 36e5)), I2(e2);
    }
  }, [e, a]);
  const z2 = T(() => {
    if (!e || !a) return false;
    let t3 = new Date(D2), n2 = new Date(E);
    b && (t3.setHours(0, 0, 0, 0), n2.setHours(0, 0, 0, 0));
    const r2 = Object.assign(Object.assign({}, a), { title: m, calendarId: p, allDay: b, description: k3, start: Z(t3), end: Z(n2) });
    return !ze(a, r2);
  }, [e, a, m, p, b, D2, E, k3]);
  if (!O2 || !g) return null;
  const _4 = (e2) => {
    R3((t3) => t3 === e2 ? null : e2);
  }, W2 = (e2) => e2.toLocaleDateString(l2, { day: "numeric", month: "short", year: "numeric" }), B3 = (e2, t3) => {
    if ("start" === e2) {
      const e3 = new Date(t3);
      e3.setHours(D2.getHours(), D2.getMinutes());
      const n2 = e3.getTime() - D2.getTime();
      x2(e3);
      const r2 = new Date(E.getTime() + n2);
      C(r2);
    } else {
      const e3 = new Date(t3);
      e3.setHours(E.getHours(), E.getMinutes()), C(e3);
    }
  }, V2 = (e2, t3) => {
    "start" === e2 ? S2((e3) => {
      const n2 = new Date(e3);
      return n2.setMonth(e3.getMonth() + t3), n2;
    }) : I2((e3) => {
      const n2 = new Date(e3);
      return n2.setMonth(e3.getMonth() + t3), n2;
    });
  };
  return $(Ge("div", { className: "fixed inset-0 z-10000 flex items-end pointer-events-none", children: [Ge("div", { className: "absolute inset-0 bg-black/30 pointer-events-auto transition-opacity duration-300 " + (L2 ? "opacity-0" : "opacity-100"), style: { touchAction: "none" }, onClick: t2 }), Ge("div", { className: "relative w-full bg-gray-100 dark:bg-gray-800 rounded-t-2xl shadow-xl h-[85vh] flex flex-col pointer-events-auto overflow-hidden " + (L2 ? "animate-slide-down" : "animate-slide-up"), onClick: (e2) => e2.stopPropagation(), children: [Ge("div", { className: "flex justify-between items-center p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700", children: [Ge("button", { onClick: t2, className: "text-gray-500 hover:text-gray-700 px-2 py-1", children: i("cancel") }), Ge("span", { className: "font-semibold text-lg", children: i(!u && $3 ? "viewEvent" : $3 ? "editEvent" : "newEvent") }), u && Ge("button", { onClick: () => {
    if (!a) return;
    let e2 = new Date(D2), t3 = new Date(E);
    b && (e2.setHours(0, 0, 0, 0), t3.setHours(0, 0, 0, 0));
    const r2 = Object.assign(Object.assign({}, a), { title: m, calendarId: p, allDay: b, start: Z(e2), end: Z(t3) });
    n(r2);
  }, disabled: !z2, className: "font-bold px-2 py-1 transition-colors " + (z2 ? "text-primary" : "text-gray-400 cursor-not-allowed opacity-50"), children: i($3 ? "done" : "create") }), !u && Ge("span", { className: "w-12" })] }), Ge("div", { className: "flex-1 overflow-y-auto p-4 space-y-4", children: [Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg px-4 py-3", children: Ge("input", { type: "text", placeholder: i("titlePlaceholder"), value: m, onChange: (e2) => u && f(e2.target.value), readOnly: !u, className: "w-full bg-transparent text-xl font-medium placeholder-gray-400 focus:outline-none", autoFocus: u }) }), Y2.length > 0 && Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg px-4 py-3 flex justify-between items-center relative", children: [Ge("span", { className: "text-gray-700 dark:text-gray-300", children: i("calendar") }), Ge(en, { options: F2, value: p, onChange: u ? y2 : () => {
  }, registry: o.getCalendarRegistry(), variant: "mobile", disabled: !u })] }), Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg px-4 py-3 flex justify-between items-center", children: [Ge("span", { className: "text-gray-700 dark:text-gray-300", children: i("allDay") }), Ge(Ur, { checked: b, onChange: u ? w : () => {
  }, disabled: !u })] }), Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg overflow-hidden", children: [Ge("div", { className: "flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0", children: [Ge("span", { className: "text-gray-700 dark:text-gray-300", children: i("starts") }), Ge("div", { className: "flex space-x-2", children: [Ge("button", { className: "px-3 py-1 rounded-md transition-colors " + ("start-date" === H2 ? "bg-gray-200 dark:bg-gray-700 text-primary dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"), onClick: () => u && _4("start-date"), disabled: !u, children: W2(D2) }), !b && Ge("button", { className: "px-3 py-1 rounded-md transition-colors " + ("start-time" === H2 ? "bg-gray-200 dark:bg-gray-700 text-primary dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"), onClick: () => u && _4("start-time"), disabled: !u, children: ge(D2.getHours() + D2.getMinutes() / 60) })] })] }), Ge("div", { className: "overflow-hidden transition-all duration-300 ease-in-out " + ("start-date" === H2 ? "max-h-100" : "max-h-0"), children: Ge("div", { className: "", children: Ge(Wr, { currentDate: D2, visibleMonth: N2, onDateSelect: (e2) => B3("start", e2), onMonthChange: (e2) => V2("start", e2), showHeader: true }) }) }), Ge("div", { className: "overflow-hidden transition-all duration-300 ease-in-out " + ("start-time" === H2 ? "max-h-75" : "max-h-0"), children: Ge("div", { className: "", children: Ge(Br, { date: D2, onChange: (e2) => {
    const t3 = E.getTime() - D2.getTime();
    x2(e2), C(new Date(e2.getTime() + t3));
  } }) }) })] }), Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg overflow-hidden", children: [Ge("div", { className: "flex justify-between items-center px-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0", children: [Ge("span", { className: "text-gray-700 dark:text-gray-300", children: i("ends") }), Ge("div", { className: "flex space-x-2", children: [Ge("button", { className: "px-3 py-1 rounded-md transition-colors " + ("end-date" === H2 ? "bg-gray-200 dark:bg-gray-700 text-primary dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"), onClick: () => u && _4("end-date"), disabled: !u, children: W2(E) }), !b && Ge("button", { className: "px-3 py-1 rounded-md transition-colors " + ("end-time" === H2 ? "bg-gray-200 dark:bg-gray-700 text-primary dark:text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"), onClick: () => u && _4("end-time"), disabled: !u, children: ge(E.getHours() + E.getMinutes() / 60) })] })] }), Ge("div", { className: "overflow-hidden transition-all duration-300 ease-in-out " + ("end-date" === H2 ? "max-h-100" : "max-h-0"), children: Ge("div", { className: "", children: Ge(Wr, { currentDate: E, visibleMonth: M3, onDateSelect: (e2) => B3("end", e2), onMonthChange: (e2) => V2("end", e2), showHeader: true }) }) }), Ge("div", { className: "overflow-hidden transition-all duration-300 ease-in-out " + ("end-time" === H2 ? "max-h-75" : "max-h-0"), children: Ge("div", { className: "", children: Ge(Br, { date: E, onChange: (e2) => {
    if (e2 < D2) {
      const t3 = E.getTime() - D2.getTime();
      C(e2), x2(new Date(e2.getTime() - t3));
    } else C(e2);
  } }) }) })] }), Ge("div", { className: "bg-white dark:bg-gray-900 rounded-lg px-4 py-3", children: Ge("textarea", { placeholder: i("notesPlaceholder"), value: k3, onChange: (e2) => u && T3(e2.target.value), readOnly: !u, className: "w-full bg-transparent text-base placeholder-gray-400 focus:outline-none min-h-20" }) }), u && $3 && r && a && Ge("button", { onClick: () => r(a.id), className: "w-full bg-white dark:bg-gray-900 rounded-lg px-4 py-3 text-red-500 font-medium text-left", children: i("delete") })] })] })] }), document.body);
};
var qr = null;
function Gr(e) {
  qr = e;
}
var Kr = { enabled: false, width: "0px", isCollapsed: false, toggleCollapsed: () => {
}, miniWidth: "0px", content: null, extraContent: null, safeAreaLeft: 0 };
function Xr(e) {
  return qr && e.hasPlugin("sidebar") ? qr(e) : Kr;
}
var Jr = ({ locale: e, messages: t2, children: n }) => In().isDefault ? Ge(Hn, { locale: e, messages: t2, children: n }) : Ge(k, { children: n });
var Qr = ({ app: e, customDetailPanelContent: t2, customEventDetailDialog: n, meta: r, customMessages: o, search: l2, titleBarSlot: i, collapsedSafeAreaLeft: m }) => {
  const f = x(Ve), { tick: p, selectedEventId: b } = (function(e2) {
    const [t3, n2] = d(0), [r2, a] = d(null);
    return y(() => e2.subscribe((e3) => {
      n2((e4) => e4 + 1), a((t4) => {
        var n3;
        const r3 = null !== (n3 = e3.state.selectedEventId) && void 0 !== n3 ? n3 : null;
        return t4 !== r3 ? r3 : t4;
      });
    }), [e2]), { tick: t3, selectedEventId: r2 };
  })(e), { isMobile: w } = (function() {
    const [e2, t3] = d(false);
    return y(() => {
      const e3 = () => {
        t3(window.matchMedia("(max-width: 768px)").matches);
      };
      return e3(), window.addEventListener("resize", e3), () => window.removeEventListener("resize", e3);
    }, []), { isMobile: e2 };
  })(), D2 = (function(e2, t3) {
    const [n2, r2] = d(""), [a, o2] = d(false), [l3, i2] = d(false), [d2, u] = d(false), [h, m2] = d([]);
    y(() => {
      e2.state.highlightedEventId && e2.selectEvent(e2.state.highlightedEventId);
    }, [e2.state.highlightedEventId, e2]), y(() => {
      a || null === e2.state.highlightedEventId || e2.highlightEvent(null);
    }, [a, e2]), y(() => {
      var r3;
      if (!n2.trim()) return o2(false), m2([]), void (null !== e2.state.highlightedEventId && e2.highlightEvent(null));
      const a2 = null !== (r3 = null == t3 ? void 0 : t3.debounceDelay) && void 0 !== r3 ? r3 : 300, l4 = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
        var r4;
        u(true), o2(true);
        try {
          let a3 = [];
          if (null == t3 ? void 0 : t3.customSearch) {
            const r5 = e2.getEvents().map((t4) => {
              var n3;
              return Object.assign(Object.assign({}, t4), { color: (null === (n3 = e2.getCalendarRegistry().get(t4.calendarId || "")) || void 0 === n3 ? void 0 : n3.colors.lineColor) || e2.getCalendarRegistry().resolveColors().lineColor });
            });
            a3 = t3.customSearch({ keyword: n2, events: r5 });
          } else if (null == t3 ? void 0 : t3.onSearch) a3 = yield t3.onSearch(n2);
          else {
            const t4 = n2.toLowerCase();
            a3 = e2.getEvents().filter((e3) => e3.title.toLowerCase().includes(t4) || e3.description && e3.description.toLowerCase().includes(t4)).map((t5) => {
              var n3;
              return Object.assign(Object.assign({}, t5), { color: (null === (n3 = e2.getCalendarRegistry().get(t5.calendarId || "")) || void 0 === n3 ? void 0 : n3.colors.lineColor) || e2.getCalendarRegistry().resolveColors().lineColor });
            });
          }
          m2(a3), null === (r4 = null == t3 ? void 0 : t3.onSearchStateChange) || void 0 === r4 || r4.call(t3, { keyword: n2, loading: false, results: a3 });
        } catch (e3) {
          console.error("Search failed", e3), m2([]);
        } finally {
          u(false);
        }
      }), a2);
      return () => clearTimeout(l4);
    }, [n2, t3, e2]);
    const v = q((t4) => {
      let n3;
      n3 = t4.start instanceof Date ? t4.start : "string" == typeof t4.start ? new Date(t4.start) : U2(t4.start), e2.setCurrentDate(n3), e2.highlightEvent(t4.id), l3 && i2(false);
    }, [e2, l3]), f2 = q(() => {
      r2(""), i2(true);
    }, []), p2 = q(() => {
      o2(false), r2(""), e2.highlightEvent(null);
    }, [e2]), b2 = q(() => {
      i2(false), r2(""), e2.highlightEvent(null);
    }, [e2]);
    return { searchKeyword: n2, setSearchKeyword: r2, isSearchOpen: a, setIsSearchOpen: o2, isMobileSearchOpen: l3, setIsMobileSearchOpen: i2, searchLoading: d2, searchResults: h, handleSearchResultClick: v, handleSearchClick: f2, handleSearchClose: p2, handleMobileSearchClose: b2 };
  })(e, l2), x2 = n || (e.getUseEventDetailDialog() ? Fn : void 0), E = (function(e2, t3, n2) {
    const [r2, a] = d(null);
    y(() => {
      a(null);
    }, [e2]);
    const o2 = q(() => {
      a(null), e2.selectEvent(null);
    }, [e2]), l3 = q((t4) => e2.updateEvent(t4.id, t4), [e2]), i2 = q((t4) => {
      e2.deleteEvent(t4), a(null), e2.selectEvent(null);
    }, [e2]), d2 = T(() => {
      if (!t3 || !r2) return null;
      const n3 = r2.split("::")[0], a2 = e2.getEvents().find((e3) => e3.id === n3);
      return a2 ? { event: a2, isOpen: true, isAllDay: z(a2.start), onEventUpdate: l3, onEventDelete: i2, onClose: o2, app: e2 } : null;
    }, [n2, r2, t3, o2, l3, i2, e2]);
    return { detailPanelEventId: r2, setDetailPanelEventId: a, dialogProps: d2 };
  })(e, x2, p), C = Xr(e), k3 = (function(e2, t3, n2) {
    const [r2, a] = d(false), o2 = A(null), [l3, i2] = d(false), [c, u] = d(null), [h, m2] = d(false), v = q(() => {
      m2(true);
    }, []), f2 = q((l4) => {
      var s, d2;
      if (!e2.state.readOnly) {
        if (t3) {
          const t4 = /* @__PURE__ */ new Date();
          t4.setMinutes(0, 0, 0), t4.setHours(t4.getHours() + 1);
          const n3 = new Date(t4);
          n3.setHours(n3.getHours() + 1);
          const r3 = { id: Ze(), title: "", start: Z(t4), end: Z(n3), calendarId: (null === (s = e2.getCalendars().find((e3) => false !== e3.isVisible)) || void 0 === s ? void 0 : s.id) || (null === (d2 = e2.getCalendars()[0]) || void 0 === d2 ? void 0 : d2.id) };
          return u(r3), void i2(true);
        }
        n2 ? r2 ? a(false) : (o2.current = l4.currentTarget, a(true)) : v();
      }
    }, [t3, r2, e2, n2, v]);
    return { isQuickCreateOpen: r2, setIsQuickCreateOpen: a, quickCreateAnchorRef: o2, isMobileDrawerOpen: l3, setIsMobileDrawerOpen: i2, mobileDraftEvent: c, setMobileDraftEvent: u, handleAddButtonClick: f2, isCreateCalendarOpen: h, setIsCreateCalendarOpen: m2 };
  })(e, w, C.enabled), [T3, N2] = d(() => e.getTheme());
  y(() => e.subscribeThemeChange((e2) => N2(e2)), [e]);
  const S2 = q((t3) => e.setTheme(t3), [e]);
  y(() => {
    const t3 = e.callbacks, n2 = t3.onDismissUI;
    return t3.onDismissUI = () => {
      E.detailPanelEventId && E.setDetailPanelEventId(null), k3.isMobileDrawerOpen && k3.setIsMobileDrawerOpen(false), null == n2 || n2();
    }, () => {
      t3.onDismissUI = n2;
    };
  }, [e, E, k3]), y(() => {
    if (!w || !E.detailPanelEventId) return;
    const t3 = E.detailPanelEventId.split("::")[0], n2 = e.getEvents().find((e2) => e2.id === t3);
    n2 && (k3.setMobileDraftEvent(n2), k3.setIsMobileDrawerOpen(true)), E.setDetailPanelEventId(null);
  }, [E.detailPanelEventId, w]);
  const M3 = q((t3) => {
    e.setCurrentDate(t3), e.selectEvent(null);
  }, [e]), I2 = q((t3) => e.selectEvent(t3), [e]), H2 = A(null), R3 = { app: e, config: e.getCurrentView().config || {}, customDetailPanelContent: t2, customEventDetailDialog: x2, switcherMode: e.state.switcherMode, calendarRef: H2, meta: r, selectedEventId: b, onEventSelect: I2, onDateChange: M3, detailPanelEventId: E.detailPanelEventId, onDetailPanelToggle: E.setDetailPanelEventId }, O2 = T(() => ({ isCollapsed: C.isCollapsed, toggleCollapsed: C.toggleCollapsed }), [C.isCollapsed, C.toggleCollapsed]), P2 = null != m ? "0px" : C.miniWidth, L2 = null != m && C.isCollapsed ? m : C.safeAreaLeft, A3 = e.getCalendarHeaderConfig(), $3 = Object.assign({ calendar: e, switcherMode: e.state.switcherMode, onAddCalendar: k3.handleAddButtonClick, onSearchChange: D2.setSearchKeyword, onSearchClick: D2.handleSearchClick, searchValue: D2.searchKeyword, isSearchOpen: D2.isSearchOpen, isEditable: !e.state.readOnly }, L2 > 0 ? { safeAreaLeft: L2 } : {}), j3 = e.getCurrentView().component, Y2 = e.getCustomMobileEventRenderer() || Vr;
  return Ge(Fr, { initialTheme: T3, onThemeChange: S2, children: Ge(Jr, { locale: e.state.locale, messages: o, children: Ge("div", { className: "df-calendar-container relative flex flex-row overflow-hidden select-none", children: [Ge(Ir, { store: f, generatorName: "titleBarSlot", generatorArgs: O2, defaultContent: i && ("function" == typeof i ? i(O2) : i) }), C.enabled && Ge("aside", { className: "absolute top-0 bottom-0 left-0 z-0 h-full", style: { width: C.width }, children: C.content }), Ge("div", { className: "flex flex-col flex-1 h-full overflow-hidden relative z-10 bg-white dark:bg-gray-900 transition-all duration-250 ease-in-out border-l " + (C.isCollapsed ? "border-gray-200 dark:border-gray-700 shadow-xl" : "border-transparent"), style: { marginLeft: C.enabled ? C.isCollapsed ? P2 : C.width : 0 }, children: [false === A3 ? null : "function" == typeof A3 ? A3($3) : _(Hr, $3), Ge("div", { className: "flex-1 overflow-hidden relative", ref: H2, children: [Ge("div", { className: "calendar-renderer h-full relative flex flex-row", children: [Ge("div", { className: "flex-1 h-full overflow-hidden", children: Ge(j3, Object.assign({}, R3)) }), Ge(Pr, { isOpen: D2.isSearchOpen, onClose: D2.handleSearchClose, loading: D2.searchLoading, results: D2.searchResults, keyword: D2.searchKeyword, onResultClick: D2.handleSearchResultClick, emptyText: null == l2 ? void 0 : l2.emptyText })] }), Ge(Lr, { isOpen: D2.isMobileSearchOpen, onClose: D2.handleMobileSearchClose, keyword: D2.searchKeyword, onSearchChange: D2.setSearchKeyword, results: D2.searchResults, loading: D2.searchLoading, onResultClick: D2.handleSearchResultClick, emptyText: null == l2 ? void 0 : l2.emptyText })] })] }), Ge(Ar, { app: e, anchorRef: k3.quickCreateAnchorRef, isOpen: k3.isQuickCreateOpen, onClose: () => k3.setIsQuickCreateOpen(false) }), Ge(Y2, { isOpen: k3.isMobileDrawerOpen, onClose: () => {
    k3.setIsMobileDrawerOpen(false), k3.setMobileDraftEvent(null);
  }, onSave: (t3) => {
    e.getEvents().some((e2) => e2.id === t3.id) ? e.updateEvent(t3.id, t3) : e.addEvent(t3), k3.setIsMobileDrawerOpen(false), k3.setMobileDraftEvent(null);
  }, onEventDelete: (t3) => {
    e.deleteEvent(t3), k3.setIsMobileDrawerOpen(false), k3.setMobileDraftEvent(null);
  }, draftEvent: k3.mobileDraftEvent, app: e }), C.extraContent, k3.isCreateCalendarOpen && Ge(Zr, { onClose: () => k3.setIsCreateCalendarOpen(false), onCreate: (t3) => {
    e.createCalendar(t3), k3.setIsCreateCalendarOpen(false);
  } }), (() => {
    if (!E.dialogProps) return null;
    const e2 = x2, t3 = "undefined" != typeof document ? document.body : null;
    if (!t3) return null;
    const n2 = null == f ? void 0 : f.isOverridden("eventDetailDialog");
    return Ge(Ir, { store: f, generatorName: "eventDetailDialog", generatorArgs: E.dialogProps, defaultContent: n2 ? null : $(_(e2, E.dialogProps), t3) });
  })()] }) }) });
};
var ea = class {
  constructor(e, t2) {
    this.app = e, this.container = null, this.unsubscribe = null, this.renderRequested = false, this.extraProps = {}, this.customRenderingStore = new Be(t2), this.unsubscribe = e.subscribe(() => this.requestRender());
  }
  setProps(e) {
    We(this.extraProps, e) || (this.extraProps = e, this.requestRender());
  }
  requestRender() {
    this.renderRequested || (this.renderRequested = true, requestAnimationFrame(() => {
      this.render(), this.renderRequested = false;
    }));
  }
  mount(e) {
    this.container = e, this.requestRender();
  }
  unmount() {
    this.container && (J(null, this.container), this.container = null), this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null);
  }
  getCustomRenderingStore() {
    return this.customRenderingStore;
  }
  render() {
    this.container && J(_(Ve.Provider, { value: this.customRenderingStore }, _(Qr, Object.assign({ app: this.app }, this.extraProps))), this.container);
  }
};
var ta = ({ originalComponent: e, app: t2, config: n, customDetailPanelContent: r, customEventDetailDialog: a, calendarRef: o, switcherMode: l2, meta: i, selectedEventId: s, detailPanelEventId: d2, onEventSelect: c, onDateChange: u, onDetailPanelToggle: m }) => {
  const v = t2.getPlugin("events"), f = n.enableDrag ? t2.getPlugin("drag") : void 0, p = t2.getCurrentDate(), y2 = t2.state.currentView, w = t2.getEvents(), D2 = q((e2) => {
    v ? v.update(e2.id, e2) : t2.updateEvent(e2.id, e2);
  }, [v, t2]), x2 = q((e2) => {
    v ? v.delete(e2) : t2.deleteEvent(e2);
  }, [v, t2]), E = q((e2) => {
    v ? v.add(e2) : t2.addEvent(e2);
  }, [v, t2]), C = q((e2) => {
    u ? u(e2) : t2.setCurrentDate(e2);
  }, [t2, u]), T3 = q((e2) => {
    t2.changeView(e2);
  }, [t2]), N2 = T(() => {
    const { dragConfig: e2, eventsConfig: t3, virtualScrollConfig: r2 } = n, a2 = __rest(n, ["dragConfig", "eventsConfig", "virtualScrollConfig"]), o2 = Object.assign({}, a2);
    return f && Object.assign(o2, e2 || {}), v && Object.assign(o2, t3 || {}), o2;
  }, [n, f, v]), S2 = T(() => ({ app: t2, currentDate: p, currentView: y2, events: w, onEventUpdate: D2, onEventDelete: x2, onEventCreate: E, onDateChange: C, onViewChange: T3, config: N2, customDetailPanelContent: r, customEventDetailDialog: a, calendarRef: o, switcherMode: l2, meta: i, selectedEventId: s, detailPanelEventId: d2, onEventSelect: c, onDetailPanelToggle: m }), [t2, p, y2, w, D2, x2, E, C, T3, N2, r, a, o, l2, i, s, d2, c, m]), M3 = T(() => {
    const e2 = { currentDate: p, events: w, setEvents: (e3) => {
      w.forEach((e4) => x2(e4.id)), e3.forEach((e4) => E(e4));
    }, updateEvent: D2, deleteEvent: x2, addEvent: E, goToPrevious: () => {
      const e3 = new Date(p);
      switch (y2) {
        case k2.DAY:
          e3.setDate(e3.getDate() - 1);
          break;
        case k2.WEEK:
          e3.setDate(e3.getDate() - 7);
          break;
        case k2.MONTH:
          e3.setMonth(e3.getMonth() - 1);
      }
      C(e3);
    }, goToNext: () => {
      const e3 = new Date(p);
      switch (y2) {
        case k2.DAY:
          e3.setDate(e3.getDate() + 1);
          break;
        case k2.WEEK:
          e3.setDate(e3.getDate() + 7);
          break;
        case k2.MONTH:
          e3.setMonth(e3.getMonth() + 1);
      }
      C(e3);
    }, goToToday: () => {
      C(/* @__PURE__ */ new Date());
    }, changeView: T3, selectDate: C };
    return Object.assign(Object.assign({ calendar: e2 }, S2), { eventsService: v, dragService: f });
  }, [p, w, y2, D2, x2, E, C, T3, S2, v, f]);
  return Ge(e, Object.assign({}, M3));
};
var na = { PARALLEL_THRESHOLD: 0.25, NESTED_THRESHOLD: 0.5, INDENT_STEP_PERCENT: 2.5, MIN_WIDTH: 25, MARGIN_BETWEEN: 1, EDGE_MARGIN_PERCENT: 0.9 };
function ra(e) {
  return Object.assign(Object.assign({}, e), { parentId: void 0, children: [], _startHour: e.allDay ? 0 : ne(e.start), _endHour: e.allDay ? 0 : fe(e) });
}
function aa(e) {
  var t2;
  return null !== (t2 = e._startHour) && void 0 !== t2 ? t2 : ne(e.start);
}
function oa(e) {
  var t2;
  return null !== (t2 = e._endHour) && void 0 !== t2 ? t2 : fe(e);
}
function la(e, t2) {
  return e.day === t2.day && !e.allDay && !t2.allDay && (aa(e) < oa(t2) && aa(t2) < oa(e));
}
function ia(e, t2) {
  const n = oa(e) - aa(e);
  if (n < 1.25) return false;
  const r = aa(e) + 0.4 * n, a = aa(t2) >= r, o = la(e, t2);
  return a && o;
}
function sa(e, t2, n = na) {
  if (!la(e, t2)) return false;
  const r = Math.abs(aa(e) - aa(t2));
  return r <= n.PARALLEL_THRESHOLD || (r > n.PARALLEL_THRESHOLD && r < n.NESTED_THRESHOLD || (function(e2, t3) {
    return !(!la(e2, t3) || !ia(e2, t3) && !ia(t3, e2));
  })(e, t2));
}
function da(e, t2) {
  const n = aa(e) <= aa(t2) && oa(e) >= oa(t2), r = aa(e) <= aa(t2) && aa(t2) < oa(e) && la(e, t2);
  return n || r;
}
function ca(e) {
  const t2 = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (n.has(r.id)) continue;
    const a = [r];
    n.add(r.id);
    for (const t3 of e) {
      if (n.has(t3.id)) continue;
      Math.abs(aa(r) - aa(t3)) <= na.PARALLEL_THRESHOLD && (a.push(t3), n.add(t3.id));
    }
    a.sort((e2, t3) => aa(e2) - aa(t3));
    const o = { events: a, startHour: Math.min(...a.map((e2) => aa(e2))), endHour: Math.max(...a.map((e2) => oa(e2))) };
    t2.push(o);
  }
  return t2.sort((e2, t3) => e2.startHour - t3.startHour), t2;
}
function ua(e, t2) {
  var n, r;
  const a = null === (r = null === (n = e[0]) || void 0 === n ? void 0 : n.parent) || void 0 === r ? void 0 : r.depth;
  return void 0 === a ? [] : t2.filter((e2) => e2.depth === a).map((e2) => ({ node: e2, load: ha(e2) })).sort((e2, t3) => t3.load - e2.load);
}
function ha(e) {
  let t2 = 0;
  for (const n of e.children) t2 += 1 + ha(n);
  return t2;
}
function ga(e) {
  return !(e.length < 2) && e[0].load - e[e.length - 1].load >= 2;
}
function ma(e) {
  let t2 = 0;
  for (; t2 < 5; ) {
    e.sort((e2, t3) => t3.load - e2.load);
    const n = e[0], r = e[e.length - 1];
    if (n.load - r.load < 2) break;
    const a = va(n.node, r.node);
    if (!a) break;
    pa(a, r.node), n.load--, r.load++, t2++;
  }
}
function va(e, t2) {
  const n = [];
  return fa(e, n), n.find((e2) => da(t2.event, e2.event)) || n[0] || null;
}
function fa(e, t2) {
  0 === e.children.length ? t2.push(e) : e.children.forEach((e2) => fa(e2, t2));
}
function pa(e, t2) {
  e.parent && (e.parent.children = e.parent.children.filter((t3) => t3 !== e));
  const n = t2.children.find((t3) => da(t3.event, e.event));
  n ? (e.parent = n, e.depth = n.depth + 1, n.children.push(e), ya(n.event, e.event)) : (e.parent = t2, e.depth = t2.depth + 1, t2.children.push(e), ya(t2.event, e.event));
}
function ya(e, t2) {
  t2.parentId = e.id, e.children.includes(t2.id) || e.children.push(t2.id);
}
function ba(e, t2) {
  const n = [], r = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  t2.forEach((e2) => a.set(e2.id, e2));
  for (const t3 of e) for (const e2 of t3.events) {
    const t4 = { event: a.get(e2.id), children: [], parent: null, depth: 0, isProcessed: false };
    n.push(t4), r.set(e2.id, t4);
  }
  for (let n2 = 0; n2 < e.length; n2++) {
    const o2 = e[n2], l2 = o2.events.map((e2) => a.get(e2.id));
    let i = false;
    for (let s = n2 - 1; s >= 0 && !i; s--) {
      const n3 = e[s], d2 = { events: n3.events.map((e2) => a.get(e2.id)), startHour: n3.startHour, endHour: n3.endHour };
      if (wa(d2, { events: l2, startHour: o2.startHour, endHour: o2.endHour })) {
        const e2 = Da(l2, d2, t2);
        for (const t3 of e2) {
          const e3 = r.get(t3.child.id), n4 = r.get(t3.parent.id);
          e3.parent = n4, e3.depth = n4.depth + 1, n4.children.push(e3);
        }
        i = true;
      }
    }
  }
  const o = n.filter((e2) => null === e2.parent);
  return o.forEach((e2) => {
    e2.depth = 0;
  }), (function(e2, t3) {
    for (let n2 = e2.length - 1; n2 >= 1; n2--) {
      const r2 = ua(e2[n2].events.map((e3) => t3.find((t4) => t4.event.id === e3.id)), t3);
      ga(r2) && ma(r2);
    }
  })(e, n), o;
}
function wa(e, t2) {
  const n = t2.startHour - e.startHour;
  if ((function(e2, t3) {
    for (const n2 of e2.events) for (const e3 of t3.events) {
      if (!la(n2, e3)) continue;
      if (Math.abs(aa(e3) - aa(n2)) < na.NESTED_THRESHOLD) return true;
    }
    return false;
  })(e, t2)) return false;
  if (n < na.NESTED_THRESHOLD) return false;
  for (const n2 of e.events) for (const e2 of t2.events) if (da(n2, e2)) return true;
  return false;
}
function Da(e, t2, n) {
  const r = [], a = (e2, t3) => {
    t3.parentId = e2.id, e2.children.includes(t3.id) || e2.children.push(t3.id);
  };
  if (1 === e.length) {
    const o2 = Ea(e[0], t2, n);
    return o2 && (r.push({ child: e[0], parent: o2 }), a(o2, e[0])), r;
  }
  const o = t2.events.filter((t3) => e.every((e2) => da(t3, e2)));
  if (0 === o.length) {
    for (const o2 of e) {
      const e2 = Ea(o2, t2, n);
      e2 && (r.push({ child: o2, parent: e2 }), a(e2, o2));
    }
    return r;
  }
  const l2 = [...e].sort((e2, t3) => oa(t3) - aa(t3) - (oa(e2) - aa(e2)));
  if (l2.length % o.length === 0) {
    const e2 = l2.length / o.length;
    for (let t3 = 0; t3 < o.length; t3++) {
      const n2 = o[t3], i = l2.slice(t3 * e2, (t3 + 1) * e2);
      for (const e3 of i) r.push({ child: e3, parent: n2 }), a(n2, e3);
    }
  } else for (const e2 of l2) {
    const t3 = xa(e2, o, l2);
    t3 && (r.push({ child: e2, parent: t3 }), a(t3, e2));
  }
  return r;
}
function xa(e, t2, n) {
  if (0 === t2.length) return null;
  let r = 1 / 0, a = [];
  for (const e2 of t2) {
    const t3 = e2.children.length;
    t3 < r ? (r = t3, a = [e2]) : t3 === r && a.push(e2);
  }
  const o = oa(e) - aa(e), l2 = a.map((e2) => e2.children).flat();
  return o > Math.max(...l2.map((e2) => {
    const t3 = n.find((t4) => t4.id === e2);
    return t3 ? oa(t3) - aa(t3) : 0;
  }), 0) ? a[0] : a[a.length - 1];
}
function Ea(e, t2, n) {
  const r = t2.events.filter((t3) => da(t3, e));
  if (0 === r.length) return null;
  if (1 === r.length) return r[0];
  const a = r.map((t3) => ({ parent: t3, load: t3.children.length, hasParallelSibling: t3.children.some((t4) => {
    const r2 = n.find((e2) => e2.id === t4);
    return r2 && sa(e, r2, na);
  }) }));
  return a.sort((t3, n2) => t3.load !== n2.load ? t3.load - n2.load : t3.hasParallelSibling !== n2.hasParallelSibling ? t3.hasParallelSibling ? -1 : 1 : Math.abs(aa(e) - aa(t3.parent)) - Math.abs(aa(e) - aa(n2.parent))), a[0].parent;
}
function Ca(e, t2, n = {}) {
  const r = 100 - ("day" === n.viewType ? 0 : na.EDGE_MARGIN_PERCENT);
  if (1 === e.length) Ta(e[0], 0, r, t2, n);
  else if (e.length > 1) {
    const a = e.length, o = (r - na.MARGIN_BETWEEN * (a - 1)) / a;
    e.forEach((e2, r2) => {
      Ta(e2, r2 * (o + na.MARGIN_BETWEEN), Math.max(o, na.MIN_WIDTH), t2, n);
    });
  }
}
function ka(e) {
  return "day" === e ? 0.5 : 2.5;
}
function Ta(e, t2, n, r, a = {}) {
  const o = ka(a.viewType);
  let l2 = e.depth * o;
  if (e.isProcessed) {
    const t3 = (function(e2, t4) {
      let n2 = e2;
      for (; n2.parent && n2.parent.depth > 0; ) n2 = n2.parent;
      return 1 === n2.depth ? n2.depth * ka(t4) : null;
    })(e, a.viewType);
    null !== t3 && (l2 = t3);
  }
  const i = "day" === a.viewType;
  let s = 0;
  1 === e.depth ? s = i ? 0.5 : 1.5 : 2 === e.depth ? s = i ? -0.01 : -1 : e.depth >= 3 && (s = i ? 0.55 : -3.5);
  const d2 = t2 + l2 + s;
  let c = n - (l2 + s);
  if (d2 + c > t2 + n && (c = t2 + n - d2), r.set(e.event.id, { id: e.event.id, left: d2, width: c, zIndex: e.depth, level: e.depth, isPrimary: 0 === e.depth, indentOffset: l2 * (a.containerWidth || 320) / 100, importance: Ma(e.event) }), 0 === e.children.length) return;
  const u = [...e.children].sort((e2, t3) => oa(t3.event) - aa(t3.event) - (oa(e2.event) - aa(e2.event)));
  1 === u.length ? Ta(u[0], d2, c, r, a) : Sa(u.map((e2) => e2.event)) ? Na(u, d2, c, r, a) : u.forEach((e2) => Ta(e2, d2, c, r, a));
}
function Na(e, t2, n, r, a = {}) {
  const o = e.length, l2 = e[0].depth, i = l2 * ka(a.viewType), s = "day" === a.viewType;
  let d2 = 1 === l2 ? s ? 0.5 : 1.5 : 2 === l2 ? s ? -0.01 : -1 : s ? 0.55 : -3.5;
  const c = t2 + i + d2, u = n - (i + d2);
  if (u <= 0) return void e.forEach((e2) => Ta(e2, t2, n, r, a));
  let h = na.MARGIN_BETWEEN * (1 === l2 ? s ? 0.15 : 0.3 : s ? 0.1 : 0.2);
  const g = (u - h * (o - 1)) / o;
  e.forEach((e2, t3) => {
    const n2 = c + t3 * (g + h);
    if (r.set(e2.event.id, { id: e2.event.id, left: n2, width: g, zIndex: e2.depth, level: e2.depth, isPrimary: 0 === e2.depth, indentOffset: i * (a.containerWidth || 320) / 100, importance: Ma(e2.event) }), e2.children.length > 0) {
      const t4 = [...e2.children].sort((e3, t5) => oa(t5.event) - aa(t5.event) - (oa(e3.event) - aa(e3.event)));
      1 === t4.length ? Ta(t4[0], n2, g, r, a) : Sa(t4.map((e3) => e3.event)) ? Na(t4, n2, g, r, a) : t4.forEach((e3) => Ta(e3, n2, g, r, a));
    }
  });
}
function Sa(e) {
  if (e.length < 2) return false;
  for (let t2 = 0; t2 < e.length; t2++) for (let n = t2 + 1; n < e.length; n++) if (sa(e[t2], e[n], na)) return true;
  return false;
}
function Ma(e) {
  const t2 = oa(e) - aa(e);
  return Math.max(0.1, Math.min(1, t2 / 4));
}
var Ia = class {
  static calculateDayEventLayouts(e, t2 = {}) {
    const n = e.map(ra);
    for (const e2 of n) e2.parentId = void 0, e2.children = [];
    const r = /* @__PURE__ */ new Map(), a = n.filter((e2) => !e2.allDay);
    if (0 === a.length) return r;
    const o = (function(e2) {
      const t3 = [], n2 = /* @__PURE__ */ new Set();
      for (const r2 of e2) {
        if (n2.has(r2.id)) continue;
        const a2 = [r2], o2 = [r2];
        for (n2.add(r2.id); o2.length > 0; ) {
          const t4 = o2.shift();
          for (const r3 of e2) n2.has(r3.id) || la(t4, r3) && (a2.push(r3), o2.push(r3), n2.add(r3.id));
        }
        t3.push(a2);
      }
      return t3;
    })(a);
    for (const e2 of o) if (1 === e2.length) {
      const n2 = "day" === t2.viewType ? 0 : na.EDGE_MARGIN_PERCENT;
      r.set(e2[0].id, { id: e2[0].id, left: 0, width: 100 - n2, zIndex: 0, level: 0, isPrimary: true, indentOffset: 0, importance: Math.max(0.1, Math.min(1, (e2[0]._endHour - e2[0]._startHour) / 4)) });
    } else {
      Ca(ba(ca([...e2].sort((e3, t3) => e3._startHour !== t3._startHour ? e3._startHour - t3._startHour : t3._endHour - t3._startHour - (e3._endHour - e3._startHour))), e2), r, t2);
    }
    return r;
  }
};
var Ha = null;
function Ra(e) {
  Ha = e;
}
var Oa = { handleMoveStart: () => {
}, handleCreateStart: () => {
}, handleResizeStart: void 0, handleCreateAllDayEvent: () => {
}, dragState: { active: false, mode: null, eventId: null, targetDate: null, startDate: null, endDate: null }, isDragging: false };
function Pa(e, t2) {
  return Ha ? Ha(e, t2) : Oa;
}
var La = { HOUR_HEIGHT: 72, FIRST_HOUR: 0, LAST_HOUR: 24, ALL_DAY_HEIGHT: 28 };
function Aa(t2) {
  const { app: n, onEventCreated: r } = t2, { t: a } = In(), o = q((e) => {
    e.dataTransfer.types.includes("application/x-dayflow-calendar") && (e.preventDefault(), e.dataTransfer.dropEffect = "copy");
  }, []);
  return { handleDrop: q((t3, o2, l2, i) => {
    t3.preventDefault();
    const s = t3.dataTransfer.getData("application/x-dayflow-calendar");
    if (!s) return null;
    try {
      const t4 = JSON.parse(s);
      let d2, c, u = false;
      i ? (d2 = Xn.PlainDateTime.from({ year: o2.getFullYear(), month: o2.getMonth() + 1, day: o2.getDate(), hour: 0, minute: 0 }), c = Xn.PlainDateTime.from({ year: o2.getFullYear(), month: o2.getMonth() + 1, day: o2.getDate(), hour: 23, minute: 59, second: 59 }), u = true) : void 0 !== l2 ? (d2 = Xn.PlainDateTime.from({ year: o2.getFullYear(), month: o2.getMonth() + 1, day: o2.getDate(), hour: l2, minute: 0 }), c = d2.add({ hours: 1 })) : (d2 = Xn.PlainDateTime.from({ year: o2.getFullYear(), month: o2.getMonth() + 1, day: o2.getDate(), hour: 9, minute: 0 }), c = d2.add({ hours: 1 }));
      const h = { id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, title: a(u ? "newAllDayCalendarEvent" : "newCalendarEvent", { calendarName: t4.calendarName }), description: "", start: d2, end: c, calendarId: t4.calendarId, allDay: u };
      return n.addEvent(h), null == r || r(h), h;
    } catch (e) {
      return console.error("Error creating event from calendar drop:", e), null;
    }
  }, [n, r]), handleDragOver: o };
}
var $a = ({ handlePreviousMonth: e, handleToday: t2, handleNextMonth: n }) => {
  const { t: r } = In();
  return Ge("div", { className: "df-navigation flex items-center gap-1", children: [Ge("button", { className: At, onClick: e, "aria-label": "Previous month", children: Ge(Ke, { className: $t }) }), Ge("button", { className: "df-today-button calendar-today-button inline-flex items-center justify-center px-4 h-7 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 active:bg-gray-100 dark:active:bg-gray-600 transition-all duration-150 shadow-sm hover:shadow focus:outline-none", onClick: t2, children: r("today") }), Ge("button", { className: At, onClick: n, "aria-label": "Next month", children: Ge(Xe, { className: $t }) })] });
};
var ja = ({ app: e, currentDate: t2, visibleMonth: n, currentDayEvents: r, selectedEvent: a, setSelectedEvent: o, handleMonthChange: l2, handleDateSelect: i, switcherMode: s }) => {
  const { t: d2, locale: c } = In(), u = [...r].sort((e2, t3) => e2.allDay && !t3.allDay ? -1 : !e2.allDay && t3.allDay ? 1 : 0);
  return Ge("div", { className: "df-right-panel hidden md:block flex-none  w-[30%] bg-white dark:bg-gray-900", onContextMenu: (e2) => e2.preventDefault(), children: Ge("div", { className: `${Xt} h-full`, children: [Ge("div", { className: "df-mini-calendar px-2 border-b border-gray-200 dark:border-gray-700", children: Ge("div", { children: [Ge("div", { className: "flex items-center justify-end gap-2", children: [Ge("div", { className: pt, style: { position: "relative" }, children: Ge("div", { children: Ge("h1", { className: yt, children: " " }) }) }), Ge($a, { handlePreviousMonth: () => e.goToPrevious(), handleNextMonth: () => e.goToNext(), handleToday: () => e.goToToday() })] }), Ge(Wr, { visibleMonth: n, currentDate: t2, showHeader: true, onMonthChange: l2, onDateSelect: i })] }) }), Ge("div", { className: "flex-1 overflow-y-auto", children: Ge("div", { className: "p-4", children: [Ge("h3", { className: "text-lg font-semibold mb-3 sticky top-0 bg-white dark:bg-gray-900 z-10 py-2", children: t2.toLocaleDateString(c, { weekday: "long", month: "long", day: "numeric" }) }), 0 === u.length ? Ge("p", { className: `${Vt} ${Kt}`, children: d2("noEvents") }) : Ge("div", { className: "space-y-2", children: u.map((t3) => Ge("div", { className: `
                      p-2 rounded border-l-4 cursor-pointer transition-colors
                      ${(null == a ? void 0 : a.id) === t3.id ? "bg-primary/10 border-primary" : "bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600"}
                      hover:bg-gray-100 dark:hover:bg-gray-700
                    `, style: { borderLeftColor: ue(t3.calendarId || "blue") }, onClick: () => {
    o(t3), e.onEventClick(t3);
  }, children: [Ge("div", { className: `font-medium ${Kt}`, children: t3.title }), !t3.allDay && Ge("div", { className: `${Gt} ${qt}`, children: [ge(ne(t3.start)), " -", " ", ge(fe(t3))] }), t3.allDay && Ge("div", { className: `${Gt} ${qt}`, children: d2("allDay") })] }, t3.id)) })] }) })] }) });
};
var Ya = ({ viewType: e, currentDate: t2, onPrevious: n, onNext: r, onToday: a, customTitle: o, customSubtitle: l2, showTodayBox: i, stickyYear: s, stickyYearOffset: d2 = 0, nextYear: c, nextYearOffset: u = 0 }) => {
  const { locale: h } = In(), g = void 0 === i || i, m = o || (() => {
    switch (e) {
      case "day":
        return t2.toLocaleDateString(h, { day: "numeric", month: "long", year: "numeric" });
      case "week":
      case "month":
        return t2.toLocaleDateString(h, { month: "long", year: "numeric" });
      case "year":
        return t2.getFullYear().toString();
      default:
        return "";
    }
  })(), v = "day" === e ? l2 || ("day" === e ? t2.toLocaleDateString(h, { weekday: "long" }) : null) : null;
  return Ge("div", { className: pt, style: { position: "relative" }, onContextMenu: (e2) => e2.preventDefault(), children: [Ge("div", { className: "flex-1", children: Ge("div", "year" === e && s ? { style: { position: "relative", overflow: "hidden", height: "1.5em" }, children: [Ge("h1", { className: yt, style: { position: "absolute", top: 0, left: 0, transform: `translateY(-${d2}px)`, willChange: "transform" }, children: s }), c && Ge("h1", { className: yt, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${u}px)`, willChange: "transform" }, children: c })] } : { children: [Ge("div", { className: `${yt} text-gray-900 dark:text-white`, children: m }), v && Ge("div", { className: "mt-3 text-gray-600 dark:text-gray-400", children: v })] }) }), g && n && r && a && Ge("div", { className: "flex items-center gap-2", children: Ge($a, { handlePreviousMonth: n, handleNextMonth: r, handleToday: a }) })] });
};
var Fa = (e) => {
  if (false === e.icon) return null;
  if (void 0 !== e.icon && "boolean" != typeof e.icon) return e.icon;
  const t2 = e.title.toLowerCase();
  return t2.includes("holiday") || t2.includes("vacation") || t2.includes("假期") ? Ge(dt, { className: "h-3 w-3" }) : t2.includes("birthday") || t2.includes("anniversary") || t2.includes("生日") ? Ge(ct, { className: "h-3 w-3" }) : t2.includes("conference") || t2.includes("meeting") || t2.includes("会议") || t2.includes("研讨") ? Ge(ht, { className: "h-3 w-3" }) : t2.includes("trip") || t2.includes("travel") || t2.includes("旅行") ? Ge(ut, { className: "h-3 w-3" }) : Ge(lt, { className: "h-3 w-3" });
};
var za = (e, t2) => {
  const n = [], r = new Date(t2);
  return r.setDate(t2.getDate() + 6), r.setHours(23, 59, 59, 999), e.forEach((e2) => {
    const a = U2(e2.start), o = U2(e2.end), l2 = new Date(a);
    l2.setHours(0, 0, 0, 0);
    const i = new Date(o);
    i.setHours(0, 0, 0, 0);
    let s = new Date(i);
    if (!e2.allDay) {
      if (!(0 !== o.getHours() || 0 !== o.getMinutes() || 0 !== o.getSeconds())) {
        const e3 = o.getTime() - a.getTime();
        e3 > 0 && e3 < 864e5 && (s = new Date(i), s.setDate(s.getDate() - 1));
      }
    }
    const d2 = J2(l2, s) > 0;
    if (!d2 && e2.allDay) {
      if (l2 < t2 || l2 > r) return;
      const a2 = Math.floor((l2.getTime() - t2.getTime()) / 864e5);
      return void (a2 >= 0 && a2 <= 6 && n.push({ id: `${e2.id}-week-${t2.getTime()}`, originalEventId: e2.id, event: e2, startDayIndex: a2, endDayIndex: a2, segmentType: "single", totalDays: 1, segmentIndex: 0, isFirstSegment: true, isLastSegment: true }));
    }
    if (!d2) return;
    const c = l2;
    let u;
    if (e2.allDay) u = new Date(i), u.setHours(23, 59, 59, 999);
    else {
      0 !== o.getHours() || 0 !== o.getMinutes() || 0 !== o.getSeconds() ? (u = new Date(i), u.setHours(23, 59, 59, 999)) : (u = new Date(i), u.setTime(u.getTime() - 1));
    }
    if (u < t2 || c > r) return;
    const h = c < t2 ? t2 : c, g = u > r ? r : u, m = Math.max(0, Math.floor((h.getTime() - t2.getTime()) / 864e5)), v = Math.min(6, Math.floor((g.getTime() - t2.getTime()) / 864e5)), f = c >= t2, p = u <= r, y2 = 0 === m || 6 === v;
    let b;
    b = f && p ? "single" : f ? y2 && 6 === v ? "start-week-end" : "start" : p ? y2 && 0 === m ? "end-week-start" : "end" : "middle";
    const w = J2(c, u) + 1;
    n.push({ id: `${e2.id}-week-${t2.getTime()}`, originalEventId: e2.id, event: e2, startDayIndex: m, endDayIndex: v, segmentType: b, totalDays: w, segmentIndex: 0, isFirstSegment: f, isLastSegment: p });
  }), n;
};
var _a = (e, t2) => {
  if (e.allDay) return [];
  const n = U2(e.start), r = U2(e.end), a = new Date(n);
  a.setHours(0, 0, 0, 0);
  const o = new Date(r);
  o.setHours(0, 0, 0, 0);
  const l2 = J2(a, o);
  if (0 === l2) return [];
  const i = 0 !== r.getHours() || 0 !== r.getMinutes() || 0 !== r.getSeconds() || 0 !== r.getMilliseconds(), s = r.getTime() - n.getTime();
  if (!e.allDay && 1 === l2 && !i && s < 864e5) return [];
  const d2 = i ? l2 : Math.max(0, l2 - 1), c = [];
  for (let e2 = 0; e2 <= d2; e2++) {
    const o2 = new Date(a);
    o2.setDate(a.getDate() + e2);
    const l3 = Math.floor((o2.getTime() - t2.getTime()) / 864e5);
    if (l3 < 0 || l3 > 6) continue;
    const s2 = 0 === e2, u = e2 === d2, h = s2 ? n.getHours() + n.getMinutes() / 60 : 0, g = u && i ? r.getHours() + r.getMinutes() / 60 : 24;
    c.push({ dayIndex: l3, startHour: h, endHour: g, isFirst: s2, isLast: u });
  }
  return c;
};
var Za = M(({ segment: e, segmentIndex: t2, isDragging: n, isResizing: a = false, isSelected: o = false, onMoveStart: l2, onResizeStart: i, onEventLongPress: c, isMobile: u = false, isDraggable: h = true, isEditable: g = true, viewable: m = true, isPopping: v }) => {
  const [f, p] = d(false), y2 = 17 * t2, b = `calc(${e.startDayIndex / 7 * 100}% + 2px)`, w = `calc(${(e.endDayIndex - e.startDayIndex + 1) / 7 * 100}% - 4px)`, D2 = A(null), x2 = A(null), E = (t3) => {
    const n2 = "left" === t3;
    return (n2 ? e.isFirstSegment : e.isLastSegment) && i && g ? Ge("div", { className: `resize-handle absolute ${n2 ? "left-0" : "right-0"} top-0 bottom-0 w-1 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity z-20`, onMouseDown: (t4) => {
      t4.preventDefault(), t4.stopPropagation(), i(t4, e.event, n2 ? "left" : "right");
    }, onClick: (e2) => {
      e2.preventDefault(), e2.stopPropagation();
    } }) : null;
  }, C = e.event.calendarId || "blue", k3 = e.endDayIndex - e.startDayIndex + 1;
  return Ge("div", { className: "absolute px-1 text-xs select-none flex items-center transition-all duration-200 hover:shadow-sm dark:hover:shadow-lg dark:hover:shadow-black/20 group", style: Object.assign(Object.assign({ left: b, width: w, top: `${y2}px`, height: "16px", borderRadius: (T3 = e.segmentType, { single: "0.25rem", start: "0.25rem 0 0 0.25rem", "start-week-end": "0.25rem 0 0 0.25rem", end: "0 0.25rem 0.25rem 0", "end-week-start": "0 0.25rem 0.25rem 0", middle: "0" }[T3]), pointerEvents: "auto", zIndex: 10, transform: v ? "scale(1.02)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", willChange: "transform" }, o || n || f ? { backgroundColor: ce(C), color: "#fff" } : { backgroundColor: se(C), color: de(C) }), { cursor: h || m ? "pointer" : "default" }), "data-segment-days": k3, onMouseDown: (t3) => {
    if (!h && !m) return;
    t3.preventDefault(), t3.stopPropagation(), p(true);
    !t3.target.closest(".resize-handle") && h && l2(t3, e.event);
  }, onMouseUp: () => {
    p(false);
  }, onMouseLeave: () => {
    p(false);
  }, onTouchStart: (t3) => {
    if (!l2 || !u || !h && !m) return;
    t3.stopPropagation(), p(true);
    const n2 = t3.touches[0], r = n2.clientX, a2 = n2.clientY, o2 = t3.currentTarget;
    x2.current = { x: r, y: a2 }, D2.current = setTimeout(() => {
      c && c(e.event.id);
      h && l2({ preventDefault: () => {
      }, stopPropagation: () => {
      }, currentTarget: o2, touches: [{ clientX: r, clientY: a2 }], cancelable: false }, e.event), D2.current = null, navigator.vibrate && navigator.vibrate(50);
    }, 500);
  }, onTouchMove: (e2) => {
    if (D2.current && x2.current) {
      const t3 = Math.abs(e2.touches[0].clientX - x2.current.x), n2 = Math.abs(e2.touches[0].clientY - x2.current.y);
      (t3 > 10 || n2 > 10) && (clearTimeout(D2.current), D2.current = null, x2.current = null, p(false));
    }
  }, onTouchEnd: () => {
    p(false), D2.current && (clearTimeout(D2.current), D2.current = null), x2.current = null;
  }, title: `${e.event.title} (${_n(e.event.start)} - ${_n(e.event.end)})`, children: [u && o && g && Ge(k, { children: [e.isFirstSegment && Ge("div", { className: "absolute left-5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 rounded-full z-50 pointer-events-none", style: { borderColor: ue(C) } }), e.isLastSegment && Ge("div", { className: "absolute right-5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-2 rounded-full z-50 pointer-events-none", style: { borderColor: ue(C) } })] }), E("left"), Ge("div", { className: "flex-1 min-w-0", style: { cursor: a ? "ew-resize" : "pointer" }, children: (() => {
    const t3 = e.event.allDay, n2 = e.event.calendarId || "blue", r = ne(e.event.start), a2 = fe(e.event), o2 = ge(r), l3 = ge(a2);
    if (t3) {
      const t4 = () => e.isFirstSegment ? e.event.title : "middle" === e.segmentType || e.isLastSegment && e.totalDays > 1 ? "···" : e.event.title;
      return Ge("div", { className: "flex items-center min-w-0 w-full pointer-events-auto", children: [e.isFirstSegment && Fa(e.event) && Ge("div", { className: "shrink-0 mr-1", children: Ge("div", { className: "rounded-full p-0.5 text-white flex items-center justify-center", style: { backgroundColor: ue(n2), width: "12px", height: "12px" }, children: Fa(e.event) }) }), Ge("div", { className: "flex-1 min-w-0", children: Ge("div", { className: "truncate text-xs", children: t4() }) }), e.isLastSegment && "single" !== e.segmentType && Ge("div", { className: "shrink-0 ml-1 text-white/80 dark:text-white/90", children: Ge("div", { className: "w-1.5 h-1.5 rounded-full bg-white/60 dark:bg-white/80" }) })] });
    }
    const i2 = e.isFirstSegment || e.isLastSegment ? e.event.title : "···", s = e.endDayIndex - e.startDayIndex + 1, d2 = s > 1 ? { position: "absolute", right: `calc(${s > 1 ? (s - 1) / s * 100 : 0}% + 2px)`, top: "50%", transform: "translateY(-50%)" } : void 0;
    return Ge("div", { className: "relative flex items-center min-w-0 w-full pointer-events-auto", children: [Ge("div", { className: Rt, style: { backgroundColor: ue(n2) } }), Ge("div", { className: "flex items-center min-w-0 flex-1", children: Ge("span", { className: `whitespace-nowrap overflow-hidden block ${u ? "mobile-mask-fade" : "truncate"} font-medium text-xs`, children: i2 }) }), e.isFirstSegment && !u && Ge("span", { className: "text-xs font-medium whitespace-nowrap " + (1 === s ? "ml-2" : ""), style: d2, children: o2 }), e.isLastSegment && !e.event.allDay && 24 !== a2 && !u && Ge("span", { className: "text-xs font-medium whitespace-nowrap ml-auto", children: `ends ${l3}` })] });
  })() }), E("right")] });
  var T3;
});
Za.displayName = "MultiDayEvent";
var Wa = ({ event: t2, position: n, panelRef: r, isAllDay: a, eventVisibility: o, calendarRef: l2, selectedEventElementRef: i, onEventUpdate: d2, onEventDelete: u, app: g }) => {
  var m;
  const { effectiveTheme: f } = zr(), p = Xn2(f), { t: y2 } = In(), [b, w] = d(t2.title), [D2, x2] = d(null !== (m = t2.description) && void 0 !== m ? m : "");
  y(() => {
    w(t2.title);
  }, [t2.title]), y(() => {
    var e;
    x2(null !== (e = t2.description) && void 0 !== e ? e : "");
  }, [t2.description]), y(() => {
    const e = setTimeout(() => {
      b !== t2.title && d2(Object.assign(Object.assign({}, t2), { title: b }));
    }, 500);
    return () => clearTimeout(e);
  }, [b, t2]), y(() => {
    const e = setTimeout(() => {
      var e2;
      const n2 = null !== (e2 = t2.description) && void 0 !== e2 ? e2 : "";
      D2 !== n2 && d2(Object.assign(Object.assign({}, t2), { description: D2 }));
    }, 500);
    return () => clearTimeout(e);
  }, [D2, t2]);
  const E = "dark" === p || "undefined" != typeof document && document.documentElement.classList.contains("dark"), C = !(null == g ? void 0 : g.state.readOnly);
  if (!(false !== (null == g ? void 0 : g.getReadOnlyConfig().viewable))) return null;
  const k3 = E ? "#1f2937" : "white", T3 = E ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)", N2 = T(() => (g ? g.getCalendarRegistry() : R2()).getVisible().map((e) => ({ label: e.name, value: e.id })), [g, null == g ? void 0 : g.getCalendars()]), S2 = T(() => z(t2.start) ? t2.end && !z(t2.end) && (t2.end.timeZoneId || t2.end.timeZoneId) || Xn.Now.timeZoneId() : t2.start.timeZoneId || t2.start.timeZoneId || Xn.Now.timeZoneId(), [t2.end, t2.start]), M3 = (() => {
    var e;
    let t3 = {};
    if ("sticky-top" === o) {
      const r2 = null === (e = l2.current) || void 0 === e ? void 0 : e.querySelector(".calendar-content");
      if (r2) {
        const e2 = r2.getBoundingClientRect().top + 3 - n.top;
        t3 = Object.assign({ position: "absolute", width: "12px", height: "12px", backgroundColor: k3, transform: "rotate(45deg)", transformOrigin: "center", top: e2 - 6 + "px", borderRight: n.isSunday ? `1px solid ${T3}` : "none", borderTop: n.isSunday ? `1px solid ${T3}` : "none", borderLeft: n.isSunday ? "none" : `1px solid ${T3}`, borderBottom: n.isSunday ? "none" : `1px solid ${T3}` }, n.isSunday ? { right: "-6px" } : { left: "-6px" });
      }
    } else if ("sticky-bottom" === o) {
      const e2 = r.current;
      let a2 = 200;
      if (e2) {
        const t4 = e2.getBoundingClientRect(), n2 = window.getComputedStyle(e2), r2 = parseInt(n2.paddingBottom, 10) || 0, o2 = parseInt(n2.borderBottomWidth, 10) || 0;
        a2 = t4.height - r2 - o2 - 6 + 11;
      }
      t3 = { position: "absolute", width: "12px", height: "12px", backgroundColor: k3, transform: "rotate(45deg)", transformOrigin: "center", top: `${a2}px`, left: n.isSunday ? void 0 : "-6px", right: n.isSunday ? "-6px" : void 0, borderRight: n.isSunday ? `1px solid ${T3}` : "none", borderTop: n.isSunday ? `1px solid ${T3}` : "none", borderLeft: n.isSunday ? "none" : `1px solid ${T3}`, borderBottom: n.isSunday ? "none" : `1px solid ${T3}` };
    } else if (n && i.current && l2.current) {
      const e2 = i.current.getBoundingClientRect(), a2 = l2.current.querySelector(".calendar-content");
      if (a2) {
        const o2 = a2.getBoundingClientRect(), l3 = Math.max(e2.top, o2.top), i2 = Math.min(e2.bottom, o2.bottom), s = Math.max(0, i2 - l3);
        let d3;
        d3 = s === e2.height ? e2.top + e2.height / 2 : s > 0 ? l3 + s / 2 : e2.top + e2.height / 2;
        const c = d3 - n.top, u2 = r.current;
        let h = 228;
        if (u2) {
          const e3 = u2.getBoundingClientRect(), t4 = window.getComputedStyle(u2), n2 = parseInt(t4.paddingBottom, 10) || 0, r2 = parseInt(t4.borderBottomWidth, 10) || 0;
          h = e3.height - n2 - r2 + 11;
        }
        const g2 = 12, m2 = Math.max(g2, Math.min(h, c));
        t3 = Object.assign({ position: "absolute", width: "12px", height: "12px", backgroundColor: k3, transform: "rotate(45deg)", transformOrigin: "center", top: m2 - 6 + "px", borderRight: n.isSunday ? `1px solid ${T3}` : "none", borderTop: n.isSunday ? `1px solid ${T3}` : "none", borderLeft: n.isSunday ? "none" : `1px solid ${T3}`, borderBottom: n.isSunday ? "none" : `1px solid ${T3}` }, n.isSunday ? { right: "-6px" } : { left: "-6px" });
      }
    }
    return t3;
  })(), I2 = Ge("div", { ref: r, className: `${jt} p-4`, "data-event-detail-panel": "true", "data-event-id": t2.id, style: { top: `${n.top}px`, left: `${n.left}px`, zIndex: 9999, pointerEvents: "auto" }, children: [Ge("div", { style: M3 }), Ge("span", { className: "block text-xs text-gray-600 dark:text-gray-300 mb-1", children: y2("eventTitle") }), Ge("div", { className: "flex items-center justify-between gap-3 mb-3", children: [Ge("div", { className: "flex-1", children: Ge("input", { id: `event-title-${t2.id}`, name: "title", type: "text", value: b, readOnly: !C, disabled: !C, onChange: (e) => w(e.target.value), onInput: (e) => w(e.target.value), className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition" }) }), C && Ge(en, { options: N2, value: t2.calendarId || "blue", onChange: (e) => {
    d2(Object.assign(Object.assign({}, t2), { calendarId: e }));
  }, registry: null == g ? void 0 : g.getCalendarRegistry() })] }), Ge("div", a ? { className: "mb-3", children: [Ge("div", { className: "text-xs text-gray-600 dark:text-gray-300 mb-1", children: y2("dateRange") }), Ge(Yn, { value: [t2.start, t2.end], format: "YYYY-MM-DD", showTime: false, timeZone: S2, matchTriggerWidth: true, disabled: !C, onChange: (e) => {
    const [n2, r2] = e;
    d2(Object.assign(Object.assign({}, t2), { start: n2.toPlainDate(), end: r2.toPlainDate() }));
  }, locale: null == g ? void 0 : g.state.locale })] } : { className: "mb-3", children: [Ge("div", { className: "text-xs text-gray-600 dark:text-gray-300 mb-1", children: y2("timeRange") }), Ge(Yn, { value: [t2.start, t2.end], timeZone: S2, disabled: !C, onChange: (e) => {
    const [n2, r2] = e;
    d2(Object.assign(Object.assign({}, t2), { start: n2, end: r2 }));
  }, locale: null == g ? void 0 : g.state.locale })] }), Ge("div", { className: "mb-3", children: [Ge("span", { className: "block text-xs text-gray-600 dark:text-gray-300 mb-1", children: y2("note") }), Ge("textarea", { id: `event-note-${t2.id}`, name: "note", value: D2, readOnly: !C, disabled: !C, onChange: (e) => x2(e.target.value), onInput: (e) => x2(e.target.value), rows: 3, className: "w-full border border-slate-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-gray-100 dark:bg-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition resize-none", placeholder: y2("addNotePlaceholder") })] }), C && Ge("div", { className: "flex space-x-2", children: [Ge("button", a ? { className: "px-2 py-1 bg-primary text-primary-foreground rounded hover:bg-primary text-xs font-medium transition", onClick: () => {
    const n2 = z(t2.start) ? t2.start : t2.start.toPlainDate(), r2 = Xn.ZonedDateTime.from({ year: n2.year, month: n2.month, day: n2.day, hour: 9, minute: 0, timeZone: Xn.Now.timeZoneId() }), a2 = Xn.ZonedDateTime.from({ year: n2.year, month: n2.month, day: n2.day, hour: 10, minute: 0, timeZone: Xn.Now.timeZoneId() });
    d2(Object.assign(Object.assign({}, t2), { allDay: false, start: r2, end: a2 }));
  }, children: y2("setAsTimed") } : { className: "px-2 py-1 bg-primary text-primary-foreground rounded hover:bg-primary text-xs font-medium transition", onClick: () => {
    const e = z(t2.start) ? t2.start : t2.start.toPlainDate();
    d2(Object.assign(Object.assign({}, t2), { allDay: true, start: e, end: e }));
  }, children: y2("setAsAllDay") }), Ge("button", { className: "px-2 py-1 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90 text-xs font-medium transition", onClick: () => u(t2.id), children: y2("delete") })] })] });
  if ("undefined" == typeof window || "undefined" == typeof document) return null;
  const H2 = document.body;
  return H2 ? $(I2, H2) : null;
};
var Ua = ({ event: e, position: t2, panelRef: n, isAllDay: r, eventVisibility: a, calendarRef: o, selectedEventElementRef: l2, onEventUpdate: i, onEventDelete: s, onClose: d2, contentRenderer: c }) => {
  const { effectiveTheme: u } = zr(), h = Xn2(u), g = "dark" === h ? "#1f2937" : "white", m = "dark" === h ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)", f = (() => {
    var e2;
    let r2 = {};
    if ("sticky-top" === a) {
      const n2 = null === (e2 = o.current) || void 0 === e2 ? void 0 : e2.querySelector(".calendar-content");
      if (n2) {
        const e3 = n2.getBoundingClientRect().top + 3 - t2.top;
        r2 = Object.assign({ position: "absolute", width: "12px", height: "12px", backgroundColor: g, transform: "rotate(45deg)", transformOrigin: "center", top: e3 - 6 + "px", borderRight: t2.isSunday ? `1px solid ${m}` : "none", borderTop: t2.isSunday ? `1px solid ${m}` : "none", borderLeft: t2.isSunday ? "none" : `1px solid ${m}`, borderBottom: t2.isSunday ? "none" : `1px solid ${m}` }, t2.isSunday ? { right: "-6px" } : { left: "-6px" });
      }
    } else if ("sticky-bottom" === a) {
      const e3 = n.current;
      let a2 = 200;
      if (e3) {
        const t3 = e3.getBoundingClientRect(), n2 = window.getComputedStyle(e3), r3 = parseInt(n2.paddingBottom, 10) || 0, o2 = parseInt(n2.borderBottomWidth, 10) || 0;
        a2 = t3.height - r3 - o2 - 6 + 11;
      }
      r2 = { position: "absolute", width: "12px", height: "12px", backgroundColor: g, transform: "rotate(45deg)", transformOrigin: "center", top: `${a2}px`, left: t2.isSunday ? void 0 : "-6px", right: t2.isSunday ? "-6px" : void 0, borderRight: t2.isSunday ? `1px solid ${m}` : "none", borderTop: t2.isSunday ? `1px solid ${m}` : "none", borderLeft: t2.isSunday ? "none" : `1px solid ${m}`, borderBottom: t2.isSunday ? "none" : `1px solid ${m}` };
    } else if (t2 && l2.current && o.current) {
      const e3 = l2.current.getBoundingClientRect(), a2 = o.current.querySelector(".calendar-content");
      if (a2) {
        const o2 = a2.getBoundingClientRect(), l3 = Math.max(e3.top, o2.top), i2 = Math.min(e3.bottom, o2.bottom), s2 = Math.max(0, i2 - l3);
        let d3;
        d3 = s2 === e3.height ? e3.top + e3.height / 2 : s2 > 0 ? l3 + s2 / 2 : e3.top + e3.height / 2;
        const c2 = d3 - t2.top, u2 = n.current;
        let h2 = 228;
        if (u2) {
          const e4 = u2.getBoundingClientRect(), t3 = window.getComputedStyle(u2), n2 = parseInt(t3.paddingBottom, 10) || 0, r3 = parseInt(t3.borderBottomWidth, 10) || 0;
          h2 = e4.height - n2 - r3 + 11;
        }
        const v = 12, f2 = Math.max(v, Math.min(h2, c2));
        r2 = Object.assign({ position: "absolute", width: "12px", height: "12px", backgroundColor: g, transform: "rotate(45deg)", transformOrigin: "center", top: f2 - 6 + "px", borderRight: t2.isSunday ? `1px solid ${m}` : "none", borderTop: t2.isSunday ? `1px solid ${m}` : "none", borderLeft: t2.isSunday ? "none" : `1px solid ${m}`, borderBottom: t2.isSunday ? "none" : `1px solid ${m}` }, t2.isSunday ? { right: "-6px" } : { left: "-6px" });
      }
    }
    return r2;
  })(), p = Ge("div", { ref: n, className: `${jt} p-3`, "data-event-detail-panel": "true", "data-event-id": e.id, style: { top: `${t2.top}px`, left: `${t2.left}px`, zIndex: 9999, pointerEvents: "auto", backgroundColor: "dark" === h ? "#1f2937" : "#ffffff" }, children: [Ge("div", { style: f }), Ge(c, { event: e, isAllDay: r, onEventUpdate: i, onEventDelete: s, onClose: d2 })] });
  return $(p, document.body);
};
var Ba = ({ event: e, app: t2, isEventSelected: n, hideTime: r, isMobile: a }) => {
  const o = `${Math.floor(ne(e.start)).toString().padStart(2, "0")}:${Math.round(ne(e.start) % 1 * 60).toString().padStart(2, "0")}`;
  return Ge("div", { className: "text-xs cursor-pointer flex items-center justify-between", children: [Ge("div", { className: "flex items-center flex-1 min-w-0", children: [Ge("div", { style: { backgroundColor: ue(e.calendarId || "blue", null == t2 ? void 0 : t2.getCalendarRegistry()) }, className: Rt }), Ge("span", { className: `whitespace-nowrap overflow-hidden block ${a ? "mobile-mask-fade" : "truncate"} ${n ? "text-white" : ""}`, children: e.title })] }), !r && !a && Ge("span", { className: `${Gt} ml-1 shrink-0 ${n ? "text-white" : ""}`, style: n ? void 0 : { opacity: 0.8 }, children: o })] });
};
var Va = ({ event: e, isEventSelected: t2 }) => {
  const n = false !== e.icon, r = "boolean" != typeof e.icon ? e.icon : null;
  return Ge("div", { className: "text-xs px-1 rounded truncate cursor-pointer flex items-center", children: [n && (r ? Ge("div", { className: `${Jt} shrink-0`, children: r }) : e.title.toLowerCase().includes("easter") || e.title.toLowerCase().includes("holiday") ? Ge("span", { className: `inline-block ${Jt} shrink-0 ${t2 ? "text-yellow-200" : "text-yellow-600"}`, children: "⭐" }) : Ge(lt, { className: `${Ot} ${t2 ? "text-white" : ""}` })), Ge("span", { className: "truncate " + (t2 ? "text-white" : ""), children: e.title })] });
};
var qa = ({ event: e, isEditable: t2, onResizeStart: n }) => {
  const r = false !== e.icon, a = "boolean" != typeof e.icon ? e.icon : null;
  return Ge("div", { className: "h-full flex items-center overflow-hidden pl-3 px-1 py-0 relative group", children: [n && t2 && Ge("div", { className: "resize-handle absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity z-20", onMouseDown: (t3) => {
    t3.preventDefault(), t3.stopPropagation(), n(t3, e, "left");
  }, onClick: (e2) => {
    e2.preventDefault(), e2.stopPropagation();
  } }), r && (a ? Ge("div", { className: "mr-1 shrink-0", children: a }) : Ge(lt, { className: Ot })), Ge("div", { className: `${Ht} pr-1`, style: { lineHeight: "1.2" }, children: e.title }), n && t2 && Ge("div", { className: Pt, onMouseDown: (t3) => {
    t3.preventDefault(), t3.stopPropagation(), n(t3, e, "right");
  }, onClick: (e2) => {
    e2.preventDefault(), e2.stopPropagation();
  } })] });
};
var Ga = ({ event: e, app: t2, multiDaySegmentInfo: n, isEditable: a, isTouchEnabled: o, isEventSelected: l2, onResizeStart: i }) => {
  const s = n ? n.startHour : ne(e.start), d2 = n ? n.endHour : fe(e), c = d2 - s, u = !n || n.isFirst, h = !n || n.isLast, g = e.calendarId || "blue";
  return Ge(k, { children: [Ge("div", { className: "df-event-color-bar absolute left-1 top-1 bottom-1 w-[3px] rounded-full", style: { backgroundColor: ue(e.calendarId || "blue", null == t2 ? void 0 : t2.getCalendarRegistry()) } }), Ge("div", { className: "h-full flex flex-col overflow-hidden pl-3 " + (fe(e) - ne(e.start) <= 0.25 ? "px-1 py-0" : "p-1"), children: [Ge("div", { className: `${Ht} pr-1`, style: { lineHeight: c <= 0.25 ? "1.2" : "normal" }, children: e.title }), c > 0.5 && Ge("div", { className: "df-event-time text-xs opacity-80 truncate", children: n ? `${ge(s)} - ${ge(d2)}` : me(e) })] }), i && a && Ge(k, { children: [u && Ge("div", { className: "absolute top-0 left-0 w-full h-1.5 cursor-ns-resize z-10 rounded-t-sm", onMouseDown: (t3) => i(t3, e, "top") }), h && Ge("div", { className: "absolute bottom-0 left-0 w-full h-1.5 cursor-ns-resize z-10 rounded-b-sm", onMouseDown: (t3) => i(t3, e, "bottom") }), !u && h && n && Ge("div", { className: Pt, onMouseDown: (t3) => {
    t3.preventDefault(), t3.stopPropagation(), i(t3, e, "right");
  }, onClick: (e2) => {
    e2.preventDefault(), e2.stopPropagation();
  } })] }), o && l2 && i && a && Ge(k, { children: [Ge("div", { className: "absolute -top-1.5 right-5 w-2.5 h-2.5 bg-white border-2 rounded-full z-50", style: { borderColor: ue(g, null == t2 ? void 0 : t2.getCalendarRegistry()) }, onTouchStart: (t3) => {
    t3.stopPropagation(), i(t3, e, "top");
  } }), Ge("div", { className: "absolute -bottom-1.5 left-5 w-2.5 h-2.5 bg-white border-2 rounded-full z-50", style: { borderColor: ue(g, null == t2 ? void 0 : t2.getCalendarRegistry()) }, onTouchStart: (t3) => {
    t3.stopPropagation(), i(t3, e, "bottom");
  } })] })] });
};
var Ka = D(({ x: e, y: t2, onClose: n, children: r, className: a }, o) => {
  const l2 = A(null);
  y(() => {
    const e2 = () => n(), t3 = (e3) => {
      if (l2.current && !l2.current.contains(e3.target)) {
        if (e3.target.closest("[data-submenu-content]")) return;
        n();
      }
    };
    window.dispatchEvent(new CustomEvent("dayflow-close-all-menus")), window.addEventListener("dayflow-close-all-menus", e2), document.body.addEventListener("mousedown", t3, { capture: true }), document.body.addEventListener("contextmenu", t3, { capture: true });
    const r2 = (e3) => {
      "Escape" === e3.key && n();
    };
    window.addEventListener("keydown", r2);
    const a2 = () => n();
    return window.addEventListener("scroll", a2, true), window.addEventListener("resize", a2), () => {
      window.removeEventListener("dayflow-close-all-menus", e2), document.body.removeEventListener("mousedown", t3, { capture: true }), document.body.removeEventListener("contextmenu", t3, { capture: true }), window.removeEventListener("keydown", r2), window.removeEventListener("scroll", a2, true), window.removeEventListener("resize", a2);
    };
  }, [n]);
  return $(Ge("div", { ref: (e2) => {
    l2.current = e2, "function" == typeof o ? o(e2) : o && (o.current = e2);
  }, className: `fixed z-50 min-w-32 overflow-visible rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 animate-in fade-in-0 zoom-in-95 duration-100 ease-out ${a || ""}`, style: { top: t2, left: e }, onContextMenu: (e2) => e2.preventDefault(), "data-context-menu-root": "true", children: r }), document.body);
});
Ka.displayName = "ContextMenu";
var Xa = ({ onClick: e, children: t2, icon: n, danger: r, disabled: a }) => Ge("div", { className: `relative flex cursor-default select-none items-center rounded-sm px-3 py-0.5 text-[12px] outline-none transition-colors group
        ${a ? "pointer-events-none opacity-50" : "focus:bg-primary focus:text-white hover:bg-primary hover:text-white dark:focus:bg-primary dark:focus:text-white dark:hover:bg-primary dark:hover:text-white"}
        ${r ? "text-destructive focus:text-destructive-foreground focus:bg-destructive hover:bg-destructive hover:text-destructive-foreground" : "text-slate-900 dark:text-slate-50"}`, onClick: (t3) => {
  t3.stopPropagation(), a || e();
}, "data-disabled": a, children: [n && Ge("span", { className: "mr-2 h-4 w-4", children: n }), t2] });
var Ja = () => Ge("div", { className: "-mx-1 my-1 h-px bg-slate-200 dark:bg-slate-800" });
var Qa = ({ children: e }) => Ge("div", { className: "px-3 py-0.5 text-[12px] font-semibold text-slate-950 dark:text-slate-50", children: e });
var eo = ({ children: e }) => {
  const [t2, n] = d(false), r = A(null);
  return y(() => () => {
    r.current && clearTimeout(r.current);
  }, []), Ge("div", { className: "relative", onMouseEnter: () => {
    r.current && (clearTimeout(r.current), r.current = null), n(true);
  }, onMouseLeave: () => {
    r.current = setTimeout(() => {
      n(false);
    }, 100);
  }, children: (Array.isArray(e) ? e : [e]).map((e2) => t(e2) ? Q(e2, { isOpen: t2 }) : e2) });
};
var to = ({ children: e, icon: t2, isOpen: n }) => Ge("div", { className: "relative flex cursor-default select-none items-center rounded-sm px-3 py-0.5 text-[12px] outline-none transition-colors focus:bg-primary focus:text-white hover:bg-primary hover:text-white dark:focus:bg-primary dark:focus:text-white dark:hover:bg-primary dark:hover:text-white " + (n ? "bg-primary text-white" : ""), children: [t2 && Ge("span", { className: "mr-2 h-4 w-4", children: t2 }), Ge("span", { className: "grow text-left", children: e }), Ge(Xe, { className: "ml-auto h-4 w-4 " + (n ? "text-white opacity-100" : "opacity-60") })] });
var no = ({ children: e, isOpen: t2 }) => {
  const n = A(null), [r, a] = d("right");
  return y(() => {
    var e2;
    if (t2 && n.current) {
      const t3 = n.current.getBoundingClientRect(), r2 = null === (e2 = n.current.parentElement) || void 0 === e2 ? void 0 : e2.getBoundingClientRect();
      r2 && (r2.right + t3.width > window.innerWidth ? a("left") : a("right"));
    }
  }, [t2]), t2 ? Ge("div", { ref: n, className: "absolute top-0 z-50 min-w-32 whitespace-nowrap overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 animate-in fade-in-0 zoom-in-95 duration-100 ease-out", style: { left: "right" === r ? "100%" : "auto", right: "left" === r ? "100%" : "auto", marginLeft: "right" === r ? "0.25rem" : 0, marginRight: "left" === r ? "0.25rem" : 0 }, "data-submenu-content": "true", children: e }) : null;
};
var ro = ["#ea426b", "#f19a38", "#f7cf46", "#83d754", "#51aaf2", "#b672d0", "#957e5e"];
var ao = ({ selectedColor: e, onSelect: t2, onCustomColor: n }) => {
  const { t: r } = In();
  return Ge("div", { children: [Ge("div", { className: "grid grid-cols-7 gap-2 p-1 px-3", children: ro.map((n2) => Ge("button", { type: "button", className: "h-5 w-5 rounded-full border border-gray-200 dark:border-gray-600 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary dark:focus:ring-offset-slate-800 " + ((null == e ? void 0 : e.toLowerCase()) === n2.toLowerCase() ? "ring-2 ring-offset-1 ring-primary dark:ring-offset-slate-800" : ""), style: { backgroundColor: n2 }, onClick: (e2) => {
    e2.stopPropagation(), t2(n2);
  }, title: n2 }, n2)) }), n && Ge("div", { className: "mt-1 flex cursor-pointer items-center rounded-sm px-3 py-0.5 text-[12px] text-slate-700 hover:bg-primary hover:text-white dark:text-slate-200 dark:hover:bg-primary dark:hover:text-white transition-colors", onClick: (e2) => {
    e2.stopPropagation(), n();
  }, children: r("customColor") })] });
};
var oo = ({ x: t2, y: n, date: r, onClose: a, app: o, onCreateEvent: l2, viewType: i }) => {
  const { t: s } = In(), d2 = hr.hasEvent();
  return Ge(Ka, { x: t2, y: n, onClose: a, children: [Ge(Xa, { onClick: () => {
    l2(), a();
  }, children: s("newEvent") || "New Event" }), Ge(Xa, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
    yield ((t3, n2, r2) => __awaiter(void 0, void 0, void 0, function* () {
      if (hr.hasEvent()) try {
        let a2 = hr.getEvent();
        if (!a2) {
          const e = yield navigator.clipboard.readText();
          e && (a2 = JSON.parse(e));
        }
        if (a2 && "object" == typeof a2 && a2.title) {
          const o2 = an(a2.start), l3 = an(a2.end).getTime() - o2.getTime(), i2 = a2, { _segmentInfo: s2 } = i2, d3 = __rest(i2, ["_segmentInfo"]), c = new Date(n2), u = r2 === k2.MONTH || r2 === k2.YEAR, h = 0 === c.getHours() && 0 === c.getMinutes(), g = 0 !== o2.getHours() || 0 !== o2.getMinutes();
          !a2.allDay && (u || h && g) && c.setHours(o2.getHours(), o2.getMinutes(), o2.getSeconds(), o2.getMilliseconds());
          const m = new Date(c.getTime() + (l3 > 0 ? l3 : 36e5)), v = Object.assign(Object.assign({}, d3), { id: Ze(), start: a2.allDay ? on(c) : sn(c, Xn.Now.timeZoneId()), end: a2.allDay ? on(m) : sn(m, Xn.Now.timeZoneId()), calendarId: a2.calendarId && t3.getCalendarRegistry().has(a2.calendarId) ? a2.calendarId : t3.getCalendarRegistry().getDefaultCalendarId() || "default" });
          t3.addEvent(v);
        }
      } catch (e) {
        console.error("Failed to paste event:", e);
      }
    }))(o, r, i), a();
  }), disabled: !d2, children: s("pasteHere") || "Paste Here" })] });
};
var lo = ({ event: e, x: t2, y: n, onClose: a, app: o }) => {
  var l2, i;
  const { t: s } = In(), d2 = o.getCalendars(), c = null === (i = null === (l2 = o.callbacks) || void 0 === l2 ? void 0 : l2.renderEventContextMenu) || void 0 === i ? void 0 : i.call(l2, e, a);
  return Ge(Ka, { x: t2, y: n, onClose: a, children: [Ge(eo, { children: [Ge(to, { children: s("calendars") || "Calendars" }), Ge(no, { children: d2.map((t3) => {
    const n2 = t3.id === e.calendarId;
    return Ge(Xa, { onClick: () => {
      return n3 = t3.id, o.updateEvent(e.id, { calendarId: n3 }), void a();
      var n3;
    }, children: Ge("div", { className: "flex items-center w-full", children: [Ge("div", { className: "w-4 shrink-0", children: n2 && Ge(rt, { className: "w-3 h-3 text-primary" }) }), Ge("div", { className: "flex items-center gap-1.5 min-w-0", children: [Ge("div", { className: "w-3 h-3 rounded-sm shrink-0", style: { backgroundColor: t3.colors.lineColor } }), Ge("span", { className: "truncate " + (n2 ? "font-semibold" : ""), children: t3.name })] })] }) }, t3.id);
  }) })] }), Ge(Ja, {}), Ge(Xa, { onClick: () => {
    o.deleteEvent(e.id), a();
  }, danger: true, children: s("delete") || "Delete" }), Ge(Xa, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const t3 = JSON.stringify(e, null, 2);
      yield navigator.clipboard.writeText(t3), hr.setEvent(e), o.deleteEvent(e.id);
    } catch (e2) {
      console.error("Failed to cut event: ", e2);
    }
    a();
  }), children: s("cut") || "Cut" }), Ge(Xa, { onClick: () => __awaiter(void 0, void 0, void 0, function* () {
    try {
      const t3 = JSON.stringify(e, null, 2);
      yield navigator.clipboard.writeText(t3), hr.setEvent(e);
    } catch (e2) {
      console.error("Failed to copy event: ", e2);
    }
    a();
  }), children: s("copy") || "Copy" }), c && Ge(k, { children: [Ge(Ja, {}), c] })] });
};
var io = (e, t2, n, r, a) => {
  let o = "df-event calendar-event select-none pointer-events-auto px-0.5";
  t2 ? o += " df-day-event flex flex-col" : e || (o += " df-week-event flex flex-col");
  const l2 = () => {
    if (r && a) {
      const { segmentType: e2 } = a;
      if ("single" === e2 || "start" === e2) return Mt;
      if ("start-week-end" === e2) return "rounded-l-xl rounded-r-none my-0.5";
      if ("end" === e2 || "end-week-start" === e2) return "rounded-r-xl rounded-l-none my-0.5";
      if ("middle" === e2) return "rounded-none my-0.5";
    }
    return Mt;
  };
  if (e) {
    let e2 = `
      ${o}
      ${n ? l2() : It}
      `;
    return r || (e2 += " mb-[2px]"), e2;
  }
  return `
    ${o}
    shadow-sm
    ${n ? l2() : It}
  `;
};
var so = ({ event: e, layout: t2, isAllDay: n = false, allDayHeight: a = 28, calendarRef: o, isBeingDragged: l2 = false, isBeingResized: i = false, isDayView: m = false, isMonthView: v = false, isMultiDay: f = false, segment: p, segmentIndex: y2 = 0, hourHeight: b, firstHour: w, selectedEventId: D2, detailPanelEventId: x2, onMoveStart: E, onResizeStart: C, onEventUpdate: k3, onEventDelete: T3, newlyCreatedEventId: N2, onDetailPanelOpen: S2, onEventSelect: M3, onEventLongPress: I2, onDetailPanelToggle: H2, customDetailPanelContent: R3, customEventDetailDialog: O2, multiDaySegmentInfo: P2, app: L2, isMobile: A3 = false, enableTouch: $3, hideTime: j3 }) => {
  const Y2 = x(Ve), F2 = null != $3 ? $3 : A3, [z2, _4] = d(null), [Z2, W2] = d(false), [U3, B3] = d(null), V2 = A(null), q3 = A(null), G3 = A(null), K2 = A(null), X2 = f && p ? `${e.id}::${p.id}` : void 0 !== (null == P2 ? void 0 : P2.dayIndex) ? `${e.id}::day-${P2.dayIndex}` : e.id, J3 = x2 === X2, Q3 = J3 && !O2, ee2 = null == L2 ? void 0 : L2.getReadOnlyConfig(), te2 = !(null == L2 ? void 0 : L2.state.readOnly), re2 = false !== (null == ee2 ? void 0 : ee2.viewable), ae2 = false !== (null == ee2 ? void 0 : ee2.draggable), { isSelected: oe2, setIsSelected: le2, isPressed: ie2, setIsPressed: ue2, handleTouchStart: he2, handleTouchMove: ge2, handleTouchEnd: me2 } = (({ event: e2, isTouchEnabled: t3, onMoveStart: n2, onEventLongPress: r, onEventSelect: a2, onDetailPanelToggle: o2, canOpenDetail: l3, app: i2, multiDaySegmentInfo: c, isMultiDay: u, segment: h, detailPanelKey: g }) => {
    const [m2, v2] = d(false), [f2, p2] = d(false), y3 = A(null), b2 = A(null);
    return { isSelected: m2, setIsSelected: v2, isPressed: f2, setIsPressed: p2, handleTouchStart: (a3) => {
      if (!n2 || !t3) return;
      a3.stopPropagation(), p2(true);
      const o3 = a3.touches[0], l4 = o3.clientX, i3 = o3.clientY, s = a3.currentTarget;
      b2.current = { x: l4, y: i3 }, y3.current = setTimeout(() => {
        var t4;
        r ? r(e2.id) : v2(true);
        const a4 = { preventDefault: () => {
        }, stopPropagation: () => {
        }, currentTarget: s, touches: [{ clientX: l4, clientY: i3 }], cancelable: false };
        if (c) {
          const r2 = Object.assign(Object.assign({}, e2), { day: null !== (t4 = c.dayIndex) && void 0 !== t4 ? t4 : e2.day, _segmentInfo: c });
          n2(a4, r2);
        } else if (u && h) {
          const t5 = Object.assign(Object.assign({}, e2), { day: h.startDayIndex, _segmentInfo: { dayIndex: h.startDayIndex, isFirst: h.isFirstSegment, isLast: h.isLastSegment } });
          n2(a4, t5);
        } else n2(a4, e2);
        y3.current = null, b2.current = null, navigator.vibrate && navigator.vibrate(50);
      }, 500);
    }, handleTouchMove: (e3) => {
      if (y3.current && b2.current) {
        const t4 = Math.abs(e3.touches[0].clientX - b2.current.x), n3 = Math.abs(e3.touches[0].clientY - b2.current.y);
        (t4 > 10 || n3 > 10) && (clearTimeout(y3.current), y3.current = null, b2.current = null, p2(false));
      }
    }, handleTouchEnd: (n3) => {
      p2(false), y3.current && (clearTimeout(y3.current), y3.current = null), t3 && b2.current && (n3.preventDefault(), n3.stopPropagation(), a2 ? a2(e2.id) : l3 && v2(true), i2 && i2.onEventClick(e2), l3 ? null == o2 || o2(g) : null == o2 || o2(null)), b2.current = null;
    } };
  })({ event: e, isTouchEnabled: F2, onMoveStart: E, onEventLongPress: I2, onEventSelect: M3, onDetailPanelToggle: H2, canOpenDetail: re2, app: L2, multiDaySegmentInfo: P2, isMultiDay: f, segment: p, detailPanelKey: X2 }), ve2 = (void 0 !== D2 ? D2 === e.id : oe2) || ie2 || l2, [pe2, ye2] = d("visible"), be2 = (e2) => {
    K2.current = e2;
  }, we2 = () => ((e2, t3, n2, r, a2, o2) => {
    var l3;
    if (null !== r) return r;
    if (t3 === n2) {
      const e3 = n2.split("::"), t4 = e3[e3.length - 1];
      if (t4.startsWith("day-")) {
        const e4 = Number(t4.replace("day-", ""));
        if (!Number.isNaN(e4)) return e4;
      }
    }
    return void 0 !== (null == a2 ? void 0 : a2.dayIndex) ? a2.dayIndex : o2 ? o2.startDayIndex : null !== (l3 = e2.day) && void 0 !== l3 ? l3 : 0;
  })(e, x2 || void 0, X2, K2.current, P2, p), De2 = (e2) => ((e3, t3, n2, r, a2) => {
    if (!t3.current) return null;
    const o2 = t3.current.getBoundingClientRect();
    if (n2) {
      const t4 = o2.width / 7, n3 = e3 - o2.left, r2 = Math.floor(n3 / t4);
      return Number.isFinite(r2) ? Math.max(0, Math.min(6, r2)) : null;
    }
    const l3 = a2 ? 48 : 80, i2 = r ? 1 : 7, s = (o2.width - l3) / i2, d2 = e3 - o2.left - l3, c = Math.floor(d2 / s);
    return Number.isFinite(c) ? Math.max(0, Math.min(i2 - 1, c)) : null;
  })(e2, o, v, m, A3), xe2 = (e2) => ((e3, t3, n2, r, a2) => {
    if (!t3.current) return null;
    const o2 = t3.current.getBoundingClientRect();
    if (n2) {
      const t4 = o2.width / 7;
      return { left: o2.left + e3 * t4, width: t4 };
    }
    const l3 = a2 ? 48 : 80;
    if (r) {
      const e4 = o2.width - l3;
      return { left: o2.left + l3, width: e4 };
    }
    const i2 = (o2.width - l3) / 7;
    return { left: o2.left + l3 + e3 * i2, width: i2 };
  })(e2, o, v, m, A3), Ee2 = q(() => {
    if (!G3.current || !o.current || !q3.current) return;
    const t3 = o.current.getBoundingClientRect(), n2 = we2(), r = xe2(n2);
    let a2, l3;
    if (r) a2 = r.left, l3 = r.width;
    else if (v) l3 = t3.width / 7, a2 = t3.left + n2 * l3;
    else {
      const e2 = A3 ? 48 : 80;
      l3 = (t3.width - e2) / 7, a2 = t3.left + e2 + n2 * l3;
    }
    const i2 = Math.min(window.innerWidth, t3.right), s = Math.min(window.innerHeight, t3.bottom);
    requestAnimationFrame(() => {
      var r2, l4, d2, c;
      if (!q3.current) return;
      if (!G3.current) return;
      const u = q3.current.getBoundingClientRect(), h = u.width, g = u.height;
      let y3, D3, x3;
      if ("sticky-top" === pe2 || "sticky-bottom" === pe2) {
        const t4 = null === (r2 = o.current) || void 0 === r2 ? void 0 : r2.querySelector(".calendar-content");
        if (!t4) return;
        const n3 = P2 ? P2.startHour : ne(e.start), a3 = P2 ? P2.endHour : fe(e), i3 = (n3 - w) * b, s2 = Math.max((a3 - n3) * b, b / 4), d3 = t4.getBoundingClientRect(), c2 = t4.scrollTop, u2 = d3.top + i3 - c2, h2 = null === (l4 = V2.current) || void 0 === l4 ? void 0 : l4.getBoundingClientRect();
        if (!h2) return;
        x3 = { top: u2, bottom: u2 + s2, left: h2.left, right: h2.right, width: h2.width, height: s2, x: h2.x, y: u2, toJSON: () => ({}) };
      } else x3 = G3.current.getBoundingClientRect();
      if (v && f && p) {
        const e2 = xe2(n2), r3 = null !== (d2 = null == e2 ? void 0 : e2.width) && void 0 !== d2 ? d2 : t3.width / 7, a3 = null !== (c = null == e2 ? void 0 : e2.left) && void 0 !== c ? c : t3.left + n2 * r3, o2 = a3 + r3;
        x3 = { top: x3.top, bottom: x3.bottom, left: a3, right: o2, width: o2 - a3, height: x3.height, x: a3, y: x3.top, toJSON: () => ({}) };
      }
      if (("sticky-top" === pe2 || "sticky-bottom" === pe2) && !v) {
        const e2 = we2(), n3 = xe2(e2), r3 = A3 ? 48 : 80, a3 = n3 ? n3.left : t3.left + r3 + e2 * (t3.width - r3) / (m ? 1 : 7), o2 = n3 ? n3.width : (t3.width - r3) / (m ? 1 : 7), l5 = Math.max(0, m ? x3.width : o2 - 3), i3 = m ? x3.left : a3;
        x3 = Object.assign(Object.assign({}, x3), { left: i3, right: i3 + l5, width: l5 });
      }
      const E2 = i2 - x3.right, C2 = x3.left - t3.left;
      y3 = E2 >= h + 20 ? x3.right + 10 : C2 >= h + 20 ? x3.left - h - 10 : E2 > C2 ? Math.max(t3.left + 10, i2 - h - 10) : t3.left + 10;
      const k4 = x3.top - g / 2 + x3.height / 2, T4 = Math.max(10, t3.top + 10), N3 = s - 10;
      D3 = k4 < T4 ? T4 : k4 + g > N3 ? N3 - g : k4, B3((e2) => e2 ? Object.assign(Object.assign({}, e2), { top: D3, left: y3, isSunday: y3 < a2 }) : null);
    });
  }, [o, e.day, e.start, e.end, pe2, v, w, b, f, p, P2, x2, X2, A3, m]);
  (({ event: e2, isEventSelected: t3, showDetailPanel: n2, eventRef: r, calendarRef: a2, isAllDay: o2, isMonthView: l3, multiDaySegmentInfo: i2, firstHour: s, hourHeight: d2, updatePanelPosition: u, setEventVisibility: h }) => {
    const m2 = q(() => {
      if (!t3 || !n2 || !r.current || !a2.current || o2 || l3) return;
      const c = a2.current.querySelector(".calendar-content");
      if (!c) return;
      const g = i2 ? i2.startHour : ne(e2.start), m3 = i2 ? i2.endHour : fe(e2), v2 = (g - s) * d2, f2 = v2 + Math.max((m3 - g) * d2, d2 / 4), p2 = c.getBoundingClientRect(), y3 = c.scrollTop;
      let b2 = f2 < y3 + 6, w2 = v2 > y3 + p2.height - 6;
      const D3 = p2.bottom < 0, x3 = p2.top > window.innerHeight;
      D3 ? b2 = true : x3 && (w2 = true), h(b2 ? "sticky-top" : w2 ? "sticky-bottom" : "visible"), u();
    }, [t3, n2, a2, o2, l3, e2.start, e2.end, s, d2, u, i2]);
    y(() => {
      var e3, r2;
      if (!t3 || !n2 || o2) return;
      const l4 = null === (e3 = a2.current) || void 0 === e3 ? void 0 : e3.querySelector(".calendar-content");
      if (!l4) return;
      const i3 = () => m2(), s2 = () => {
        m2(), u();
      }, d3 = [l4];
      let c = null === (r2 = a2.current) || void 0 === r2 ? void 0 : r2.parentElement;
      for (; c; ) {
        const e4 = window.getComputedStyle(c);
        "auto" !== e4.overflowY && "scroll" !== e4.overflowY && "auto" !== e4.overflowX && "scroll" !== e4.overflowX || d3.push(c), c = c.parentElement;
      }
      d3.forEach((e4) => {
        e4.addEventListener("scroll", i3);
      }), window.addEventListener("scroll", i3, true), window.addEventListener("resize", s2);
      let h2 = null;
      return a2.current && (h2 = new ResizeObserver(() => {
        s2();
      }), h2.observe(a2.current)), m2(), () => {
        d3.forEach((e4) => {
          e4.removeEventListener("scroll", i3);
        }), window.removeEventListener("scroll", i3, true), window.removeEventListener("resize", s2), h2 && h2.disconnect();
      };
    }, [t3, n2, o2, m2, u, a2]);
  })({ event: e, isEventSelected: ve2, showDetailPanel: J3, eventRef: V2, calendarRef: o, isAllDay: n, isMonthView: v, multiDaySegmentInfo: P2, firstHour: w, hourHeight: b, updatePanelPosition: Ee2, setEventVisibility: ye2 });
  const Ce2 = J3 && !!O2;
  (({ eventRef: e2, detailPanelRef: t3, eventId: n2, isEventSelected: r, showDetailPanel: a2, onEventSelect: o2, onDetailPanelToggle: l3, setIsSelected: i2, setActiveDayIndex: s }) => {
    y(() => {
      if (!r && !a2) return;
      const d2 = (d3) => {
        var c, u;
        const h = d3.target, g = null === (c = e2.current) || void 0 === c ? void 0 : c.contains(h), m2 = null !== h.closest(`[data-event-id="${n2}"]`), v2 = null === (u = t3.current) || void 0 === u ? void 0 : u.contains(h), f2 = h.closest("[data-event-detail-dialog]"), p2 = h.closest("[data-range-picker-popup]"), y3 = h.closest("[data-calendar-picker-dropdown]");
        a2 ? g || m2 || v2 || f2 || p2 || y3 || (null == o2 || o2(null), s(null), i2(false), null == l3 || l3(null)) : !r || g || m2 || f2 || p2 || y3 || (null == o2 || o2(null), s(null), i2(false), null == l3 || l3(null));
      };
      return document.addEventListener("mousedown", d2), () => {
        document.removeEventListener("mousedown", d2);
      };
    }, [r, a2, o2, l3, n2]);
  })({ eventRef: V2, detailPanelRef: q3, eventId: e.id, isEventSelected: !Ce2 && ve2, showDetailPanel: Q3, onEventSelect: M3, onDetailPanelToggle: H2, setIsSelected: le2, setActiveDayIndex: be2 });
  const ke2 = q(() => {
    M3 && M3(null), K2.current = null, le2(false), null == H2 || H2(null);
  }, [M3, H2]), Te2 = T(() => ({ event: e, isAllDay: n, onEventUpdate: k3, onEventDelete: T3, onClose: ke2 }), [e, n, k3, T3, ke2]), Ne2 = T(() => ({ event: e, isAllDay: n, isMobile: A3, isMonthView: v, segment: p, layout: t2 }), [e, n, A3, v, p, t2]), Se2 = q(() => Ge(Ir, { store: Y2, generatorName: "eventDetailContent", generatorArgs: Te2 }), [Y2, Te2]);
  y(() => {
    !J3 || U3 || A3 || (B3({ top: -9999, left: -9999, eventHeight: 0, eventMiddleY: 0, isSunday: false }), requestAnimationFrame(() => Ee2()));
  }, [J3, U3, Ee2, A3]), y(() => {
    if ((null == L2 ? void 0 : L2.state.highlightedEventId) === e.id) {
      W2(true);
      const e2 = setTimeout(() => {
        W2(false);
      }, 300);
      return () => {
        clearTimeout(e2), W2(false);
      };
    }
  }, [null == L2 ? void 0 : L2.state.highlightedEventId, e.id]);
  const Me2 = e.calendarId || "blue", Ie2 = null == L2 ? void 0 : L2.getCalendarRegistry();
  return Ge(k, { children: [Ge("div", { ref: V2, "data-event-id": e.id, className: io(v, m, n, f, p), style: Object.assign(Object.assign({}, (() => {
    var r, l3, i2, s, d2, c, u, h;
    if (v) return f && p ? { opacity: 1, zIndex: ve2 || J3 ? 1e3 : 1, cursor: ae2 || re2 ? "pointer" : "default" } : { opacity: 1, zIndex: ve2 || J3 ? 1e3 : 1, transform: Z2 ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", cursor: ae2 || re2 ? "pointer" : "default" };
    if (n) {
      const e2 = { height: a - 4 + "px", opacity: 1, zIndex: ve2 || J3 ? 1e3 : 1, transform: Z2 ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", cursor: ae2 || re2 ? "pointer" : "default" }, t3 = y2 * a;
      if (Object.assign(e2, { top: `${t3}px` }), m) Object.assign(e2, { width: "100%", left: "0px", right: "2px", position: "absolute" });
      else if (f && p) {
        const t4 = (p.endDayIndex - p.startDayIndex + 1) / 7 * 100, n2 = p.startDayIndex / 7 * 100, r2 = 2, a2 = p.isFirstSegment ? r2 : 0, o2 = a2 + (p.isLastSegment ? r2 : 0);
        Object.assign(e2, { width: o2 > 0 ? `calc(${t4}% - ${o2}px)` : `${t4}%`, left: a2 > 0 ? `calc(${n2}% + ${a2}px)` : `${n2}%`, position: "absolute", pointerEvents: "auto" });
      } else Object.assign(e2, { width: "100%", left: "0px", position: "relative" });
      return e2;
    }
    const g = P2 ? P2.startHour : ne(e.start), D3 = P2 ? P2.endHour : fe(e), x3 = { top: `${(g - w) * b + 3}px`, height: Math.max((D3 - g) * b, b / 4) - 4 + "px", position: "absolute", opacity: 1, zIndex: ve2 || J3 ? 1e3 : null !== (r = null == t2 ? void 0 : t2.zIndex) && void 0 !== r ? r : 1, transform: Z2 ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)", cursor: ae2 || re2 ? "pointer" : "default" };
    if (ve2 && J3 && ("sticky-top" === pe2 || "sticky-bottom" === pe2)) {
      const e2 = null === (l3 = o.current) || void 0 === l3 ? void 0 : l3.getBoundingClientRect();
      if (e2) {
        const n2 = we2(), r2 = A3 ? 48 : 80, a2 = m ? 1 : 7;
        let l4 = (e2.width - r2) / a2, g2 = e2.left + r2 + (m ? 0 : n2 * l4);
        v && (l4 = e2.width / 7, g2 = e2.left + n2 * l4);
        const f2 = xe2(n2);
        f2 && (g2 = f2.left, l4 = f2.width);
        let p2 = null === (i2 = o.current) || void 0 === i2 ? void 0 : i2.querySelector(".calendar-content");
        p2 || (p2 = null === (s = o.current) || void 0 === s ? void 0 : s.querySelector(".calendar-renderer"));
        const y3 = null == p2 ? void 0 : p2.getBoundingClientRect(), b2 = null === (c = null === (d2 = V2.current) || void 0 === d2 ? void 0 : d2.parentElement) || void 0 === c ? void 0 : c.getBoundingClientRect();
        let w2, D4;
        if (b2 && b2.width > 0) t2 ? (w2 = b2.left + t2.left / 100 * b2.width, D4 = m ? t2.width / 100 * b2.width : (t2.width - 1) / 100 * b2.width) : (w2 = b2.left, D4 = m ? b2.width : b2.width - 3);
        else {
          const e3 = xe2(n2), r3 = null !== (u = null == e3 ? void 0 : e3.left) && void 0 !== u ? u : g2, a3 = null !== (h = null == e3 ? void 0 : e3.width) && void 0 !== h ? h : l4;
          w2 = r3, D4 = a3 - 3, t2 && (w2 = r3 + t2.left / 100 * a3, D4 = m ? t2.width / 100 * a3 : (t2.width - 1) / 100 * a3);
        }
        if ("sticky-top" === pe2) {
          let t3 = y3 ? y3.top : e2.top;
          return t3 = Math.max(t3, 0), t3 = Math.max(t3, e2.top), t3 = Math.min(t3, e2.bottom - 6), t3 = Math.min(t3, window.innerHeight - 6), { position: "fixed", top: `${t3}px`, left: `${w2}px`, width: `${D4}px`, height: "6px", zIndex: 1e3, overflow: "hidden" };
        }
        let x4 = y3 ? y3.bottom : e2.bottom;
        return x4 = Math.min(x4, window.innerHeight), x4 = Math.min(x4, e2.bottom), x4 = Math.max(x4, e2.top + 6), x4 = Math.max(x4, 6), { position: "fixed", top: x4 - 6 + "px", left: `${w2}px`, width: `${D4}px`, height: "6px", zIndex: 1e3, overflow: "hidden" };
      }
    }
    if (t2 && !n) {
      const e2 = m ? `${t2.width}%` : t2.width - 1 + "%";
      return Object.assign(Object.assign({}, x3), { left: `${t2.left}%`, width: e2, right: "auto" });
    }
    return Object.assign(Object.assign({}, x3), { left: "0px", right: m ? "0px" : "3px" });
  })()), { backgroundColor: ve2 ? ce(Me2, Ie2) : se(Me2, Ie2), color: ve2 ? "#fff" : de(Me2, Ie2) }), onClick: F2 ? void 0 : (t3) => {
    var n2, r, a2;
    if (t3.preventDefault(), t3.stopPropagation(), f) {
      const a3 = De2(t3.clientX);
      be2(null !== a3 ? p ? Math.min(Math.max(a3, p.startDayIndex), p.endDayIndex) : a3 : null !== (r = null !== (n2 = null == P2 ? void 0 : P2.dayIndex) && void 0 !== n2 ? n2 : e.day) && void 0 !== r ? r : null);
    } else be2(null !== (a2 = e.day) && void 0 !== a2 ? a2 : null);
    L2 && L2.onEventClick(e), M3 ? M3(e.id) : re2 && le2(true), null == H2 || H2(null), B3(null);
  }, onContextMenu: F2 ? void 0 : (t3) => {
    t3.preventDefault(), t3.stopPropagation(), M3 && M3(e.id), _4({ x: t3.clientX, y: t3.clientY });
  }, onDblClick: F2 ? void 0 : (t3) => {
    var r, a2, l3, i2, s;
    if (!re2) return;
    t3.preventDefault(), t3.stopPropagation();
    let d2 = t3.currentTarget;
    if (f) {
      const e2 = d2.querySelector("div");
      e2 && (d2 = e2);
    }
    if (G3.current = d2, f) {
      const n2 = De2(t3.clientX);
      be2(null !== n2 ? Math.min(Math.max(n2, null !== (r = null == p ? void 0 : p.startDayIndex) && void 0 !== r ? r : 0), null !== (a2 = null == p ? void 0 : p.endDayIndex) && void 0 !== a2 ? a2 : 6) : null !== (i2 = null !== (l3 = null == p ? void 0 : p.startDayIndex) && void 0 !== l3 ? l3 : e.day) && void 0 !== i2 ? i2 : 0);
    } else be2(null !== (s = e.day) && void 0 !== s ? s : null);
    new Promise((t4) => {
      if (!o.current || n || v) return void t4();
      const r2 = o.current.querySelector(".calendar-content");
      if (!r2) return void t4();
      const a3 = P2 ? P2.startHour : ne(e.start), l4 = P2 ? P2.endHour : fe(e), i3 = (a3 - w) * b, s2 = i3 + Math.max((l4 - a3) * b, b / 4), d3 = r2.scrollTop, c = r2.clientHeight;
      if (i3 >= d3 && s2 <= d3 + c) return void t4();
      const u = ((a3 + l4) / 2 - w) * b - c / 2, h = r2.scrollHeight - c;
      r2.scrollTo({ top: Math.max(0, Math.min(h, u)), behavior: "smooth" }), setTimeout(() => t4(), 300);
    }).then(() => {
      le2(true), A3 || (null == H2 || H2(X2), B3({ top: -9999, left: -9999, eventHeight: 0, eventMiddleY: 0, isSunday: false }), requestAnimationFrame(() => Ee2()));
    });
  }, onMouseDown: (t3) => {
    var n2;
    F2 || ue2(true), E && E(t3, P2 ? Object.assign(Object.assign({}, e), { day: null !== (n2 = P2.dayIndex) && void 0 !== n2 ? n2 : e.day, _segmentInfo: P2 }) : f && p ? Object.assign(Object.assign({}, e), { day: p.startDayIndex, _segmentInfo: { dayIndex: p.startDayIndex, isFirst: p.isFirstSegment, isLast: p.isLastSegment } }) : e);
  }, onMouseUp: () => !F2 && ue2(false), onMouseLeave: () => !F2 && ue2(false), onTouchStart: he2, onTouchMove: ge2, onTouchEnd: me2, children: (() => {
    let t3;
    return t3 = v ? f && p ? Ge(Za, { segment: p, segmentIndex: null != y2 ? y2 : 0, isDragging: l2 || ve2, isResizing: i, isSelected: ve2, onMoveStart: E || (() => {
    }), onResizeStart: C, isMobile: A3, isDraggable: ae2, isEditable: te2, viewable: re2, isPopping: Z2 }) : e.allDay ? Ge(Va, { event: e, isEventSelected: ve2 }) : Ge(Ba, { event: e, app: L2, isEventSelected: ve2, hideTime: j3, isMobile: A3 }) : e.allDay ? Ge(qa, { event: e, isEditable: te2, onResizeStart: C }) : Ge(Ga, { event: e, app: L2, multiDaySegmentInfo: P2, isEditable: te2, isTouchEnabled: F2, isEventSelected: ve2, onResizeStart: C }), Ge(Ir, { store: Y2, generatorName: "eventContent", generatorArgs: Ne2, defaultContent: t3 });
  })() }), J3 && !O2 && Ge("div", { style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998, pointerEvents: "none" } }), (() => {
    if (!J3) return null;
    if (O2) return null;
    if (!U3) return null;
    const t3 = { event: e, position: U3, panelRef: q3, isAllDay: n, eventVisibility: pe2, calendarRef: o, selectedEventElementRef: G3, onEventUpdate: k3, onEventDelete: T3, onClose: ke2 };
    return (null == Y2 ? void 0 : Y2.isOverridden("eventDetailContent")) ? Ge(Ua, Object.assign({}, t3, { contentRenderer: Se2 })) : R3 ? Ge(Ua, Object.assign({}, t3, { contentRenderer: R3 })) : Ge(Wa, Object.assign({}, t3, { app: L2 }));
  })(), z2 && L2 && Ge(lo, { event: e, x: z2.x, y: z2.y, onClose: () => _4(null), app: L2, onDetailPanelToggle: H2, detailPanelKey: X2 })] });
};
var co = ({ app: e, currentDate: t2, currentWeekStart: n, events: r, currentDayEvents: a, organizedAllDayEvents: o, allDayAreaHeight: l2, timeSlots: i, eventLayouts: c, isToday: u, currentTime: h, selectedEventId: g, setSelectedEventId: m, newlyCreatedEventId: v, setNewlyCreatedEventId: f, detailPanelEventId: p, setDetailPanelEventId: y2, dragState: b, isDragging: w, handleMoveStart: D2, handleResizeStart: x2, handleCreateStart: E, handleCreateAllDayEvent: C, handleTouchStart: T3, handleTouchEnd: N2, handleTouchMove: S2, handleDragOver: M3, handleDrop: I2, handleEventUpdate: H2, handleEventDelete: R3, onDateChange: O2, customDetailPanelContent: P2, customEventDetailDialog: L2, calendarRef: A3, allDayRowRef: $3, switcherMode: j3, isMobile: Y2, isTouch: F2, setDraftEvent: z2, setIsDrawerOpen: _4, ALL_DAY_HEIGHT: Z2, HOUR_HEIGHT: W2, FIRST_HOUR: U3, LAST_HOUR: B3, showAllDay: V2, showStartOfDayLabel: q3 }) => {
  const { t: G3, locale: K2 } = In(), X2 = A(e.state.highlightedEventId), [J3, Q3] = d(null), ee2 = Bn(), te2 = () => {
    var e2;
    const t3 = null === (e2 = A3.current) || void 0 === e2 ? void 0 : e2.querySelector(".calendar-content");
    if (!t3) return 0;
    const n2 = t3.querySelector(".df-time-grid-row");
    return n2 ? n2.getBoundingClientRect().top - t3.getBoundingClientRect().top + t3.scrollTop : 0;
  }, ne2 = (e2, n2) => {
    var r2, a2, o2, l3;
    if (e2.preventDefault(), Y2) return;
    const i2 = new Date(t2);
    if (n2) i2.setHours(0, 0, 0, 0);
    else {
      const t3 = null === (a2 = null === (r2 = A3.current) || void 0 === r2 ? void 0 : r2.querySelector(".calendar-content")) || void 0 === a2 ? void 0 : a2.getBoundingClientRect();
      if (t3) {
        const n3 = (null === (l3 = null === (o2 = A3.current) || void 0 === o2 ? void 0 : o2.querySelector(".calendar-content")) || void 0 === l3 ? void 0 : l3.scrollTop) || 0, r3 = te2(), a3 = (e2.clientY - t3.top + n3 - r3) / W2 + U3, s = Math.floor(a3), d2 = Math.floor(60 * (a3 - s)), c2 = 15 * Math.round(d2 / 15), u2 = 60 === c2 ? s + 1 : s, h2 = 60 === c2 ? 0 : c2;
        i2.setHours(u2, h2, 0, 0);
      }
    }
    Q3({ x: e2.clientX, y: e2.clientY, date: i2 });
  };
  return Ge("div", { className: `flex-none ${"buttons" === j3 ? "" : "md:w-[60%]"} w-full md:w-[70%] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700`, onContextMenu: (e2) => e2.preventDefault(), children: [Ge("div", { className: `relative ${Xt} h-full`, children: [Ge("div", { onContextMenu: (e2) => e2.preventDefault(), style: { paddingRight: Y2 || !ee2 ? "0px" : "15px" }, children: Ge(Ya, { calendar: e, viewType: k2.DAY, currentDate: t2, customSubtitle: t2.toLocaleDateString(K2, { weekday: "long" }) }) }), Ge("div", V2 ? { className: Qt(St, "border-t border-gray-200 dark:border-gray-700 items-stretch"), ref: $3, style: { paddingRight: Y2 || !ee2 ? "0px" : "0.6875rem" }, onContextMenu: (e2) => ne2(e2, true), children: [Ge("div", { className: "df-all-day-label flex-shrink-0 p-1 text-xs font-medium text-gray-500 dark:text-gray-400 flex justify-end select-none w-12 text-[10px] md:w-20 md:text-xs flex items-center", onContextMenu: (e2) => e2.preventDefault(), children: G3("allDay") }), Ge("div", { className: Qt("flex flex-1 relative self-stretch", !Y2 && ee2 ? "border-r border-gray-200 dark:border-gray-700" : ""), children: Ge("div", { className: "w-full relative", style: { minHeight: `${l2}px` }, onClick: () => null == O2 ? void 0 : O2(t2), onMouseDown: (e2) => {
    const r2 = Math.floor((t2.getTime() - n.getTime()) / 864e5);
    null == C || C(e2, r2);
  }, onDblClick: (e2) => {
    const r2 = Math.floor((t2.getTime() - n.getTime()) / 864e5);
    null == C || C(e2, r2);
  }, onDragOver: M3, onDrop: (e2) => {
    I2(e2, t2, void 0, true);
  }, children: o.map((t3) => Ge(so, { event: t3, isAllDay: true, isDayView: true, segmentIndex: t3.row, allDayHeight: Z2, calendarRef: A3, isBeingDragged: w && (null == b ? void 0 : b.eventId) === t3.id && "move" === (null == b ? void 0 : b.mode), hourHeight: W2, firstHour: U3, onMoveStart: D2, onEventUpdate: H2, onEventDelete: R3, newlyCreatedEventId: v, onDetailPanelOpen: () => f(null), detailPanelEventId: p, onDetailPanelToggle: (e2) => y2(e2), selectedEventId: g, onEventSelect: (t4) => {
    const n2 = false !== e.getReadOnlyConfig().viewable, a2 = e.state.readOnly, o2 = r.find((e2) => e2.id === t4);
    (Y2 || F2) && o2 && n2 && !a2 ? (z2(o2), _4(true)) : (m(t4), e.state.highlightedEventId && (e.highlightEvent(null), X2.current = null));
  }, onEventLongPress: (e2) => {
    (Y2 || F2) && m(e2);
  }, customDetailPanelContent: P2, customEventDetailDialog: L2, app: e, isMobile: Y2, enableTouch: F2 }, t3.id)) }) })] } : { className: Qt("border-b border-gray-200 dark:border-gray-700", !Y2 && ee2 ? "pr-2.75" : "") }), Ge("div", { className: "relative overflow-y-auto calendar-content df-day-time-grid", style: { position: "relative", scrollbarGutter: "stable" }, children: Ge("div", { className: "relative flex", children: [u && h && (() => {
    const e2 = h, t3 = e2.getHours() + e2.getMinutes() / 60;
    if (t3 < U3 || t3 > B3) return null;
    return Ge("div", { className: Tt, style: { top: `${(t3 - U3) * W2}px`, width: "100%", height: 0, zIndex: 20, marginTop: "0.75rem" }, children: [Ge("div", { className: "flex items-center w-12 md:w-20", children: [Ge("div", { className: "relative w-full flex items-center" }), Ge("div", { className: Nt, children: ge(t3) })] }), Ge("div", { className: "flex-1 flex items-center", children: Ge("div", { className: "df-current-time-bar h-0.5 w-full bg-primary relative" }) })] });
  })(), Ge("div", { className: "df-time-column flex-shrink-0 border-gray-200 dark:border-gray-700 w-12 md:w-20", onContextMenu: (e2) => e2.preventDefault(), children: [Ge("div", { className: "h-3" }), i.map((e2, t3) => Ge("div", { className: Et, children: Ge("div", { className: `${Ct} text-[10px] md:text-[12px]`, children: q3 && 0 === t3 ? "" : e2.label }) }, t3))] }), Ge("div", { className: "grow select-none", children: [Ge("div", { className: Qt(Ft, !Y2 && ee2 ? "border-r" : "", "border-t-0"), children: Ge("div", { className: `${zt} -left-9.5`, style: { top: "auto", bottom: "-0.625rem" }, children: q3 ? ge(U3) : "" }) }), Ge("div", { className: "relative", style: { WebkitTouchCallout: "none" }, children: [i.map((e2, r2) => Ge("div", { className: Qt(kt, !Y2 && ee2 ? "border-r" : ""), onClick: () => null == O2 ? void 0 : O2(t2), onDblClick: (e3) => {
    var r3, a2, o2, l3;
    const i2 = Math.floor((t2.getTime() - n.getTime()) / 864e5), s = null === (a2 = null === (r3 = A3.current) || void 0 === r3 ? void 0 : r3.querySelector(".calendar-content")) || void 0 === a2 ? void 0 : a2.getBoundingClientRect();
    if (!s) return;
    const d2 = (null === (l3 = null === (o2 = A3.current) || void 0 === o2 ? void 0 : o2.querySelector(".calendar-content")) || void 0 === l3 ? void 0 : l3.scrollTop) || 0, c2 = te2(), u2 = e3.clientY - s.top + d2 - c2;
    null == E || E(e3, i2, U3 + u2 / W2);
  }, onTouchStart: (e3) => {
    const r3 = Math.floor((t2.getTime() - n.getTime()) / 864e5);
    T3(e3, r3);
  }, onTouchEnd: N2, onTouchMove: S2, onDragOver: M3, onDrop: (e3) => {
    var n2, r3, a2, o2;
    const l3 = null === (r3 = null === (n2 = A3.current) || void 0 === n2 ? void 0 : n2.querySelector(".calendar-content")) || void 0 === r3 ? void 0 : r3.getBoundingClientRect();
    if (!l3) return;
    const i2 = (null === (o2 = null === (a2 = A3.current) || void 0 === a2 ? void 0 : a2.querySelector(".calendar-content")) || void 0 === o2 ? void 0 : o2.scrollTop) || 0, s = te2(), d2 = e3.clientY - l3.top + i2 - s, c2 = Math.floor(U3 + d2 / W2);
    I2(e3, t2, c2);
  }, onContextMenu: (e3) => ne2(e3, false) }, r2)), Ge("div", { className: Qt(Ft, !Y2 && ee2 ? "border-r" : ""), children: Ge("div", { className: `${zt} -left-9.5`, children: "00:00" }) }), Ge("div", { className: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none", children: a.filter((e2) => !e2.allDay).map((t3) => {
    const n2 = c.get(t3.id);
    return Ge(so, { event: t3, layout: n2, isDayView: true, calendarRef: A3, isBeingDragged: w && (null == b ? void 0 : b.eventId) === t3.id && "move" === (null == b ? void 0 : b.mode), hourHeight: W2, firstHour: U3, onMoveStart: D2, onResizeStart: x2, onEventUpdate: H2, onEventDelete: R3, newlyCreatedEventId: v, onDetailPanelOpen: () => f(null), detailPanelEventId: p, onDetailPanelToggle: (e2) => y2(e2), selectedEventId: g, onEventSelect: (t4) => {
      const n3 = false !== e.getReadOnlyConfig().viewable, a2 = r.find((e2) => e2.id === t4);
      (Y2 || F2) && a2 && n3 ? (z2(a2), _4(true)) : (m(t4), e.state.highlightedEventId && (e.highlightEvent(null), X2.current = null));
    }, onEventLongPress: (e2) => {
      (Y2 || F2) && m(e2);
    }, customDetailPanelContent: P2, customEventDetailDialog: L2, app: e, isMobile: Y2, enableTouch: F2 }, t3.id);
  }) })] })] })] }) })] }), J3 && Ge(oo, { x: J3.x, y: J3.y, date: J3.date, viewType: k2.DAY, onClose: () => Q3(null), app: e, onCreateEvent: () => {
    if (E) {
      const e2 = Math.floor((t2.getTime() - n.getTime()) / 864e5);
      if (0 === J3.date.getHours() && 0 === J3.date.getMinutes()) null == C || C({ clientX: J3.x, clientY: J3.y }, e2);
      else {
        const t3 = J3.date.getHours() + J3.date.getMinutes() / 60, n2 = { preventDefault: () => {
        }, stopPropagation: () => {
        }, clientX: J3.x, clientY: J3.y };
        E(n2, e2, t3);
      }
    }
  } })] });
};
var uo = (e) => {
  const t2 = e.getDay(), n = e.getDate() - t2 + (0 === t2 ? -6 : 1), r = new Date(e);
  return r.setDate(n), r.setHours(0, 0, 0, 0), r;
};
var ho = ({ app: e, config: t2, customDetailPanelContent: n, customEventDetailDialog: r, calendarRef: a, switcherMode: o = "buttons", selectedEventId: l2, onEventSelect: i, onDateChange: u, detailPanelEventId: m, onDetailPanelToggle: v }) => {
  const f = e.getEvents(), { screenSize: p } = Sr(), y2 = "desktop" !== p, [b, w] = d(false), { HOUR_HEIGHT: D2 = La.HOUR_HEIGHT, FIRST_HOUR: x2 = La.FIRST_HOUR, LAST_HOUR: E = La.LAST_HOUR, ALL_DAY_HEIGHT: C = La.ALL_DAY_HEIGHT, showAllDay: T3 = true } = t2, N2 = !T3;
  y(() => {
    w("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  const S2 = e.getCustomMobileEventRenderer() || Vr, [M3, I2] = d(null), [H2, R3] = d(null), [O2, P2] = d(null), L2 = void 0 !== l2 ? l2 : H2, A3 = void 0 !== m ? m : O2, $3 = T(() => L2 && f.find((e2) => e2.id === L2) || null, [L2, f]), j3 = (e2) => {
    i ? i(e2) : R3(e2);
  }, [Y2, F2] = d(null), [z2, _4] = d(false), [W2, B3] = d(null), V2 = A(null), q3 = e.getCurrentDate(), [G3, K2] = d(q3), X2 = A(q3.getTime());
  q3.getTime() !== X2.current && (X2.current = q3.getTime(), q3.getFullYear() === G3.getFullYear() && q3.getMonth() === G3.getMonth() || K2(q3));
  const J3 = q((t3) => {
    K2((n2) => {
      const r2 = new Date(n2.getFullYear(), n2.getMonth() + t3, 1);
      return e.setVisibleMonth(r2), r2;
    });
  }, [e]), Q3 = A(e.state.highlightedEventId);
  y(() => {
    var t3;
    if (e.state.highlightedEventId !== Q3.current) if (e.state.highlightedEventId) {
      j3(e.state.highlightedEventId);
      const n2 = e.getEvents().find((t4) => t4.id === e.state.highlightedEventId);
      if (n2 && !n2.allDay) {
        const e2 = ne(n2.start), r2 = null === (t3 = a.current) || void 0 === t3 ? void 0 : t3.querySelector(".calendar-content");
        if (r2) {
          const t4 = (e2 - x2) * D2;
          requestAnimationFrame(() => {
            r2.scrollTo({ top: Math.max(0, t4 - 100), behavior: "smooth" });
          });
        }
      }
    } else j3(null);
    Q3.current = e.state.highlightedEventId;
  }, [e.state.highlightedEventId, x2, D2, a, e]);
  const ee2 = A(null), te2 = T(() => uo(q3), [q3]), re2 = T(() => ((e2, t3, n2) => {
    const r2 = new Date(t3);
    r2.setHours(0, 0, 0, 0);
    const a2 = new Date(t3);
    return a2.setHours(23, 59, 59, 999), e2.filter((e3) => {
      const t4 = U2(e3.start), n3 = U2(e3.end);
      if (e3.allDay) {
        const e4 = new Date(t4);
        e4.setHours(0, 0, 0, 0);
        const o2 = new Date(n3);
        return o2.setHours(0, 0, 0, 0), e4 <= a2 && o2 >= r2;
      }
      return t4 < a2 && n3 > r2;
    }).map((e3) => {
      const t4 = U2(e3.start), r3 = Math.floor((t4.getTime() - n2.getTime()) / 864e5), a3 = Math.max(0, Math.min(6, r3));
      return Object.assign(Object.assign({}, e3), { day: a3 });
    });
  })(f, q3, te2), [f, q3, te2]), ae2 = T(() => ((e2, t3) => {
    const n2 = new Date(t3);
    n2.setHours(0, 0, 0, 0);
    const r2 = new Date(n2);
    return r2.setDate(r2.getDate() + 1), e2.filter((e3) => !e3.allDay).map((e3) => {
      const t4 = U2(e3.start), a2 = U2(e3.end);
      let o2 = e3.start, l3 = e3.end, i2 = false;
      return t4 < n2 && (o2 = Z(n2), i2 = true), a2 > r2 && (l3 = Z(r2), i2 = true), Object.assign(Object.assign({}, e3), { start: i2 ? o2 : e3.start, end: i2 ? l3 : e3.end, day: 0 });
    });
  })(re2, q3), [re2, q3]), oe2 = T(() => Ia.calculateDayEventLayouts(ae2, { viewType: "day" }), [ae2]), le2 = T(() => ((e2) => {
    const t3 = e2.filter((e3) => e3.allDay);
    t3.sort((e3, t4) => {
      const n3 = U2(e3.start), r3 = U2(t4.start);
      if (n3.getTime() !== r3.getTime()) return n3.getTime() - r3.getTime();
      const a2 = U2(e3.end);
      return U2(t4.end).getTime() - a2.getTime();
    });
    const n2 = [], r2 = [];
    return t3.forEach((e3) => {
      let t4 = 0, a2 = false;
      for (; !a2; ) n2[t4] ? n2[t4].some((t5) => {
        const n3 = U2(e3.start), r3 = U2(e3.end), a3 = U2(t5.start);
        return n3 <= U2(t5.end) && a3 <= r3;
      }) ? t4++ : (n2[t4].push(e3), r2.push(Object.assign(Object.assign({}, e3), { row: t4 })), a2 = true) : (n2[t4] = [e3], r2.push(Object.assign(Object.assign({}, e3), { row: t4 })), a2 = true);
    }), r2;
  })(re2), [re2]), ie2 = T(() => {
    if (0 === le2.length) return C;
    return (Math.max(...le2.map((e2) => e2.row)) + 1) * C;
  }, [le2, C]), { handleMoveStart: se2, handleCreateStart: de2, handleResizeStart: ce2, handleCreateAllDayEvent: ue2, dragState: he2, isDragging: me2 } = Pa(e, { calendarRef: a, allDayRowRef: T3 ? ee2 : void 0, viewType: k2.DAY, onEventsUpdate: (t3) => {
    const n2 = t3(re2), r2 = new Set(n2.map((e2) => e2.id)), a2 = re2.filter((e2) => !r2.has(e2.id)), o2 = new Set(re2.map((e2) => e2.id)), l3 = n2.filter((e2) => !o2.has(e2.id)), i2 = n2.filter((e2) => {
      if (!o2.has(e2.id)) return false;
      const t4 = re2.find((t5) => t5.id === e2.id);
      return t4 && (U2(t4.start).getTime() !== U2(e2.start).getTime() || U2(t4.end).getTime() !== U2(e2.end).getTime() || t4.day !== e2.day || ne(t4.start) !== ne(e2.start) || ne(t4.end) !== ne(e2.end) || t4.title !== e2.title);
    });
    e.applyEventsChanges({ delete: a2.map((e2) => e2.id), add: l3, update: i2.map((e2) => ({ id: e2.id, updates: e2 })) });
  }, onEventCreate: (t3) => {
    y2 ? (B3(t3), _4(true)) : (e.addEvent(t3), F2(t3.id));
  }, onEventEdit: () => {
  }, currentWeekStart: te2, events: re2, calculateNewEventLayout: (e2, t3, n2) => ((e3, t4, n3, r2, a2) => {
    const o2 = new Date(r2), l3 = new Date(r2);
    o2.setHours(Math.floor(t4), t4 % 1 * 60, 0, 0), l3.setHours(Math.floor(n3), n3 % 1 * 60, 0, 0);
    const i2 = [...a2, { id: "-1", title: "Temp", day: 0, start: Z(o2), end: Z(l3), calendarId: "blue", allDay: false }];
    return Ia.calculateDayEventLayouts(i2, { viewType: "day" }).get("-1") || null;
  })(0, t3, n2, q3, ae2), calculateDragLayout: (e2, t3, n2, r2) => ((e3, t4, n3, r3, a2, o2) => {
    const l3 = o2.filter((t5) => t5.id !== e3.id), i2 = new Date(a2), s = new Date(i2);
    s.setHours(Math.floor(n3), n3 % 1 * 60, 0, 0);
    const d2 = new Date(i2);
    d2.setHours(Math.floor(r3), r3 % 1 * 60, 0, 0);
    const c = [...l3, Object.assign(Object.assign({}, e3), { start: Z(s), end: Z(d2), day: 0 })];
    return 0 === c.length ? null : Ia.calculateDayEventLayouts(c, { viewType: "day" }).get(e3.id) || null;
  })(e2, 0, n2, r2, q3, ae2), TIME_COLUMN_WIDTH: y2 ? 48 : 80, isMobile: y2 }), { handleDrop: ve2, handleDragOver: fe2 } = Aa({ app: e, onEventCreated: (e2) => {
    F2(e2.id);
  } }), pe2 = Array.from({ length: 24 }, (e2, t3) => ({ hour: t3 + x2, label: ge(t3 + x2) })), ye2 = q((t3) => {
    const n2 = new Date(t3.getFullYear(), t3.getMonth(), t3.getDate());
    e.setCurrentDate(n2), K2(new Date(n2.getFullYear(), n2.getMonth(), 1));
  }, [e]), be2 = T(() => {
    const e2 = /* @__PURE__ */ new Date();
    e2.setHours(0, 0, 0, 0);
    const t3 = new Date(q3);
    return t3.setHours(0, 0, 0, 0), t3.getTime() === e2.getTime();
  }, [q3]);
  return y(() => {
    I2(/* @__PURE__ */ new Date());
    const e2 = setInterval(() => I2(/* @__PURE__ */ new Date()), 6e4);
    return () => clearInterval(e2);
  }, []), Ge("div", { className: "df-day-view flex h-full bg-gray-50 dark:bg-gray-800", children: [Ge(co, { app: e, currentDate: q3, currentWeekStart: te2, events: f, currentDayEvents: re2, organizedAllDayEvents: le2, allDayAreaHeight: ie2, timeSlots: pe2, eventLayouts: oe2, isToday: be2, currentTime: M3, selectedEventId: L2, setSelectedEventId: j3, newlyCreatedEventId: Y2, setNewlyCreatedEventId: F2, detailPanelEventId: A3, setDetailPanelEventId: (e2) => {
    v ? v(e2) : P2(e2);
  }, dragState: he2, isDragging: me2, handleMoveStart: se2, handleResizeStart: ce2, handleCreateStart: de2, handleCreateAllDayEvent: ue2, handleTouchStart: (e2, t3) => {
    if (!y2 && !b) return;
    const n2 = e2.touches[0], r2 = n2.clientX, o2 = n2.clientY, l3 = e2.currentTarget;
    V2.current = setTimeout(() => {
      var e3, n3, i2;
      const s = null === (n3 = null === (e3 = a.current) || void 0 === e3 ? void 0 : e3.querySelector(".calendar-content")) || void 0 === n3 ? void 0 : n3.getBoundingClientRect();
      if (!s) return;
      const d2 = null === (i2 = a.current) || void 0 === i2 ? void 0 : i2.querySelector(".calendar-content"), c = d2 ? d2.scrollTop : 0, u2 = o2 - s.top + c;
      null == de2 || de2({ preventDefault: () => {
      }, stopPropagation: () => {
      }, touches: [{ clientX: r2, clientY: o2 }], changedTouches: [{ clientX: r2, clientY: o2 }], target: l3, currentTarget: l3, cancelable: true }, t3, x2 + u2 / D2);
    }, 500);
  }, handleTouchEnd: () => {
    V2.current && (clearTimeout(V2.current), V2.current = null);
  }, handleTouchMove: () => {
    V2.current && (clearTimeout(V2.current), V2.current = null);
  }, handleDragOver: fe2, handleDrop: ve2, handleEventUpdate: (t3) => {
    e.updateEvent(t3.id, t3);
  }, handleEventDelete: (t3) => {
    e.deleteEvent(t3);
  }, onDateChange: u, customDetailPanelContent: n, customEventDetailDialog: r, calendarRef: a, allDayRowRef: ee2, switcherMode: o, isMobile: y2, isTouch: b, setDraftEvent: B3, setIsDrawerOpen: _4, ALL_DAY_HEIGHT: C, HOUR_HEIGHT: D2, FIRST_HOUR: x2, LAST_HOUR: E, showAllDay: T3, showStartOfDayLabel: N2 }), Ge(ja, { app: e, currentDate: q3, visibleMonth: G3, currentDayEvents: re2, selectedEvent: $3, setSelectedEvent: (e2) => j3(e2 ? e2.id : null), handleMonthChange: J3, handleDateSelect: ye2, switcherMode: o }), Ge(S2, { isOpen: z2, onClose: () => {
    _4(false), B3(null);
  }, onSave: (t3) => {
    f.find((e2) => e2.id === t3.id) ? e.updateEvent(t3.id, t3) : e.addEvent(t3), _4(false), B3(null);
  }, draftEvent: W2, app: e })] });
};
var go = { enableDrag: true, enableResize: true, enableCreate: true, showMiniCalendar: true, showAllDay: true, scrollToCurrentTime: true, hourHeight: 72, firstHour: 0, lastHour: 24, dragConfig: { supportedViews: [k2.DAY], enableAllDayCreate: true }, eventsConfig: { enableAutoRecalculate: true, enableValidation: true } };
var mo = (e = {}) => {
  const t2 = Object.assign(Object.assign({}, go), e), n = (e2) => _(ta, { viewType: k2.DAY, originalComponent: ho, app: e2.app, config: t2, className: "day-view-factory", customDetailPanelContent: e2.customDetailPanelContent, customEventDetailDialog: e2.customEventDetailDialog, calendarRef: e2.calendarRef, switcherMode: e2.switcherMode, meta: e2.meta, selectedEventId: e2.selectedEventId, onEventSelect: e2.onEventSelect, detailPanelEventId: e2.detailPanelEventId, onDetailPanelToggle: e2.onDetailPanelToggle });
  return n.displayName = "DayViewAdapter", { type: k2.DAY, component: n, config: t2 };
};
var vo = ({ app: e, weekDaysLabels: t2, mobileWeekDaysLabels: n, weekDates: a, currentWeekStart: o, gridWidth: l2, allDayAreaHeight: i, organizedAllDaySegments: d2, allDayLabelText: c, isMobile: u, isTouch: h, showAllDay: g = true, calendarRef: m, allDayRowRef: v, topFrozenContentRef: f, ALL_DAY_HEIGHT: p, HOUR_HEIGHT: y2, FIRST_HOUR: b, dragState: w, isDragging: D2, handleMoveStart: x2, handleResizeStart: E, handleEventUpdate: C, handleEventDelete: T3, onDateChange: N2, newlyCreatedEventId: S2, setNewlyCreatedEventId: M3, selectedEventId: I2, setSelectedEventId: H2, detailPanelEventId: R3, setDetailPanelEventId: O2, handleCreateAllDayEvent: P2, handleDragOver: L2, handleDrop: A3, customDetailPanelContent: $3, customEventDetailDialog: j3, events: Y2, setDraftEvent: F2, setIsDrawerOpen: z2 }) => {
  const _4 = { flexShrink: 0 }, [Z2, W2] = d(null), U3 = Bn();
  return Ge("div", { className: `flex flex-none ${g ? "border-b border-gray-200 dark:border-gray-700" : ""} relative z-10`, onContextMenu: (e2) => e2.preventDefault(), children: [g && Ge("div", { className: "w-12 md:w-20 shrink-0 bg-white dark:bg-gray-900 z-20 flex flex-col", onContextMenu: (e2) => e2.preventDefault(), children: [Ge("div", { className: "flex-1 border-b border-gray-200 dark:border-gray-700" }), Ge("div", { className: "flex items-center justify-end p-1 text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400 select-none", style: { minHeight: `${i}px` }, children: c })] }), Ge("div", { className: "flex-1 overflow-x-hidden overflow-y-auto relative", style: { scrollbarGutter: "stable" }, children: Ge("div", { ref: f, className: "flex flex-col", style: { width: l2, minWidth: "100%" }, children: [Ge("div", { className: "df-week-header flex border-b border-gray-200 dark:border-gray-700", style: { marginRight: U3 ? "-50px" : "0px", paddingRight: U3 ? "50px" : "0px" }, children: t2.map((e2, t3) => Ge("div", { className: "df-week-day-cell flex flex-1 justify-center items-center text-center text-gray-500 dark:text-gray-400 text-sm p-1 select-none " + (u ? "flex-col gap-0" : ""), style: _4, children: Ge(k, u ? { children: [Ge("div", { className: "text-[12px] leading-tight text-gray-500 font-medium", children: n[t3] }), Ge("div", { className: `${wt} w-7 h-7 text-base font-medium ${a[t3].isToday ? Lt : ""}`, children: a[t3].date })] } : { children: [Ge("div", { className: "inline-flex items-center justify-center text-sm mt-1 mr-1", children: e2 }), Ge("div", { className: `${wt} ${a[t3].isToday ? Lt : ""}`, children: a[t3].date })] }) }, t3)) }), g && Ge("div", { className: `${St} border-none`, ref: v, style: { minHeight: `${i}px` }, children: Ge("div", { className: "df-all-day-content flex flex-1 relative", style: { minHeight: `${i}px` }, children: [t2.map((e2, n2) => {
    const r = new Date(o);
    return r.setDate(o.getDate() + n2), Ge("div", { className: "df-all-day-cell flex-1 border-r border-gray-200 dark:border-gray-700 relative " + (n2 !== t2.length - 1 || !u && U3 ? "" : "border-r-0"), style: Object.assign({ minHeight: `${i}px` }, _4), onClick: () => {
      const e3 = new Date(o);
      e3.setDate(o.getDate() + n2), null == N2 || N2(e3);
    }, onMouseDown: (e3) => null == P2 ? void 0 : P2(e3, n2), onDblClick: (e3) => null == P2 ? void 0 : P2(e3, n2), onDragOver: L2, onDrop: (e3) => {
      A3(e3, r, void 0, true);
    }, onContextMenu: (e3) => ((e4, t3) => {
      if (e4.preventDefault(), u) return;
      const n3 = new Date(o);
      n3.setDate(o.getDate() + t3), n3.setHours(0, 0, 0, 0), W2({ x: e4.clientX, y: e4.clientY, date: n3 });
    })(e3, n2) }, `allday-${n2}`);
  }), Ge("div", { className: "absolute inset-0 pointer-events-none", children: d2.map((t3) => Ge(so, { event: t3.event, segment: t3, segmentIndex: t3.row, isAllDay: true, isMultiDay: true, allDayHeight: p, calendarRef: m, isBeingDragged: D2 && (null == w ? void 0 : w.eventId) === t3.event.id && "move" === (null == w ? void 0 : w.mode), hourHeight: y2, firstHour: b, onMoveStart: x2, onResizeStart: E, onEventUpdate: C, onEventDelete: T3, newlyCreatedEventId: S2, onDetailPanelOpen: () => M3(null), selectedEventId: I2, detailPanelEventId: R3, onEventSelect: (t4) => {
    const n2 = false !== e.getReadOnlyConfig().viewable, r = e.state.readOnly;
    if ((u || h) && t4 && n2 && !r) {
      const e2 = Y2.find((e3) => e3.id === t4);
      if (e2) return F2(e2), void z2(true);
    }
    H2(t4);
  }, onEventLongPress: (e2) => {
    (u || h) && H2(e2);
  }, onDetailPanelToggle: (e2) => O2(e2), customDetailPanelContent: $3, customEventDetailDialog: j3, app: e, isMobile: u, enableTouch: h }, t3.id)) })] }) })] }) }), Z2 && Ge(oo, { x: Z2.x, y: Z2.y, date: Z2.date, viewType: k2.WEEK, onClose: () => W2(null), app: e, onCreateEvent: () => {
    const e2 = Math.floor((Z2.date.getTime() - o.getTime()) / 864e5);
    null == P2 || P2({ clientX: Z2.x, clientY: Z2.y }, e2);
  } })] });
};
var fo = ({ app: e, timeSlots: t2, weekDaysLabels: n, currentWeekStart: r, currentWeekEvents: a, eventLayouts: o, gridWidth: l2, isMobile: i, isTouch: c, scrollerRef: u, timeGridRef: h, leftFrozenContentRef: g, calendarRef: m, handleScroll: v, handleCreateStart: f, handleTouchStart: p, handleTouchEnd: y2, handleTouchMove: b, handleDragOver: w, handleDrop: D2, dragState: x2, isDragging: E, handleMoveStart: C, handleResizeStart: T3, handleEventUpdate: N2, handleEventDelete: S2, onDateChange: M3, newlyCreatedEventId: I2, setNewlyCreatedEventId: H2, selectedEventId: R3, setSelectedEventId: O2, detailPanelEventId: P2, setDetailPanelEventId: L2, customDetailPanelContent: A3, customEventDetailDialog: $3, events: j3, setDraftEvent: Y2, setIsDrawerOpen: F2, isCurrentWeek: z2, currentTime: _4, HOUR_HEIGHT: Z2, FIRST_HOUR: W2, LAST_HOUR: U3, showStartOfDayLabel: B3 }) => {
  const V2 = { flexShrink: 0 }, q3 = A(e.state.highlightedEventId), [G3, K2] = d(null), X2 = Bn();
  return Ge("div", { className: "flex flex-1 overflow-hidden relative", children: [Ge("div", { className: "w-12 md:w-20 shrink-0 overflow-hidden relative bg-white dark:bg-gray-900 z-10", onContextMenu: (e2) => e2.preventDefault(), children: Ge("div", { ref: g, children: [Ge("div", { className: "h-3 relative", children: Ge("div", { className: "absolute -bottom-1 right-2 text-[10px] md:text-[12px] text-gray-500 dark:text-gray-400 select-none", children: B3 ? ge(W2) : "" }) }), t2.map((e2, t3) => Ge("div", { className: Et, children: Ge("div", { className: `${Ct} text-[10px] md:text-[12px]`, children: B3 && 0 === t3 ? "" : e2.label }) }, t3)), Ge("div", { className: "relative", children: Ge("div", { className: `${Ct} text-[10px] md:text-[12px]`, children: "00:00" }) }), z2 && _4 && (() => {
    const e2 = _4, t3 = e2.getHours() + e2.getMinutes() / 60;
    if (t3 < W2 || t3 > U3) return null;
    return Ge("div", { className: "absolute left-0 w-full z-20 pointer-events-none flex items-center justify-end", style: { top: `${(t3 - W2) * Z2}px`, transform: "translateY(-50%)", marginTop: "0.75rem" }, children: Ge("div", { className: Nt, children: ge(t3) }) });
  })()] }) }), Ge("div", { ref: u, className: "flex-1 overflow-auto relative calendar-content snap-x snap-mandatory", onScroll: v, children: Ge("div", { className: "flex", style: { width: l2, minWidth: "100%" }, children: Ge("div", { className: "grow", children: [Ge("div", { className: `${Ft} border-t-0 flex`, children: n.map((e2, t3) => Ge("div", { className: `flex-1 relative ${t3 !== n.length - 1 || !i && X2 ? "border-r" : ""} border-gray-200 dark:border-gray-700`, style: V2 }, `top-${t3}`)) }), Ge("div", { ref: h, className: "relative", children: [z2 && _4 && (() => {
    const e2 = _4, t3 = e2.getHours() + e2.getMinutes() / 60;
    if (t3 < W2 || t3 > U3) return null;
    const r2 = e2.getDay(), a2 = 0 === r2 ? 6 : r2 - 1;
    return Ge("div", { className: Tt, style: { top: `${(t3 - W2) * Z2}px`, width: "100%", height: 0, zIndex: 20 }, children: [Ge("div", { className: "flex items-center w-0" }), Ge("div", { className: "flex flex-1", children: n.map((e3, t4) => Ge("div", { className: "flex-1 flex items-center", children: Ge("div", { className: "h-0.5 w-full relative " + (t4 === a2 ? "bg-primary" : "bg-primary/30"), style: { zIndex: 9999 }, children: t4 === a2 && 0 !== a2 && Ge("div", { className: "absolute w-2 h-2 bg-primary rounded-full", style: { top: "-3px", left: "-4px" } }) }) }, t4)) })] });
  })(), t2.map((e2, t3) => Ge("div", { className: kt, children: n.map((a2, o2) => {
    const l3 = new Date(r);
    return l3.setDate(r.getDate() + o2), Ge("div", { className: "df-time-grid-cell flex-1 relative border-r border-gray-200 dark:border-gray-700 select-none snap-start " + (o2 !== n.length - 1 || !i && X2 ? "" : "border-r-0"), style: V2, onClick: () => {
      const e3 = new Date(r);
      e3.setDate(r.getDate() + o2), null == M3 || M3(e3);
    }, onDblClick: (t4) => {
      null == f || f(t4, o2, e2.hour);
    }, onTouchStart: (t4) => p(t4, o2, e2.hour), onTouchEnd: y2, onTouchMove: b, onDragOver: w, onDrop: (t4) => {
      D2(t4, l3, e2.hour);
    }, onContextMenu: (t4) => ((e3, t5, n2) => {
      if (e3.preventDefault(), i) return;
      const a3 = new Date(r);
      if (a3.setDate(r.getDate() + t5), h.current) {
        const t6 = h.current.getBoundingClientRect(), n3 = (e3.clientY - t6.top) / Z2 + W2, r2 = Math.floor(n3), o3 = Math.floor(60 * (n3 - r2)), l4 = 15 * Math.round(o3 / 15), i2 = 60 === l4 ? r2 + 1 : r2, s = 60 === l4 ? 0 : l4;
        a3.setHours(i2, s, 0, 0);
      } else a3.setHours(n2, 0, 0, 0);
      K2({ x: e3.clientX, y: e3.clientY, date: a3 });
    })(t4, o2, e2.hour) }, `${t3}-${o2}`);
  }) }, t3)), Ge("div", { className: `${Ft} flex`, children: n.map((e2, t3) => Ge("div", { className: `flex-1 relative ${t3 !== n.length - 1 || !i && X2 ? "border-r" : ""} border-gray-200 dark:border-gray-700`, style: V2 }, `24-${t3}`)) }), n.map((t3, n2) => {
    const l3 = Se(n2, a), s = [];
    return l3.forEach((e2) => {
      const t4 = _a(e2, r);
      if (t4.length > 0) {
        const r2 = t4.find((e3) => e3.dayIndex === n2);
        r2 && s.push({ event: e2, segmentInfo: Object.assign(Object.assign({}, r2), { dayIndex: n2 }) });
      } else s.push({ event: e2 });
    }), a.forEach((e2) => {
      if (e2.allDay || e2.day === n2) return;
      const t4 = _a(e2, r).find((e3) => e3.dayIndex === n2);
      t4 && s.push({ event: e2, segmentInfo: Object.assign(Object.assign({}, t4), { dayIndex: n2 }) });
    }), Ge("div", { className: "absolute top-0 pointer-events-none", style: { left: `calc(${100 / 7 * n2}%)`, width: 100 / 7 + "%", height: "100%" }, children: s.map(({ event: t4, segmentInfo: r2 }) => {
      const a2 = o.get(n2), l4 = null == a2 ? void 0 : a2.get(t4.id);
      return Ge(so, { event: t4, layout: l4, calendarRef: m, isBeingDragged: E && (null == x2 ? void 0 : x2.eventId) === t4.id && "move" === (null == x2 ? void 0 : x2.mode), hourHeight: Z2, firstHour: W2, onMoveStart: C, onResizeStart: T3, onEventUpdate: N2, onEventDelete: S2, newlyCreatedEventId: I2, onDetailPanelOpen: () => H2(null), selectedEventId: R3, detailPanelEventId: P2, onEventSelect: (t5) => {
        const n3 = false !== e.getReadOnlyConfig().viewable, r3 = e.state.readOnly;
        if ((i || c) && t5 && n3 && !r3) {
          const e2 = j3.find((e3) => e3.id === t5);
          if (e2) return Y2(e2), void F2(true);
        }
        O2(t5), e.state.highlightedEventId && (e.highlightEvent(null), q3.current = null);
      }, onEventLongPress: (e2) => {
        (i || c) && O2(e2);
      }, onDetailPanelToggle: (e2) => L2(e2), customDetailPanelContent: A3, customEventDetailDialog: $3, multiDaySegmentInfo: r2, app: e, isMobile: i, enableTouch: c }, r2 ? `${t4.id}-seg-${n2}` : t4.id);
    }) }, `events-day-${n2}`);
  })] })] }) }) }), G3 && Ge(oo, { x: G3.x, y: G3.y, date: G3.date, viewType: k2.WEEK, onClose: () => K2(null), app: e, onCreateEvent: () => {
    if (f) {
      const e2 = new Date(r);
      e2.setHours(0, 0, 0, 0);
      const t3 = new Date(G3.date);
      t3.setHours(0, 0, 0, 0);
      const n2 = t3.getTime() - e2.getTime(), a2 = Math.round(n2 / 864e5), o2 = G3.date.getHours() + G3.date.getMinutes() / 60, l3 = { preventDefault: () => {
      }, stopPropagation: () => {
      }, clientX: G3.x, clientY: G3.y };
      f(l3, a2, o2);
    }
  } })] });
};
var po = ({ app: e, config: t2, customDetailPanelContent: n, customEventDetailDialog: r, calendarRef: a, selectedEventId: o, onEventSelect: l2, onDateChange: i, detailPanelEventId: u, onDetailPanelToggle: g }) => {
  const { t: m, getWeekDaysLabels: v, locale: f } = In(), p = e.getCurrentDate(), y2 = e.getEvents(), { screenSize: b } = Sr(), w = "desktop" !== b, D2 = "mobile" === b ? 48 : 80, x2 = A(null), [E, C] = d(false), { HOUR_HEIGHT: T3 = La.HOUR_HEIGHT, FIRST_HOUR: N2 = La.FIRST_HOUR, LAST_HOUR: S2 = La.LAST_HOUR, ALL_DAY_HEIGHT: M3 = La.ALL_DAY_HEIGHT, showAllDay: I2 = true } = t2, H2 = !I2;
  y(() => {
    C("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  const R3 = e.getCustomMobileEventRenderer() || Vr, O2 = T(() => uo(p), [p]), [P2, L2] = d(null), [A3, $3] = d(null), [j3, Y2] = d(null), F2 = void 0 !== o ? o : A3, z2 = void 0 !== u ? u : j3, _4 = (e2) => {
    l2 ? l2(e2) : $3(e2);
  }, W2 = (e2) => {
    g ? g(e2) : Y2(e2);
  }, [B3, V2] = d(null), [q3, G3] = d(false), [K2, X2] = d(null), J3 = A(null), Q3 = A(null), ee2 = A(null), te2 = A(null), ae2 = A(null), oe2 = T(() => ((e2, t3) => {
    const n2 = new Date(t3);
    return n2.setDate(t3.getDate() + 6), n2.setHours(23, 59, 59, 999), e2.filter((e3) => {
      const r2 = U2(e3.start);
      r2.setHours(0, 0, 0, 0);
      const a2 = U2(e3.end);
      return a2.setHours(23, 59, 59, 999), a2 >= t3 && r2 <= n2;
    }).map((e3) => {
      const n3 = U2(e3.start), r2 = Math.floor((n3.getTime() - t3.getTime()) / 864e5), a2 = Math.max(0, Math.min(6, r2));
      return Object.assign(Object.assign({}, e3), { day: a2 });
    });
  })(y2, O2), [y2, O2]), le2 = A(e.state.highlightedEventId);
  y(() => {
    if (e.state.highlightedEventId !== le2.current) if (e.state.highlightedEventId) {
      _4(e.state.highlightedEventId);
      const t3 = oe2.find((t4) => t4.id === e.state.highlightedEventId);
      if (t3 && !t3.allDay) {
        const e2 = ne(t3.start), n2 = ee2.current;
        if (n2) {
          const t4 = (e2 - N2) * T3;
          requestAnimationFrame(() => {
            n2.scrollTo({ top: Math.max(0, t4 - 100), behavior: "smooth" });
          });
        }
      }
    } else _4(null);
    le2.current = e.state.highlightedEventId;
  }, [e.state.highlightedEventId, oe2, N2, T3]);
  const ie2 = T(() => ((e2, t3) => {
    const n2 = za(e2, t3).filter((e3) => e3.event.allDay);
    n2.sort((e3, t4) => {
      if (e3.startDayIndex !== t4.startDayIndex) return e3.startDayIndex - t4.startDayIndex;
      const n3 = e3.endDayIndex - e3.startDayIndex;
      return t4.endDayIndex - t4.startDayIndex - n3;
    });
    const r2 = [];
    return n2.forEach((e3) => {
      let t4 = 0, n3 = false;
      for (; !n3; ) r2.some((n4) => n4.row === t4 && !(e3.endDayIndex < n4.startDayIndex || e3.startDayIndex > n4.endDayIndex)) ? t4++ : n3 = true;
      r2.push(Object.assign(Object.assign({}, e3), { row: t4 }));
    }), r2;
  })(oe2, O2), [oe2, O2]), se2 = T(() => {
    if (0 === ie2.length) return M3;
    const e2 = Math.max(...ie2.map((e3) => e3.row));
    return M3 + e2 * M3;
  }, [ie2, M3]), de2 = T(() => ((e2, t3) => {
    const n2 = /* @__PURE__ */ new Map();
    for (let r2 = 0; r2 < 7; r2++) {
      const a2 = [];
      e2.forEach((e3) => {
        if (e3.allDay) return;
        const n3 = _a(e3, t3);
        if (n3.length > 0) {
          const o3 = n3.find((e4) => e4.dayIndex === r2);
          if (o3) {
            const n4 = o3.endHour >= 24 ? 23.99 : o3.endHour, l3 = Object.assign(Object.assign({}, e3), { start: Z(re(Ie(t3, r2), o3.startHour)), end: Z(re(Ie(t3, r2), n4)), day: r2 });
            a2.push(l3);
          }
        } else e3.day === r2 && a2.push(e3);
      });
      const o2 = Ia.calculateDayEventLayouts(a2, { viewType: "week" });
      n2.set(r2, o2);
    }
    return n2;
  })(oe2, O2), [oe2, O2]), { handleMoveStart: ce2, handleCreateStart: ue2, handleResizeStart: he2, handleCreateAllDayEvent: me2, dragState: ve2, isDragging: fe2 } = Pa(e, { calendarRef: a, allDayRowRef: I2 ? Q3 : void 0, viewType: k2.WEEK, onEventsUpdate: (t3, n2) => {
    const r2 = t3(oe2), a2 = new Set(r2.map((e2) => e2.id)), o2 = oe2.filter((e2) => !a2.has(e2.id)), l3 = new Set(oe2.map((e2) => e2.id)), i2 = r2.filter((e2) => !l3.has(e2.id)), s = r2.filter((e2) => {
      if (!l3.has(e2.id)) return false;
      const t4 = oe2.find((t5) => t5.id === e2.id);
      return t4 && (U2(t4.start).getTime() !== U2(e2.start).getTime() || U2(t4.end).getTime() !== U2(e2.end).getTime() || t4.day !== e2.day || ne(t4.start) !== ne(e2.start) || ne(t4.end) !== ne(e2.end) || t4.title !== e2.title);
    });
    e.applyEventsChanges({ delete: o2.map((e2) => e2.id), add: i2, update: s.map((e2) => ({ id: e2.id, updates: e2 })) }, n2);
  }, onEventCreate: (t3) => {
    w ? (X2(t3), G3(true)) : (e.addEvent(t3), V2(t3.id));
  }, onEventEdit: () => {
  }, currentWeekStart: O2, events: oe2, calculateNewEventLayout: (e2, t3, n2) => ((e3, t4, n3, r2) => {
    const a2 = /* @__PURE__ */ new Date(), o2 = /* @__PURE__ */ new Date();
    a2.setHours(Math.floor(t4), t4 % 1 * 60, 0, 0), o2.setHours(Math.floor(n3), n3 % 1 * 60, 0, 0);
    const l3 = { id: "-1", title: "Temp", day: e3, start: Z(a2), end: Z(o2), calendarId: "blue", allDay: false }, i2 = [...r2.filter((t5) => t5.day === e3 && !t5.allDay), l3];
    return Ia.calculateDayEventLayouts(i2, { viewType: "week" }).get("-1") || null;
  })(e2, t3, n2, oe2), calculateDragLayout: (e2, t3, n2, r2) => ((e3, t4, n3, r3, a2) => {
    const o2 = a2.map((a3) => {
      if (a3.id !== e3.id) return a3;
      const o3 = U2(a3.start), l3 = re(o3, n3), i2 = re(o3, r3), s = Z(l3), d2 = Z(i2);
      return Object.assign(Object.assign({}, a3), { day: t4, start: s, end: d2 });
    }).filter((e4) => e4.day === t4 && !e4.allDay);
    return 0 === o2.length ? null : Ia.calculateDayEventLayouts(o2, { viewType: "week" }).get(e3.id) || null;
  })(e2, t3, n2, r2, oe2), TIME_COLUMN_WIDTH: D2, isMobile: w }), { handleDrop: pe2, handleDragOver: ye2 } = Aa({ app: e, onEventCreated: (e2) => {
    V2(e2.id);
  } }), be2 = T(() => v(f, "short"), [f, v]), we2 = T(() => {
    if (!w) return [];
    const e2 = f.split("-")[0].toLowerCase();
    return "zh" === e2 || "ja" === e2 ? v(f, "narrow") : be2.map((t3) => {
      if ("en" === e2) {
        if (t3.startsWith("Tu")) return "Tu";
        if (t3.startsWith("Th")) return "Th";
        if (t3.startsWith("Sa")) return "Sa";
        if (t3.startsWith("Su")) return "Su";
      }
      return t3.charAt(0);
    });
  }, [w, f, v, be2]), De2 = T(() => m("allDay"), [m]), xe2 = Array.from({ length: 24 }, (e2, t3) => ({ hour: t3 + N2, label: ge(t3 + N2) })), Ee2 = T(() => {
    const e2 = /* @__PURE__ */ new Date();
    return e2.setHours(0, 0, 0, 0), be2.map((t3, n2) => {
      const r2 = new Date(O2);
      r2.setDate(O2.getDate() + n2);
      const a2 = new Date(r2);
      return a2.setHours(0, 0, 0, 0), { date: r2.getDate(), month: r2.toLocaleString(f, { month: "short" }), fullDate: new Date(r2), isToday: a2.getTime() === e2.getTime() };
    });
  }, [O2, be2, f]), Ce2 = (t3) => {
    e.updateEvent(t3.id, t3);
  }, ke2 = (t3) => {
    e.deleteEvent(t3);
  }, Te2 = T(() => {
    const e2 = /* @__PURE__ */ new Date(), t3 = uo(e2);
    return O2.getTime() === t3.getTime();
  }, [O2]);
  y(() => {
    L2(/* @__PURE__ */ new Date());
    const e2 = setInterval(() => L2(/* @__PURE__ */ new Date()), 6e4);
    return () => clearInterval(e2);
  }, []);
  const Ne2 = w ? "175%" : "100%";
  return Ge("div", { className: "df-calendar relative flex flex-col bg-white dark:bg-gray-900 w-full overflow-hidden h-full select-none df-week-view", children: [Ge(Ya, { calendar: e, viewType: k2.WEEK, currentDate: p, onPrevious: () => e.goToPrevious(), onNext: () => e.goToNext(), onToday: () => e.goToToday() }), Ge(vo, { app: e, weekDaysLabels: be2, mobileWeekDaysLabels: we2, weekDates: Ee2, currentWeekStart: O2, gridWidth: Ne2, allDayAreaHeight: se2, organizedAllDaySegments: ie2, allDayLabelText: De2, isMobile: w, isTouch: E, showAllDay: I2, calendarRef: a, allDayRowRef: Q3, topFrozenContentRef: te2, ALL_DAY_HEIGHT: M3, HOUR_HEIGHT: T3, FIRST_HOUR: N2, dragState: ve2, isDragging: fe2, handleMoveStart: ce2, handleResizeStart: he2, handleEventUpdate: Ce2, handleEventDelete: ke2, onDateChange: i, newlyCreatedEventId: B3, setNewlyCreatedEventId: V2, selectedEventId: F2, setSelectedEventId: _4, detailPanelEventId: z2, setDetailPanelEventId: W2, handleCreateAllDayEvent: me2, handleDragOver: ye2, handleDrop: pe2, customDetailPanelContent: n, customEventDetailDialog: r, events: y2, setDraftEvent: X2, setIsDrawerOpen: G3 }), Ge(fo, { app: e, timeSlots: xe2, weekDaysLabels: be2, currentWeekStart: O2, currentWeekEvents: oe2, eventLayouts: de2, gridWidth: Ne2, isMobile: w, isTouch: E, scrollerRef: ee2, timeGridRef: x2, leftFrozenContentRef: ae2, calendarRef: a, handleScroll: (e2) => {
    const { scrollTop: t3, scrollLeft: n2 } = e2.currentTarget;
    te2.current && (te2.current.style.transform = `translateX(${-n2}px)`), ae2.current && (ae2.current.style.transform = `translateY(${-t3}px)`);
  }, handleCreateStart: ue2, handleTouchStart: (e2, t3, n2) => {
    if (!w && !E) return;
    const r2 = e2.touches[0], a2 = r2.clientX, o2 = r2.clientY, l3 = e2.currentTarget;
    J3.current = setTimeout(() => {
      null == ue2 || ue2({ preventDefault: () => {
      }, stopPropagation: () => {
      }, touches: [{ clientX: a2, clientY: o2 }], changedTouches: [{ clientX: a2, clientY: o2 }], target: l3, currentTarget: l3, cancelable: true }, t3, n2);
    }, 500);
  }, handleTouchEnd: () => {
    J3.current && (clearTimeout(J3.current), J3.current = null);
  }, handleTouchMove: () => {
    J3.current && (clearTimeout(J3.current), J3.current = null);
  }, handleDragOver: ye2, handleDrop: pe2, dragState: ve2, isDragging: fe2, handleMoveStart: ce2, handleResizeStart: he2, handleEventUpdate: Ce2, handleEventDelete: ke2, onDateChange: i, newlyCreatedEventId: B3, setNewlyCreatedEventId: V2, selectedEventId: F2, setSelectedEventId: _4, detailPanelEventId: z2, setDetailPanelEventId: W2, customDetailPanelContent: n, customEventDetailDialog: r, events: y2, setDraftEvent: X2, setIsDrawerOpen: G3, isCurrentWeek: Te2, currentTime: P2, HOUR_HEIGHT: T3, FIRST_HOUR: N2, LAST_HOUR: S2, showStartOfDayLabel: H2 }), Ge(R3, { isOpen: q3, onClose: () => {
    G3(false), X2(null);
  }, onSave: (t3) => {
    y2.find((e2) => e2.id === t3.id) ? e.updateEvent(t3.id, t3) : e.addEvent(t3), G3(false), X2(null);
  }, draftEvent: K2, app: e })] });
};
var yo = { enableDrag: true, enableResize: true, enableCreate: true, showWeekends: true, showAllDay: true, startOfWeek: 1, scrollToCurrentTime: true, hourHeight: 72, firstHour: 0, lastHour: 24, dragConfig: { supportedViews: [k2.WEEK], enableAllDayCreate: true }, eventsConfig: { enableAutoRecalculate: true, enableValidation: true } };
var bo = (e = {}) => {
  const t2 = Object.assign(Object.assign({}, yo), e), n = (e2) => _(ta, { viewType: k2.WEEK, originalComponent: po, app: e2.app, config: t2, className: "week-view-factory", customDetailPanelContent: e2.customDetailPanelContent, customEventDetailDialog: e2.customEventDetailDialog, calendarRef: e2.calendarRef, switcherMode: e2.switcherMode, meta: e2.meta, selectedEventId: e2.selectedEventId, detailPanelEventId: e2.detailPanelEventId, onEventSelect: e2.onEventSelect, onDetailPanelToggle: e2.onDetailPanelToggle });
  return n.displayName = "WeekViewAdapter", { type: k2.WEEK, component: n, config: t2 };
};
var wo = M(({ currentMonth: t2, currentYear: n, newlyCreatedEventId: r, screenSize: a, isScrolling: o, isDragging: l2, item: i, weekHeight: u, events: g, dragState: m, calendarRef: v, onEventUpdate: f, onEventDelete: p, onMoveStart: y2, onCreateStart: b, onResizeStart: w, onDetailPanelOpen: D2, onMoreEventsClick: x2, onChangeView: E, onSelectDate: C, selectedEventId: T3, onEventSelect: N2, onEventLongPress: S2, detailPanelEventId: M3, onDetailPanelToggle: I2, customDetailPanelContent: H2, customEventDetailDialog: R3, onCalendarDrop: O2, onCalendarDragOver: P2, app: A3, enableTouch: $3 }) => {
  const { t: j3, locale: Y2 } = In(), [F2, z2] = d(false), _4 = A(null), Z2 = A(null), W2 = A(null), [B3, V2] = d(null), q3 = T(() => {
    const e = u - 33;
    if (e <= 0) return { maxSlots: 0, maxSlotsWithMore: 0 };
    const t3 = e - 20;
    return { maxSlots: Math.min(4, Math.floor(e / 17)), maxSlotsWithMore: Math.min(4, Math.max(0, Math.floor(t3 / 17))) };
  }, [u]);
  y(() => o ? (z2(true), _4.current && (clearTimeout(_4.current), _4.current = null), () => {
    _4.current && (clearTimeout(_4.current), _4.current = null);
  }) : F2 ? (_4.current = setTimeout(() => {
    z2(false), _4.current = null;
  }, 100), () => {
    _4.current && (clearTimeout(_4.current), _4.current = null);
  }) : void 0, [o, F2]);
  const { weekData: G3 } = i, K2 = G3.days.find((e) => 1 === e.day), X2 = `${u}px`, J3 = T(() => za(g, G3.startDate), [g, G3.startDate]), Q3 = T(() => ((t3, n2) => {
    const r2 = [], a2 = new Date(n2);
    return a2.setDate(a2.getDate() + 6), a2.setHours(23, 59, 59, 999), t3.forEach((t4) => {
      if (!t4.start || !t4.end) return void L.warn("Event missing start or end date:", t4);
      const o2 = U2(t4.start), l3 = U2(t4.end), i2 = new Date(o2);
      i2.setHours(0, 0, 0, 0);
      const s = new Date(l3);
      s.setHours(0, 0, 0, 0);
      let d2 = new Date(s);
      if (!t4.allDay && 0 === l3.getHours() && 0 === l3.getMinutes() && 0 === l3.getSeconds()) {
        const e = l3.getTime() - o2.getTime();
        e > 0 && e < 864e5 && (d2 = new Date(s), d2.setDate(d2.getDate() - 1));
      }
      const c = i2.toDateString() !== d2.toDateString();
      if (!c || t4.allDay) if (c && t4.allDay) {
        let i3 = new Date(o2);
        i3 < n2 && (i3 = new Date(n2), i3.setHours(0, 0, 0, 0));
        const s2 = l3 > a2 ? a2 : l3;
        for (; i3 <= s2; ) {
          const n3 = Xn.PlainDate.from({ year: i3.getFullYear(), month: i3.getMonth() + 1, day: i3.getDate() });
          r2.push(Object.assign(Object.assign({}, t4), { start: n3, end: n3, day: i3.getDay() })), i3.setDate(i3.getDate() + 1);
        }
      } else r2.push(Object.assign(Object.assign({}, t4), { start: t4.start, end: t4.end, day: o2.getDay() }));
    }), r2;
  })(g, G3.startDate), [g, G3.startDate]), ee2 = T(() => ((e) => {
    const t3 = [...e].sort((e2, t4) => {
      const n3 = e2.endDayIndex - e2.startDayIndex + 1, r3 = t4.endDayIndex - t4.startDayIndex + 1;
      return e2.startDayIndex > t4.startDayIndex ? 1 : n3 !== r3 ? r3 - n3 : e2.startDayIndex - t4.startDayIndex;
    }), n2 = [];
    t3.forEach((e2) => {
      let t4 = 0, r3 = false;
      for (; !r3; ) n2.some((n3) => {
        var r4;
        const a2 = Math.abs((null !== (r4 = n3.yPosition) && void 0 !== r4 ? r4 : 0) - t4) < 16, o2 = !(e2.endDayIndex < n3.startDayIndex || e2.startDayIndex > n3.endDayIndex);
        return a2 && o2;
      }) ? t4 += 16 : r3 = true;
      n2.push(Object.assign(Object.assign({}, e2), { yPosition: t4 }));
    });
    const r2 = [];
    return n2.forEach((e2) => {
      var t4;
      const n3 = Math.floor((null !== (t4 = e2.yPosition) && void 0 !== t4 ? t4 : 0) / 16);
      r2[n3] || (r2[n3] = []), r2[n3].push(e2);
    }), r2.forEach((e2) => {
      e2.sort((e3, t4) => e3.startDayIndex - t4.startDayIndex);
    }), r2;
  })(J3), [J3]), te2 = T(() => {
    const e = Array(7).fill(0);
    return ee2.forEach((t3, n2) => {
      t3.forEach((t4) => {
        for (let r2 = t4.startDayIndex; r2 <= t4.endDayIndex; r2++) e[r2] = Math.max(e[r2], n2 + 1);
      });
    }), e;
  }, [ee2]), re2 = T(() => {
    const e = Array.from({ length: 7 }, () => /* @__PURE__ */ new Set());
    return ee2.forEach((t3, n2) => {
      t3.forEach((t4) => {
        for (let r2 = t4.startDayIndex; r2 <= t4.endDayIndex; r2++) r2 >= 0 && r2 < 7 && e[r2].add(n2);
      });
    }), e;
  }, [ee2]), ae2 = T(() => {
    const e = ee2.flat();
    for (let t3 = 0; t3 < G3.days.length; t3++) {
      const n2 = G3.days[t3], r2 = Q3.filter((e2) => {
        if (!e2.start || !e2.end) return U2(e2.start).toDateString() === n2.date.toDateString();
        const t4 = U2(e2.start), r3 = U2(e2.end);
        if (!e2.allDay) {
          if (!(0 !== r3.getHours() || 0 !== r3.getMinutes() || 0 !== r3.getSeconds())) {
            const e3 = r3.getTime() - t4.getTime();
            if (e3 > 0 && e3 < 864e5) return t4.toDateString() === n2.date.toDateString();
          }
        }
        return t4.toDateString() === n2.date.toDateString() || r3.toDateString() === n2.date.toDateString();
      }).filter((t4) => {
        if (!t4.allDay) return true;
        return !e.some((e2) => e2.originalEventId === t4.id);
      }), a2 = re2[t3], o2 = te2[t3] - 1;
      let l3 = 0;
      for (let e2 = 0; e2 <= o2; e2++) a2.has(e2) || l3++;
      if (o2 + 1 + Math.max(0, r2.length - l3) > q3.maxSlots) return q3.maxSlotsWithMore;
    }
    return q3.maxSlots;
  }, [G3.days, Q3, ee2, te2, re2, q3.maxSlots, q3.maxSlotsWithMore]), oe2 = T(() => Math.max(0, 17 * ee2.length), [ee2]), le2 = (e, o2) => {
    var i2;
    const s = e.date.toLocaleDateString(Y2, { month: Y2.startsWith("zh") || Y2.startsWith("ja") ? "short" : "long" }) === t2 && e.year === n;
    var d2;
    const c = ((e2) => [...e2].sort((e3, t3) => e3.allDay !== t3.allDay ? e3.allDay ? -1 : 1 : e3.allDay && t3.allDay ? 0 : ne(e3.start) - ne(t3.start)))((d2 = e.date, Q3.filter((e2) => {
      if (!e2.start || !e2.end) return U2(e2.start).toDateString() === d2.toDateString();
      const t3 = U2(e2.start), n2 = U2(e2.end);
      if (!e2.allDay && 0 === n2.getHours() && 0 === n2.getMinutes() && 0 === n2.getSeconds()) {
        const e3 = n2.getTime() - t3.getTime();
        if (e3 > 0 && e3 < 864e5) return t3.toDateString() === d2.toDateString();
      }
      return t3.toDateString() === d2.toDateString() || n2.toDateString() === d2.toDateString();
    }))), u2 = ee2.flat(), h = c.filter((e2) => {
      if (!e2.allDay) return true;
      return !u2.some((t3) => t3.originalEventId === e2.id);
    }), g2 = re2[o2], L2 = (null !== (i2 = te2[o2]) && void 0 !== i2 ? i2 : 0) - 1, F3 = [];
    for (let e2 = 0; e2 <= L2; e2++) g2.has(e2) || F3.push(e2);
    const z3 = h.length, _5 = Math.max(0, z3 - F3.length), B4 = Math.max(L2 + 1, 0) + _5, G4 = B4 > q3.maxSlots, K3 = G4 ? q3.maxSlotsWithMore : q3.maxSlots, J4 = F3.filter((e2) => e2 < K3).length, ae3 = Math.max(0, K3 - Math.max(L2 + 1, 0)), oe3 = Math.min(z3, J4 + ae3), le3 = h.slice(0, oe3), ie3 = z3 - oe3, se2 = [];
    let de2 = 0;
    const ce2 = Math.min(K3, B4);
    for (let t3 = 0; t3 < ce2; t3++) if (g2.has(t3)) se2.push(Ge("div", { className: "shrink-0", style: { height: "17px", minHeight: "17px" } }, `placeholder-layer-${t3}-${e.date.getTime()}`));
    else if (de2 < le3.length) {
      const e2 = le3[de2];
      se2.push(Ge(so, { event: e2, isAllDay: !!e2.allDay, isMonthView: true, isBeingDragged: l2 && m.eventId === e2.id && "move" === m.mode, calendarRef: v, hourHeight: 72, firstHour: 0, onEventUpdate: f, onEventDelete: p, onMoveStart: y2, onResizeStart: w, onDetailPanelOpen: D2, onEventSelect: N2, onEventLongPress: S2, newlyCreatedEventId: r, selectedEventId: T3, detailPanelEventId: M3, onDetailPanelToggle: I2, customDetailPanelContent: H2, customEventDetailDialog: R3, app: A3, isMobile: "desktop" !== a, enableTouch: $3 }, `${e2.id}-${e2.day}-${ne(e2.start)}-${de2}`)), de2++;
    }
    return Ge("div", { className: Qt("df-month-day-cell relative flex flex-col border-r border-gray-200 dark:border-gray-700", s ? "text-gray-800 dark:text-gray-100" : "text-gray-400 dark:text-gray-600", "desktop" !== a && 6 === o2 ? "border-r-0" : "last:border-r"), style: { height: X2 }, "data-date": (ue2 = e.date, `${ue2.getFullYear()}-${String(ue2.getMonth() + 1).padStart(2, "0")}-${String(ue2.getDate()).padStart(2, "0")}`), onClick: () => null == C ? void 0 : C(e.date), onDblClick: (t3) => null == b ? void 0 : b(t3, e.date), onTouchStart: (t3) => {
      if ("mobile" !== a && !$3) return;
      const n2 = t3.touches[0], r2 = n2.clientX, o3 = n2.clientY;
      W2.current = { x: r2, y: o3 }, Z2.current = setTimeout(() => {
        null == b || b(t3, e.date), Z2.current = null, navigator.vibrate && navigator.vibrate(50);
      }, 500);
    }, onTouchMove: (e2) => {
      if (Z2.current && W2.current) {
        const t3 = Math.abs(e2.touches[0].clientX - W2.current.x), n2 = Math.abs(e2.touches[0].clientY - W2.current.y);
        (t3 > 10 || n2 > 10) && (clearTimeout(Z2.current), Z2.current = null);
      }
    }, onTouchEnd: () => {
      Z2.current && (clearTimeout(Z2.current), Z2.current = null), W2.current = null;
    }, onDragOver: P2, onDrop: (t3) => null == O2 ? void 0 : O2(t3, e.date), onContextMenu: (t3) => ((e2, t4) => {
      e2.preventDefault(), "mobile" !== a && V2({ x: e2.clientX, y: e2.clientY, date: t4 });
    })(t3, e.date), children: [Ge("div", { className: "df-month-date-number-container text-right px-2 h-[33px] relative z-20", children: Ge("span", { className: `
                    df-month-date-number inline-flex items-center justify-center h-6 min-w-6 rounded-full text-sm font-medium whitespace-nowrap px-1
                    ${e.isToday ? "bg-primary text-primary-foreground" : s ? "text-gray-900 dark:text-gray-100" : "text-gray-400 dark:text-gray-600"}
                  `, children: 1 === e.day && "desktop" === a ? e.date.toLocaleDateString(Y2, { month: "short", day: "numeric" }) : e.day }) }), Ge("div", { className: "flex-1 overflow-hidden px-1", children: [se2, G4 && Ge("div", { className: Qt("df-month-more-events text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer hover:underline relative z-20 bg-white dark:bg-gray-900", "desktop" === a ? "text-left font-normal" : "text-center font-medium"), onClick: (t3) => {
      t3.stopPropagation(), x2 ? x2(e.date) : (null == C || C(e.date), null == E || E(k2.DAY));
    }, children: ["+", ie3, "desktop" === a ? ` ${j3("more")}` : ""] })] })] }, `day-${e.date.getTime()}`);
    var ue2;
  }, ie2 = T(() => K2 ? K2.date.toLocaleDateString(Y2, { month: "long", year: "numeric" }) : "", [K2, Y2]);
  return Ge("div", { className: "relative select-none border-b border-gray-200 dark:border-gray-700", style: { height: X2 }, children: [K2 && Ge("div", { className: `
            df-month-title absolute top-10 left-0 z-30 bg-white/50 dark:bg-gray-900/50 py-2 px-2 duration-300
            ${F2 ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `, style: { transition: "opacity 0.5s ease", maxWidth: "fit-content" }, onContextMenu: (e) => e.preventDefault(), children: Ge("span", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100", children: ie2 }) }), Ge("div", { className: "h-full flex flex-col", children: Ge("div", { className: "calendar-week relative h-full", children: [Ge("div", { className: "grid grid-cols-7 h-full", children: G3.days.map((e, t3) => le2(e, t3)) }), ee2.length > 0 && Ge("div", { className: "absolute left-0 right-0 pointer-events-none", style: { top: "33px", height: `${oe2}px`, zIndex: 10 }, children: ee2.slice(0, ae2).map((e, t3) => Ge("div", { className: "absolute inset-0", children: e.map((e2) => Ge(so, { event: e2.event, isAllDay: !!e2.event.allDay, segment: e2, segmentIndex: t3, isMonthView: true, isMultiDay: true, calendarRef: v, hourHeight: 72, firstHour: 0, onEventUpdate: f, onEventDelete: p, onMoveStart: y2, onResizeStart: w, isBeingDragged: l2 && m.eventId === e2.event.id && "move" === m.mode, isBeingResized: l2 && m.eventId === e2.event.id && "resize" === m.mode, newlyCreatedEventId: r, onDetailPanelOpen: D2, selectedEventId: T3, onEventSelect: N2, onEventLongPress: S2, detailPanelEventId: M3, onDetailPanelToggle: I2, customDetailPanelContent: H2, customEventDetailDialog: R3, app: A3, isMobile: "desktop" !== a, enableTouch: $3 }, e2.id)) }, `layer-${t3}`)) })] }) }), B3 && Ge(oo, { x: B3.x, y: B3.y, date: B3.date, viewType: k2.MONTH, onClose: () => V2(null), app: A3, onCreateEvent: () => {
    if (b) {
      const e = { preventDefault: () => {
      }, stopPropagation: () => {
      }, clientX: B3.x, clientY: B3.y };
      b(e, B3.date);
    }
  } })] });
});
wo.displayName = "WeekComponent";
var Do = ({ app: e, customDetailPanelContent: t2, customEventDetailDialog: n, calendarRef: r, selectedEventId: a, onEventSelect: o, detailPanelEventId: l2, onDetailPanelToggle: i }) => {
  const { getWeekDaysLabels: u, getMonthLabels: m, locale: v } = In(), f = e.getCurrentDate(), p = e.getEvents(), y2 = e.getCalendars().map((e2) => e2.id + e2.colors.lineColor).join("-"), b = A(null), w = T(() => {
    const e2 = b.current;
    return e2 && e2.length === p.length && e2.every((e3, t3) => e3 === p[t3]) ? e2 : (b.current = p, p);
  }, [p]), D2 = T(() => {
    const e2 = /* @__PURE__ */ new Map(), t3 = (e3) => {
      const t4 = new Date(e3);
      t4.setHours(0, 0, 0, 0);
      const n3 = t4.getDay(), r2 = 0 === n3 ? -6 : 1 - n3;
      return t4.setDate(t4.getDate() + r2), t4.setHours(0, 0, 0, 0), t4;
    }, n2 = (t4, n3) => {
      const r2 = e2.get(t4);
      r2 ? r2.push(n3) : e2.set(t4, [n3]);
    };
    return w.forEach((e3) => {
      if (!e3.start) return;
      const r2 = U2(e3.start), a2 = e3.end ? U2(e3.end) : r2, o2 = new Date(r2);
      o2.setHours(0, 0, 0, 0);
      const l3 = new Date(a2);
      l3.setHours(0, 0, 0, 0);
      let i2 = new Date(l3);
      if (!e3.allDay) {
        0 !== a2.getHours() || 0 !== a2.getMinutes() || 0 !== a2.getSeconds() || 0 !== a2.getMilliseconds() || i2.setDate(i2.getDate() - 1);
      }
      i2 < o2 && (i2 = new Date(o2));
      const s = t3(o2), d2 = t3(i2);
      let c = s.getTime();
      const u2 = d2.getTime();
      for (; c <= u2; ) {
        n2(c, e3);
        const t4 = new Date(c);
        t4.setDate(t4.getDate() + 7), t4.setHours(0, 0, 0, 0), c = t4.getTime();
      }
    }), e2;
  }, [w]), { screenSize: x2 } = Sr(), [E, C] = d(false);
  y(() => {
    C("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  const T3 = e.getCustomMobileEventRenderer() || Vr, [M3, I2] = d(119), [H2, R3] = d(false), O2 = A(M3), P2 = A([]), [L2, A3] = d(null), [$3, j3] = d(false), [Y2, F2] = d(null), [z2, _4] = d(null), [Z2, W2] = d(null), B3 = void 0 !== a ? a : z2, V2 = void 0 !== l2 ? l2 : Z2, q3 = q((e2) => {
    o ? o(e2) : _4(e2);
  }, [o]), G3 = q((e2) => {
    i ? i(e2) : W2(e2);
  }, [i]), K2 = A(e.state.highlightedEventId);
  y(() => {
    e.state.highlightedEventId ? q3(e.state.highlightedEventId) : K2.current && q3(null), K2.current = e.state.highlightedEventId;
  }, [e.state.highlightedEventId]);
  const X2 = T(() => {
    const e2 = f.getDay(), t3 = f.getDate() - e2 + (0 === e2 ? -6 : 1), n2 = new Date(f);
    return n2.setDate(t3), n2.setHours(0, 0, 0, 0), n2;
  }, [f]), { handleMoveStart: J3, handleCreateStart: Q3, handleResizeStart: ee2, dragState: te2, isDragging: re2 } = Pa(e, { calendarRef: r, viewType: k2.MONTH, onEventsUpdate: (t3, n2) => {
    const r2 = t3(w), a2 = new Set(r2.map((e2) => e2.id)), o2 = w.filter((e2) => !a2.has(e2.id)), l3 = new Set(w.map((e2) => e2.id)), i2 = r2.filter((e2) => !l3.has(e2.id)), s = r2.filter((e2) => {
      if (!l3.has(e2.id)) return false;
      const t4 = w.find((t5) => t5.id === e2.id);
      return t4 && (U2(t4.start).getTime() !== U2(e2.start).getTime() || U2(t4.end).getTime() !== U2(e2.end).getTime() || t4.day !== e2.day || ne(t4.start) !== ne(e2.start) || ne(t4.end) !== ne(e2.end) || t4.title !== e2.title || (null == t4 ? void 0 : t4.start) !== (null == e2 ? void 0 : e2.start) || (null == t4 ? void 0 : t4.end) !== (null == e2 ? void 0 : e2.end));
    });
    e.applyEventsChanges({ delete: o2.map((e2) => e2.id), add: i2, update: s.map((e2) => ({ id: e2.id, updates: e2 })) }, n2);
  }, onEventCreate: (t3) => {
    "desktop" !== x2 ? (F2(t3), j3(true)) : e.addEvent(t3);
  }, onEventEdit: (e2) => {
    A3(e2.id);
  }, currentWeekStart: X2, events: w }), { handleDrop: ae2, handleDragOver: oe2 } = Aa({ app: e, onEventCreated: (e2) => {
    A3(e2.id);
  } }), le2 = T(() => u(v, "short"), [v, u]), { currentMonth: ie2, currentYear: se2, isScrolling: de2, virtualData: ce2, weeksData: ue2, scrollElementRef: he2, isNavigating: ge2, handleScroll: me2, handlePreviousMonth: ve2, handleNextMonth: fe2, handleToday: pe2, setScrollTop: ye2 } = (({ currentDate: e2, weekHeight: t3, onCurrentMonthChange: n2, initialWeeksToLoad: r2 = 104, locale: a2 = "en-US", isEnabled: o2 = true }) => {
    const l3 = A(null), i2 = q((e3, t4) => {
      const n3 = new Date(t4, e3, 1), r3 = a2.startsWith("zh") || a2.startsWith("ja");
      return n3.toLocaleDateString(a2, { month: r3 ? "short" : "long" });
    }, [a2]), u2 = T(() => {
      const t4 = new Date(e2);
      return t4.setDate(1), t4.setHours(0, 0, 0, 0), Ne(t4, r2);
    }, [e2, r2]), m2 = T(() => {
      const n3 = new Date(e2);
      n3.setDate(1), n3.setHours(0, 0, 0, 0);
      const r3 = u2.findIndex((e3) => e3.days.some((e4) => e4.date.toDateString() === n3.toDateString()));
      return r3 > 0 ? r3 * t3 : 0;
    }, [u2, e2, t3]), [v2, f2] = d(m2), [p2, y3] = d(600), [b2, w2] = d(i2(e2.getMonth(), e2.getFullYear())), [D3, x3] = d(e2.getFullYear()), [E2, C2] = d(false), [k3, T4] = d(u2), [M4, I3] = d(false), H3 = A(false), [R4, O3] = d(false), P3 = A(e2), L3 = A(null), A4 = A(null), $4 = A(new S()), j4 = A(0), Y3 = A(0), F3 = A(false), z3 = q((e3) => {
      e3 && (L3.current = e3);
    }, []), _5 = q((e3) => {
      let t4 = $4.current.get(e3);
      return console.log("weekData", t4), t4 || (t4 = Ce(e3), $4.current.set(e3, t4)), t4;
    }, []), Z3 = q((e3, n3 = 26) => {
      F3.current || (F3.current = true, setTimeout(() => {
        try {
          if ("future" === e3) {
            const e4 = k3[k3.length - 1], t4 = [];
            for (let r3 = 1; r3 <= n3; r3++) {
              const n4 = new Date(e4.startDate);
              n4.setDate(n4.getDate() + 7 * r3), t4.push(_5(n4));
            }
            T4((e5) => [...e5, ...t4]);
          } else {
            const e4 = k3[0], r3 = [];
            for (let t4 = n3; t4 >= 1; t4--) {
              const n4 = new Date(e4.startDate);
              n4.setDate(n4.getDate() - 7 * t4), r3.push(_5(n4));
            }
            const a3 = r3.length * t3;
            T4((e5) => [...r3, ...e5]), requestAnimationFrame(() => {
              f2((e5) => e5 + a3), L3.current && (L3.current.scrollTop += a3);
            });
          }
        } finally {
          setTimeout(() => {
            F3.current = false;
          }, 200);
        }
      }, 0));
    }, [k3, _5, t3]), W3 = T(() => {
      const e3 = k3.length * t3, n3 = Math.floor(v2 / t3);
      let r3 = Math.max(0, n3);
      r3 = Math.min(r3, Math.max(0, k3.length - 6));
      const a3 = Math.min(k3.length - 1, r3 + 6 - 1), o3 = Math.max(0, r3 - 15), l4 = Math.min(k3.length - 1, a3 + 15), i3 = [];
      for (let e4 = o3; e4 <= l4; e4++) i3.push({ index: e4, weekData: k3[e4], top: e4 * t3, height: t3 });
      return { totalHeight: e3, visibleItems: i3, displayStartIndex: r3 };
    }, [v2, p2, t3, k3]), U3 = q((e3) => {
      if (M4 || E2 || 0 === e3.length || !R4) return;
      const t4 = v2 + p2 / 2, r3 = e3.find((e4) => e4.top <= t4 && e4.top + e4.height > t4) || e3[Math.floor(e3.length / 2)];
      if (!r3) return;
      const a3 = {};
      r3.weekData.days.forEach((e4) => {
        const t5 = `${i2(e4.month, e4.year)}-${e4.year}`;
        a3[t5] = (a3[t5] || 0) + 1;
      });
      let o3 = "", s = 0, d2 = 0;
      Object.entries(a3).forEach(([e4, t5]) => {
        if (t5 > d2) {
          d2 = t5;
          const [n3, r4] = e4.split("-");
          o3 = n3, s = parseInt(r4);
        }
      }), o3 && s && (l3.current ? o3 === l3.current.month && s === l3.current.year && (l3.current = null, o3 === b2 && s === D3 || (w2(o3), x3(s), null == n2 || n2(o3, s))) : o3 === b2 && s === D3 || (w2(o3), x3(s), null == n2 || n2(o3, s)));
    }, [p2, b2, D3, M4, E2, n2, v2, R4]), B4 = q((e3) => {
      const n3 = performance.now();
      if (n3 - j4.current < N.SCROLL_THROTTLE) return;
      j4.current = n3;
      const r3 = e3.currentTarget, a3 = r3.scrollTop;
      Y3.current = a3, f2(a3), M4 || requestAnimationFrame(() => {
        const { scrollHeight: e4, clientHeight: n4 } = r3;
        a3 + n4 > e4 - 10 * t3 && !F3.current && Z3("future", 26), a3 < 10 * t3 && !F3.current && Z3("past", 26);
      }), C2(true), A4.current && clearTimeout(A4.current), A4.current = setTimeout(() => {
        C2(false);
      }, N.SCROLL_DEBOUNCE);
    }, [t3, Z3, M4]), V3 = q((e3, n3 = true) => {
      if (!L3.current) return;
      I3(true), H3.current = true;
      const r3 = () => {
        setTimeout(() => {
          I3(false), H3.current = false;
        }, n3 ? 500 : 200);
      }, a3 = k3.findIndex((t4) => t4.days.some((t5) => t5.date.toDateString() === e3.toDateString()));
      if (-1 !== a3) {
        const e4 = a3 * t3;
        return L3.current.scrollTo({ top: e4, behavior: n3 ? "smooth" : "auto" }), void r3();
      }
      const o3 = e3.getDay(), l4 = 0 === o3 ? 6 : o3 - 1, i3 = new Date(e3);
      i3.setDate(e3.getDate() - l4), i3.setHours(0, 0, 0, 0);
      const s = k3[0], d2 = k3[k3.length - 1];
      let c = 0, u3 = false, h = false;
      i3 < s.startDate ? (c = Math.ceil((s.startDate.getTime() - i3.getTime()) / 6048e5), u3 = true) : i3 > d2.startDate && (c = Math.ceil((i3.getTime() - d2.startDate.getTime()) / 6048e5), h = true);
      const g = Math.min(c + 10, 52);
      if (u3) {
        const a4 = [];
        for (let e4 = g; e4 >= 1; e4--) {
          const t4 = new Date(s.startDate);
          t4.setDate(t4.getDate() - 7 * e4), a4.push(_5(t4));
        }
        const o4 = a4.length * t3;
        T4((e4) => [...a4, ...e4]), requestAnimationFrame(() => {
          const l5 = [...a4, ...k3].findIndex((t4) => t4.days.some((t5) => t5.date.toDateString() === e3.toDateString()));
          if (L3.current && -1 !== l5) {
            const e4 = l5 * t3;
            L3.current.scrollTop += o4, f2((e5) => e5 + o4), setTimeout(() => {
              L3.current && L3.current.scrollTo({ top: e4, behavior: n3 ? "smooth" : "auto" });
            }, 50);
          }
          r3();
        });
      } else if (h) {
        const a4 = [];
        for (let e4 = 1; e4 <= g; e4++) {
          const t4 = new Date(d2.startDate);
          t4.setDate(t4.getDate() + 7 * e4), a4.push(_5(t4));
        }
        T4((e4) => [...e4, ...a4]), requestAnimationFrame(() => {
          const o4 = [...k3, ...a4].findIndex((t4) => t4.days.some((t5) => t5.date.toDateString() === e3.toDateString()));
          if (L3.current && -1 !== o4) {
            const e4 = o4 * t3;
            L3.current.scrollTo({ top: e4, behavior: n3 ? "smooth" : "auto" });
          }
          r3();
        });
      } else r3();
    }, [k3, t3, _5]), q4 = q(() => {
      const e3 = k3[W3.displayStartIndex].days[0].date, t4 = new Date(e3.getFullYear(), e3.getMonth() - 1, 1);
      V3(t4);
    }, [W3.displayStartIndex, k3, V3]), G4 = q(() => {
      const e3 = k3[W3.displayStartIndex].days[0].date, t4 = new Date(e3.getFullYear(), e3.getMonth() + 1, 1);
      V3(t4);
    }, [W3.displayStartIndex, k3, V3]), K3 = q(() => {
      const e3 = /* @__PURE__ */ new Date(), r3 = i2(e3.getMonth(), e3.getFullYear()), a3 = e3.getFullYear(), o3 = new Date(a3, e3.getMonth(), 1);
      l3.current = { month: r3, year: a3 }, w2(r3), x3(a3), null == n2 || n2(r3, a3);
      const s = k3.findIndex((e4) => e4.days.some((e5) => e5.date.toDateString() === o3.toDateString()));
      if (-1 !== s) {
        const e4 = s * t3, n3 = L3.current;
        n3 && (I3(true), H3.current = true, requestAnimationFrame(() => {
          f2(e4), requestAnimationFrame(() => {
            n3 && (n3.scrollTop = e4, setTimeout(() => {
              H3.current = false, I3(false);
            }, 200));
          });
        }));
      } else I3(true), H3.current = true, requestAnimationFrame(() => {
        V3(o3, true), setTimeout(() => {
          H3.current = false, I3(false);
        }, 200);
      });
    }, [k3, t3, n2, V3]);
    return y(() => {
      U3(W3.visibleItems);
    }, [W3.visibleItems, U3]), y(() => {
      const t4 = P3.current, r3 = t4.getMonth(), a3 = t4.getFullYear(), o3 = e2.getMonth(), s = e2.getFullYear();
      if (r3 !== o3 || a3 !== s) {
        const t5 = 6, r4 = W3.displayStartIndex, a4 = Math.min(k3.length - 1, r4 + t5 - 1);
        let d2 = false;
        for (let t6 = r4; t6 <= a4; t6++) {
          const n3 = k3[t6];
          if (n3 && n3.days.some((t7) => t7.date.toDateString() === e2.toDateString())) {
            d2 = true;
            break;
          }
        }
        if (!d2) {
          const e3 = new Date(s, o3, 1), t6 = i2(o3, s);
          l3.current = { month: t6, year: s }, w2(t6), x3(s), null == n2 || n2(t6, s), V3(e3, true);
        }
      }
      P3.current = e2;
    }, [e2, n2, V3, W3, k3, i2]), y(() => {
      const e3 = L3.current;
      if (!e3) return;
      const t4 = new ResizeObserver(([e4]) => {
        y3(e4.contentRect.height);
      });
      return t4.observe(e3), () => t4.disconnect();
    }, []), y(() => {
      const e3 = L3.current;
      e3 && !R4 && o2 && requestAnimationFrame(() => {
        e3 && m2 > 0 ? (e3.scrollTop = m2, f2(m2), O3(true)) : e3 && O3(true);
      });
    }, [R4, m2, o2]), y(() => () => {
      A4.current && clearTimeout(A4.current);
    }, []), { scrollTop: v2, containerHeight: p2, currentMonth: b2, currentYear: D3, isScrolling: E2, isNavigating: M4, virtualData: W3, scrollElementRef: L3, handleScroll: B4, scrollToDate: V3, handlePreviousMonth: q4, handleNextMonth: G4, handleToday: K3, setScrollTop: f2, setContainerHeight: y3, setCurrentMonth: w2, setCurrentYear: x3, setIsScrolling: C2, cache: $4.current, scrollElementRefCallback: z3, weeksData: k3 };
  })({ currentDate: f, weekHeight: M3, onCurrentMonthChange: (t3, n2) => {
    const r2 = v.startsWith("zh") || v.startsWith("ja"), a2 = m(v, r2 ? "short" : "long").indexOf(t3);
    a2 >= 0 && e.setVisibleMonth(new Date(n2, a2, 1));
  }, initialWeeksToLoad: 156, locale: v, isEnabled: H2 }), be2 = A(0), [we2, De2] = d(0), xe2 = T(() => we2 - 6 * M3, [we2, M3]), { visibleWeeks: Ee2, startIndex: ke2 } = T(() => {
    const { visibleItems: e2, displayStartIndex: t3 } = ce2, n2 = e2.findIndex((e3) => e3.index === t3);
    if (-1 === n2) return P2.current.length > 0 ? { visibleWeeks: P2.current, startIndex: be2.current } : { visibleWeeks: [], startIndex: t3 };
    const r2 = e2.slice(n2, n2 + 8);
    return r2.length >= 6 && (P2.current = r2, be2.current = t3), { visibleWeeks: r2, startIndex: t3 };
  }, [ce2]), Te2 = T(() => ke2 * M3, [ke2, M3]), Se2 = A(true), Me2 = A(false), Ie2 = ((e2, t3) => {
    const [n2, r2] = d(e2);
    return y(() => {
      const n3 = setTimeout(() => {
        r2(e2);
      }, t3);
      return () => {
        clearTimeout(n3);
      };
    }, [e2, t3]), n2;
  })(ce2.displayStartIndex, 250);
  y(() => {
    ge2 && (Me2.current = true);
  }, [ge2]), y(() => {
    if (Se2.current) return void (Se2.current = false);
    const t3 = ue2[Ie2];
    if (!t3) return;
    const n2 = new Date(t3.startDate);
    n2.setHours(0, 0, 0, 0);
    const r2 = new Date(n2);
    r2.setDate(r2.getDate() + 42 + 7), e.emitVisibleRange(n2, r2, Me2.current ? "navigation" : "scroll"), Me2.current = false;
  }, [e, ue2, Ie2]);
  const He2 = T(() => {
    const e2 = ce2.totalHeight, t3 = ke2 * M3 + 16 * M3 + xe2;
    return Math.max(0, e2 - t3);
  }, [ce2.totalHeight, ke2, M3, xe2]);
  y(() => {
    const e2 = he2.current;
    if (!e2) return;
    const t3 = new ResizeObserver((t4) => {
      for (const n2 of t4) {
        const t5 = n2.contentRect.height;
        if (De2(t5), !H2 && t5 > 0) {
          const n3 = Math.max(80, Math.floor(t5 / 6));
          if (n3 !== O2.current) {
            const t6 = e2.scrollTop;
            if (t6 > 0) {
              const r2 = Math.round(t6 / O2.current) * n3;
              e2.scrollTop = r2, ye2(r2);
            }
          }
          I2(n3), O2.current = n3, requestAnimationFrame(() => {
            R3(true);
          });
        }
      }
    });
    return t3.observe(e2), () => {
      t3.disconnect();
    };
  }, [he2, H2, ye2]), y(() => {
    const e2 = window.innerHeight - 150, t3 = Math.max(80, Math.floor(e2 / 6));
    I2(t3);
  }, []);
  const Re2 = q((t3) => {
    e.updateEvent(t3.id, t3);
  }, [e]), Oe2 = q((t3) => {
    e.deleteEvent(t3);
  }, [e]), Pe2 = (t3) => {
    e.changeView(t3);
  }, Le2 = q(() => A3(null), []), Ae2 = q((t3) => {
    const n2 = e.getReadOnlyConfig().viewable;
    if (("desktop" !== x2 || E) && t3 && n2) {
      const e2 = w.find((e3) => e3.id === t3);
      if (e2) return F2(e2), void j3(true);
    }
    q3(t3);
  }, [x2, E, w, q3, e]), $e2 = q((e2) => {
    ("desktop" !== x2 || E) && q3(e2);
  }, [x2, E, q3]);
  return Ge("div", { className: ft, children: [Ge(Ya, { calendar: e, viewType: k2.MONTH, currentDate: f, customTitle: v.startsWith("zh") || v.startsWith("ja") ? `${se2}年${ie2}` : `${ie2} ${se2}`, onPrevious: () => {
    e.goToPrevious(), ve2();
  }, onNext: () => {
    e.goToNext(), fe2();
  }, onToday: () => {
    e.goToToday(), pe2();
  } }), Ge("div", { className: "df-week-header-row sticky top-0 z-10 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700", onContextMenu: (e2) => e2.preventDefault(), children: Ge("div", { className: "grid grid-cols-7 px-2", children: le2.map((e2, t3) => Ge("div", { className: "text-right text-gray-500 dark:text-gray-400 text-sm py-2 pr-2 select-none", children: e2 }, t3)) }) }), Ge("div", { ref: he2, className: Dt, style: { scrollSnapType: "y mandatory", overflow: "hidden auto", visibility: H2 ? "visible" : "hidden" }, onScroll: me2, children: [Ge("div", { style: { height: Te2 } }), Ee2.map((a2, o2) => {
    var l3;
    const i2 = null !== (l3 = D2.get(a2.weekData.startDate.getTime())) && void 0 !== l3 ? l3 : [], s = 5 === o2 ? Object.assign(Object.assign({}, a2), { height: a2.height + xe2 }) : a2;
    return Ge(wo, { item: s, weekHeight: M3, currentMonth: ie2, currentYear: se2, screenSize: x2, isScrolling: de2, calendarRef: r, events: i2, onEventUpdate: Re2, onEventDelete: Oe2, onMoveStart: J3, onCreateStart: Q3, onResizeStart: ee2, isDragging: re2, dragState: te2, newlyCreatedEventId: L2, onDetailPanelOpen: Le2, onMoreEventsClick: e.onMoreEventsClick, onChangeView: Pe2, onSelectDate: e.selectDate, selectedEventId: B3, onEventSelect: Ae2, onEventLongPress: $e2, detailPanelEventId: V2, onDetailPanelToggle: G3, customDetailPanelContent: t2, customEventDetailDialog: n, onCalendarDrop: ae2, onCalendarDragOver: oe2, calendarSignature: y2, app: e, enableTouch: E }, `week-${a2.weekData.startDate.getTime()}`);
  }), Ge("div", { style: { height: He2 } })] }), Ge(T3, { isOpen: $3, onClose: () => {
    j3(false), F2(null);
  }, onSave: (t3) => {
    w.find((e2) => e2.id === t3.id) ? e.updateEvent(t3.id, t3) : e.addEvent(t3), j3(false), F2(null);
  }, draftEvent: Y2, app: e })] });
};
var xo = { enableDrag: true, enableResize: false, enableCreate: true, showOtherMonth: true, weekHeight: 120, showWeekNumbers: false, enableVirtualScroll: true, initialWeeksToLoad: 156, dragConfig: { supportedViews: [k2.MONTH], enableAllDayCreate: false }, eventsConfig: { enableAutoRecalculate: true, enableValidation: true }, virtualScrollConfig: { weekHeight: 120, initialWeeksToLoad: 156, enableVirtualScroll: true, enableKeyboardNavigation: true, supportedViews: [k2.MONTH] } };
var Eo = (e = {}) => {
  const t2 = Object.assign(Object.assign({}, xo), e), n = (e2) => _(ta, { viewType: k2.MONTH, originalComponent: Do, app: e2.app, config: t2, className: "month-view-factory", customDetailPanelContent: e2.customDetailPanelContent, customEventDetailDialog: e2.customEventDetailDialog, calendarRef: e2.calendarRef, switcherMode: e2.switcherMode, meta: e2.meta, selectedEventId: e2.selectedEventId, detailPanelEventId: e2.detailPanelEventId, onEventSelect: e2.onEventSelect, onDetailPanelToggle: e2.onDetailPanelToggle });
  return n.displayName = "MonthViewAdapter", { type: k2.MONTH, component: n, config: t2 };
};
var Co = M(({ date: e, isToday: t2, locale: n, onSelectDate: r, onCreateStart: a, onMoreEventsClick: o, moreCount: l2 = 0, onContextMenu: i }) => {
  const { t: s } = In(), d2 = e.getDate(), c = 1 === d2, u = e.toLocaleDateString(n, { month: "short" }).toUpperCase();
  return Ge("div", { className: `
        relative flex flex-col border-r border-b border-gray-100 dark:border-gray-800
        ${c ? "border-l-2 border-l-primary dark:border-l-primary" : ""}
        overflow-hidden bg-white dark:bg-gray-900 select-none
      `, style: { aspectRatio: "1/1" }, onClick: () => r(e), onDblClick: (t3) => null == a ? void 0 : a(t3, e), onContextMenu: (t3) => {
    t3.preventDefault(), t3.stopPropagation(), null == i || i(t3, e);
  }, "data-date": `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`, children: [Ge("div", { className: "flex items-center px-1 py-1 shrink-0 h-6", children: [c && Ge("span", { className: "text-[9px] font-bold text-primary-foreground bg-primary px-1 py-0.5 rounded-sm leading-none", children: u }), Ge("span", { className: "text-[10px] font-medium ml-auto " + (t2 ? "bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center" : "text-gray-700 dark:text-gray-300"), children: d2 })] }), l2 > 0 && Ge("div", { className: "absolute bottom-0.5 left-1 z-20", children: Ge("span", { className: "text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer hover:underline", onClick: (t3) => {
    t3.stopPropagation(), null == o || o(e);
  }, children: ["+", l2, " ", s("more")] }) })] });
});
Co.displayName = "YearDayCell";
var ko = ({ segment: e, columnsPerRow: t2, isDragging: n, isSelected: a, onMoveStart: o, onResizeStart: l2, onEventSelect: i, detailPanelEventId: m, onDetailPanelToggle: f, newlyCreatedEventId: p, onDetailPanelOpen: y2, customDetailPanelContent: b, customEventDetailDialog: w, app: D2, calendarRef: x2 }) => {
  const { event: E, startCellIndex: C, endCellIndex: k3, visualRowIndex: T3, isFirstSegment: N2, isLastSegment: S2 } = e, M3 = x(Ve), I2 = A(null), H2 = A(null), [R3, O2] = d(null), [P2, L2] = d(null), [A3, $3] = d(false);
  y(() => {
    if ((null == D2 ? void 0 : D2.state.highlightedEventId) === E.id) {
      $3(true);
      const e2 = setTimeout(() => {
        $3(false);
      }, 300);
      return () => {
        clearTimeout(e2), $3(false);
      };
    }
  }, [null == D2 ? void 0 : D2.state.highlightedEventId, E.id]);
  const j3 = m === e.id, Y2 = !(null == D2 ? void 0 : D2.state.readOnly), F2 = q(() => {
    null == f || f(null), i && i(null);
  }, [f, i]), z2 = q((e2) => null == D2 ? void 0 : D2.updateEvent(e2.id, e2), [D2]), _4 = q((e2) => null == D2 ? void 0 : D2.deleteEvent(e2), [D2]), Z2 = T(() => ({ event: E, isAllDay: !!E.allDay, onEventUpdate: z2, onEventDelete: _4, onClose: F2 }), [E, z2, _4, F2]), W2 = q(() => Ge(Ir, { store: M3, generatorName: "eventDetailContent", generatorArgs: Z2 }), [M3, Z2]), U3 = T(() => ({ event: E, isOpen: j3, isAllDay: !!E.allDay, onClose: F2, app: D2, onEventUpdate: z2, onEventDelete: _4 }), [E, j3, F2, D2, z2, _4]), B3 = C / t2 * 100, V2 = (k3 - C + 1) / t2 * 100, q3 = E.calendarId || "blue", G3 = a ? ce(q3) : se(q3), K2 = a ? "#fff" : de(q3), X2 = ue(q3), J3 = !!E.allDay, Q3 = J3 ? Fa(E) : null, ee2 = 18 * T3, te2 = q(() => {
    if (!I2.current || !(null == x2 ? void 0 : x2.current)) return;
    const e2 = x2.current.getBoundingClientRect(), t3 = I2.current.getBoundingClientRect(), n2 = Math.min(window.innerWidth, e2.right), r = Math.min(window.innerHeight, e2.bottom);
    requestAnimationFrame(() => {
      if (!H2.current) return void requestAnimationFrame(() => {
        if (!H2.current) return;
        const a3 = H2.current.getBoundingClientRect(), o3 = a3.width || 340, l4 = a3.height || 240;
        let i3, s2;
        const d3 = n2 - t3.right, c2 = t3.left - e2.left;
        i3 = d3 >= o3 + 20 ? t3.right + 10 : c2 >= o3 + 20 ? t3.left - o3 - 10 : d3 > c2 ? Math.max(e2.left + 10, n2 - o3 - 10) : e2.left + 10;
        const u2 = t3.top - l4 / 2 + t3.height / 2, h2 = Math.max(10, e2.top + 10), g2 = r - 10;
        s2 = u2 < h2 ? h2 : u2 + l4 > g2 ? Math.max(h2, g2 - l4) : u2, O2({ top: s2, left: i3, eventHeight: t3.height, eventMiddleY: t3.top + t3.height / 2, isSunday: i3 < t3.left });
      });
      const a2 = H2.current.getBoundingClientRect(), o2 = a2.width || 340, l3 = a2.height || 240;
      let i2, s;
      const d2 = n2 - t3.right, c = t3.left - e2.left;
      i2 = d2 >= o2 + 20 ? t3.right + 10 : c >= o2 + 20 ? t3.left - o2 - 10 : d2 > c ? Math.max(e2.left + 10, n2 - o2 - 10) : e2.left + 10;
      const u = t3.top - l3 / 2 + t3.height / 2, h = Math.max(10, e2.top + 10), g = r - 10;
      s = u < h ? h : u + l3 > g ? Math.max(h, g - l3) : u, O2({ top: s, left: i2, eventHeight: t3.height, eventMiddleY: t3.top + t3.height / 2, isSunday: i2 < t3.left });
    });
  }, [x2, R3]), ne2 = () => {
    null == f || f(e.id);
  };
  y(() => {
    p === E.id && !j3 && N2 && setTimeout(() => {
      ne2(), null == y2 || y2();
    }, 50);
  }, [p, E.id, j3, y2, N2]), y(() => {
    j3 && !R3 && (O2({ top: -9999, left: -9999, eventHeight: 0, eventMiddleY: 0, isSunday: false }), requestAnimationFrame(() => {
      te2();
    }));
  }, [j3, R3, te2]), y(() => {
    if (!j3) return;
    const e2 = () => {
      te2();
    };
    return window.addEventListener("scroll", e2, true), window.addEventListener("resize", e2), () => {
      window.removeEventListener("scroll", e2, true), window.removeEventListener("resize", e2);
    };
  }, [j3, te2]);
  const re2 = (e2) => {
    const t3 = "left" === e2, n2 = t3 ? N2 : S2;
    return E.allDay && n2 && l2 && Y2 ? Ge("div", { className: `resize-handle absolute ${t3 ? "left-0" : "right-0"} top-0 bottom-0 w-1 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity z-20`, onMouseDown: (e3) => {
      e3.preventDefault(), e3.stopPropagation(), l2(e3, E, t3 ? "left" : "right");
    }, onClick: (e3) => {
      e3.preventDefault(), e3.stopPropagation();
    } }) : null;
  };
  return Ge(k, { children: [Ge("div", { ref: I2, className: "df-year-event absolute z-30 text-[12px] px-1 overflow-hidden whitespace-nowrap cursor-pointer transition-colors group", style: { left: `calc(${B3}% + 2px)`, top: `${ee2}px`, height: "16px", backgroundColor: G3, color: K2, opacity: 1, width: `calc(${V2}% - 4px)`, pointerEvents: n ? "none" : "auto", borderRadius: N2 && S2 ? "0.25rem" : N2 ? "0.25rem 0 0 0.25rem" : S2 ? "0 0.25rem 0.25rem 0" : "0", transform: A3 ? "scale(1.05)" : "scale(1)", transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }, "data-segment-days": k3 - C + 1, "data-event-id": E.id, onMouseDown: (e2) => {
    e2.stopPropagation(), o && o(e2, E);
  }, onClick: (e2) => {
    e2.preventDefault(), e2.stopPropagation(), i && i(E.id);
  }, onDblClick: (e2) => {
    e2.preventDefault(), e2.stopPropagation(), ne2();
  }, onTouchStart: (e2) => {
    e2.stopPropagation(), i && i(E.id), o && o(e2, E);
  }, onContextMenu: (e2) => {
    e2.preventDefault(), e2.stopPropagation(), i && i(E.id), L2({ x: e2.clientX, y: e2.clientY });
  }, title: E.title, children: [re2("left"), (() => {
    if (E.allDay) {
      const t4 = () => e.isFirstSegment ? E.title : "···";
      return Ge("div", { className: "df-year-event-content flex items-center min-w-0 w-full pointer-events-auto h-full", children: [e.isFirstSegment && Fa(E) && Ge("div", { className: "df-year-event-icon shrink-0 mr-1", children: Ge("div", { className: "rounded-full p-0.5 text-white flex items-center justify-center", style: { backgroundColor: ue(q3), width: "12px", height: "12px" }, children: Fa(E) }) }), Ge("div", { className: "flex-1 min-w-0", children: Ge("div", { className: "df-year-event-title text-[12px] leading-none whitespace-nowrap overflow-hidden", style: { maskImage: "linear-gradient(to right, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)" }, children: t4() }) }), e.isLastSegment && !e.isFirstSegment && Ge("div", { className: "shrink-0 ml-1 text-white/80 dark:text-white/90", children: Ge("div", { className: "w-1.5 h-1.5 rounded-full bg-white/60 dark:bg-white/80" }) })] });
    }
    const t3 = e.isFirstSegment ? E.title : "";
    return Ge("div", { className: "df-year-event-content w-full h-full flex items-center overflow-hidden gap-1 pointer-events-auto", children: [!J3 && Ge("span", { style: { backgroundColor: X2 }, className: "df-year-event-indicator inline-block w-0.75 h-3 shrink-0 rounded-full" }), J3 && Q3 && Ge("div", { className: "df-year-event-icon shrink-0 flex items-center justify-center opacity-80 scale-75", children: Q3 }), Ge("span", { className: "df-year-event-title w-full block font-medium whitespace-nowrap overflow-hidden leading-none", style: { maskImage: "linear-gradient(to right, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)" }, children: t3 })] });
  })(), re2("right")] }), (() => {
    if (!j3 || !x2) return null;
    if (null == M3 ? void 0 : M3.isOverridden("eventDetailDialog")) return Ge(Ir, { store: M3, generatorName: "eventDetailDialog", generatorArgs: U3 });
    if (w) {
      const e3 = w;
      if ("undefined" == typeof window || "undefined" == typeof document) return null;
      const t3 = document.body;
      return t3 ? $(Ge(e3, Object.assign({}, U3)), t3) : null;
    }
    if (!R3) return null;
    const e2 = { event: E, position: R3, panelRef: H2, isAllDay: !!E.allDay, onClose: F2, onEventUpdate: z2, onEventDelete: _4, eventVisibility: "visible", calendarRef: x2, selectedEventElementRef: I2 };
    return (null == M3 ? void 0 : M3.isOverridden("eventDetailContent")) ? Ge(Ua, Object.assign({}, e2, { contentRenderer: W2 })) : b ? Ge(Ua, Object.assign({}, e2, { contentRenderer: b })) : Ge(Wa, Object.assign({}, e2, { app: D2 }));
  })(), P2 && D2 && Ge(lo, { event: E, x: P2.x, y: P2.y, onClose: () => L2(null), app: D2, onDetailPanelToggle: f, detailPanelKey: e.id })] });
};
var To = M(({ rowDays: e, events: t2, columnsPerRow: n, app: r, calendarRef: a, locale: o, isDragging: l2, dragState: i, onMoveStart: d2, onResizeStart: c, onCreateStart: u, selectedEventId: g, onEventSelect: m, onMoreEventsClick: v, newlyCreatedEventId: f, onDetailPanelOpen: p, detailPanelEventId: y2, onDetailPanelToggle: b, customDetailPanelContent: w, customEventDetailDialog: D2 }) => {
  const x2 = /* @__PURE__ */ new Date();
  x2.setHours(0, 0, 0, 0);
  const [E, C] = d(null), T3 = (e2, t3) => {
    e2.preventDefault(), e2.stopPropagation(), C({ x: e2.clientX, y: e2.clientY, date: t3 });
  }, N2 = T(() => (function(e2, t3, n2) {
    if (0 === t3.length) return [];
    const r2 = t3[0], a2 = t3[t3.length - 1], o2 = new Date(r2.getFullYear(), r2.getMonth(), r2.getDate()).getTime(), l3 = new Date(a2.getFullYear(), a2.getMonth(), a2.getDate(), 23, 59, 59, 999).getTime(), i2 = e2.filter((e3) => {
      if (!e3.start) return false;
      const t4 = U2(e3.start), n3 = e3.end ? U2(e3.end) : t4, r3 = new Date(t4.getFullYear(), t4.getMonth(), t4.getDate()).getTime(), a3 = new Date(n3.getFullYear(), n3.getMonth(), n3.getDate()).getTime();
      return r3 <= l3 && a3 >= o2;
    });
    i2.sort((e3, t4) => {
      const n3 = U2(e3.start).getTime(), r3 = e3.end ? U2(e3.end).getTime() : n3, a3 = U2(t4.start).getTime(), o3 = r3 - n3, l4 = (t4.end ? U2(t4.end).getTime() : a3) - a3;
      return o3 !== l4 ? l4 - o3 : n3 - a3;
    });
    const s = [], d3 = [];
    return i2.forEach((e3) => {
      const a3 = U2(e3.start), i3 = e3.end ? U2(e3.end) : a3, c2 = new Date(a3.getFullYear(), a3.getMonth(), a3.getDate()).getTime(), u2 = new Date(i3.getFullYear(), i3.getMonth(), i3.getDate()).getTime();
      let h = -1, g2 = -1;
      const m2 = Math.round((c2 - o2) / 864e5);
      h = m2 >= 0 ? m2 : 0;
      const v2 = Math.round((u2 - o2) / 864e5);
      g2 = v2 < t3.length ? v2 : t3.length - 1, h = Math.max(0, Math.min(h, n2 - 1)), g2 = Math.max(0, Math.min(g2, n2 - 1));
      const f2 = c2 >= o2, p2 = u2 <= l3;
      let y3 = 0;
      for (; ; ) {
        let e4 = false;
        d3[y3] || (d3[y3] = []);
        for (let t4 = h; t4 <= g2; t4++) if (d3[y3][t4]) {
          e4 = true;
          break;
        }
        if (!e4) {
          for (let e5 = h; e5 <= g2; e5++) d3[y3][e5] = true;
          break;
        }
        y3++;
      }
      s.push({ id: `${e3.id}_${r2.getTime()}`, event: e3, startCellIndex: h, endCellIndex: g2, isFirstSegment: f2, isLastSegment: p2, visualRowIndex: y3 });
    }), s;
  })(t2, e, n), [t2, e, n]), { visibleSegments: S2, moreCounts: M3 } = T(() => {
    const t3 = new Array(e.length).fill(0);
    N2.forEach((n3) => {
      const r3 = Math.max(0, n3.startCellIndex), a2 = Math.min(e.length - 1, n3.endCellIndex);
      for (let e2 = r3; e2 <= a2; e2++) t3[e2]++;
    });
    const n2 = [], r2 = new Array(e.length).fill(0);
    return N2.forEach((a2) => {
      let o2 = true;
      const l3 = Math.max(0, a2.startCellIndex), i2 = Math.min(e.length - 1, a2.endCellIndex);
      for (let e2 = l3; e2 <= i2; e2++) {
        const n3 = t3[e2] > 3 ? 1 : 2;
        if (a2.visualRowIndex > n3) {
          o2 = false;
          break;
        }
      }
      if (o2) n2.push(a2);
      else for (let e2 = l3; e2 <= i2; e2++) r2[e2]++;
    }), { visibleSegments: n2, moreCounts: r2 };
  }, [N2, e.length]);
  return Ge("div", { className: "relative w-full", style: { display: "grid", gridTemplateColumns: `repeat(${n}, 1fr)` }, onContextMenu: (e2) => e2.preventDefault(), children: [e.map((e2, t3) => {
    const n2 = e2.getTime() === x2.getTime();
    return Ge(Co, { date: e2, isToday: n2, locale: o, onSelectDate: (e3) => {
      r.selectDate(e3);
    }, onCreateStart: u, onMoreEventsClick: v, moreCount: M3[t3], onContextMenu: T3 }, e2.getTime());
  }), Ge("div", { className: "absolute inset-0 pointer-events-none", style: { top: 26, bottom: 0, left: 0, right: 0 }, onContextMenu: (e2) => e2.preventDefault(), children: Ge("div", { className: "relative w-full h-full", children: S2.map((e2) => Ge("div", { className: "pointer-events-auto", children: Ge(ko, { segment: e2, columnsPerRow: n, isDragging: l2 && i.eventId === e2.event.id, isSelected: g === e2.event.id, onMoveStart: d2, onResizeStart: c, onEventSelect: m, onDetailPanelToggle: b, newlyCreatedEventId: f, onDetailPanelOpen: p, calendarRef: a, app: r, detailPanelEventId: y2, customDetailPanelContent: w, customEventDetailDialog: D2 }) }, e2.id)) }) }), E && Ge(oo, { x: E.x, y: E.y, date: E.date, viewType: k2.YEAR, onClose: () => C(null), app: r, onCreateEvent: () => {
    if (u) {
      const e2 = { preventDefault: () => {
      }, stopPropagation: () => {
      }, clientX: E.x, clientY: E.y };
      u(e2, E.date);
    }
  } })] });
});
To.displayName = "YearRowComponent";
var No = ({ app: t2, calendarRef: n, customDetailPanelContent: r, customEventDetailDialog: a, config: o, selectedEventId: l2, onEventSelect: i, detailPanelEventId: u, onDetailPanelToggle: m }) => {
  var v;
  const { t: f, locale: p } = In(), y2 = t2.getCurrentDate(), b = y2.getFullYear(), w = t2.getEvents(), D2 = A(null), [x2, E] = d(() => "undefined" != typeof window ? Math.max(1, Math.floor(window.innerWidth / 80)) : 7), [C, T3] = d(false), [N2, S2] = d(null), [M3, I2] = d(null), H2 = void 0 !== l2 ? l2 : N2, R3 = void 0 !== u ? u : M3, O2 = (e) => {
    i ? i(e) : S2(e);
  }, P2 = (e) => {
    m ? m(e) : I2(e);
  }, [L2, A3] = d(null);
  y(() => {
    const e = (e2) => {
      const t3 = e2.target, n2 = t3.closest("[data-event-id]"), r2 = t3.closest("[data-event-detail-panel]"), a2 = t3.closest("[data-event-detail-dialog]"), o2 = t3.closest("[data-range-picker-popup]"), l3 = t3.closest("[data-calendar-picker-dropdown]");
      n2 || r2 || a2 || o2 || l3 || (O2(null), P2(null));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, []), y(() => {
    const e = D2.current;
    if (!e) return;
    const t3 = new ResizeObserver((e2) => {
      const t4 = e2[0].contentRect.width, n2 = Math.floor(t4 / 80);
      E(Math.max(1, n2)), T3(true);
    });
    return t3.observe(e), () => t3.disconnect();
  }, []);
  const $3 = A(t2.state.highlightedEventId);
  y(() => {
    t2.state.highlightedEventId ? O2(t2.state.highlightedEventId) : $3.current && O2(null), $3.current = t2.state.highlightedEventId;
  }, [t2.state.highlightedEventId]);
  const { handleMoveStart: j3, handleResizeStart: Y2, handleCreateStart: F2, dragState: z2, isDragging: _4 } = Pa(t2, { calendarRef: n, viewType: k2.YEAR, onEventsUpdate: (e, n2) => {
    e(w).forEach((e2) => {
      const r2 = w.find((t3) => t3.id === e2.id);
      !r2 || r2.start === e2.start && r2.end === e2.end || t2.updateEvent(e2.id, e2, n2);
    });
  }, currentWeekStart: /* @__PURE__ */ new Date(), events: w, onEventCreate: (e) => {
    t2.addEvent(e);
  }, onEventEdit: (e) => {
    A3(e.id);
  } }), Z2 = null !== (v = null == o ? void 0 : o.showTimedEventsInYearView) && void 0 !== v && v, W2 = q((n2, r2) => {
    if (Z2) null == F2 || F2(n2, r2);
    else {
      const n3 = Xn.PlainDate.from({ year: r2.getFullYear(), month: r2.getMonth() + 1, day: r2.getDate() }), a2 = { id: `event-${Date.now()}`, title: f("newEvent") || "New Event", start: n3, end: n3, allDay: true };
      t2.addEvent(a2), A3(a2.id);
    }
  }, [Z2, F2, t2]), B3 = T(() => {
    const e = [], t3 = new Date(b, 0, 1), n2 = new Date(b, 11, 31), r2 = new Date(t3);
    for (; r2 <= n2; ) e.push(new Date(r2)), r2.setDate(r2.getDate() + 1);
    return e;
  }, [b]), V2 = T(() => (function(e, t3) {
    const n2 = [];
    for (let r2 = 0; r2 < e.length; r2 += t3) n2.push(e.slice(r2, r2 + t3));
    return n2;
  })(B3, x2), [B3, x2]), q3 = T(() => {
    const e = new Date(b, 0, 1), t3 = new Date(b, 11, 31, 23, 59, 59);
    return w.filter((n2) => {
      if (!n2.start) return false;
      if (!Z2 && !n2.allDay) return false;
      const r2 = U2(n2.start), a2 = n2.end ? U2(n2.end) : r2;
      return r2 <= t3 && a2 >= e;
    });
  }, [w, b, Z2]);
  return Ge("div", { className: ft, onContextMenu: (e) => e.preventDefault(), children: [Ge(Ya, { calendar: t2, viewType: k2.YEAR, currentDate: y2, customTitle: p.startsWith("zh") || p.startsWith("ja") ? `${b}年` : `${b}`, onPrevious: () => {
    const e = new Date(y2);
    e.setFullYear(e.getFullYear() - 1), t2.setCurrentDate(e);
  }, onNext: () => {
    const e = new Date(y2);
    e.setFullYear(e.getFullYear() + 1), t2.setCurrentDate(e);
  }, onToday: () => {
    t2.goToToday();
  } }), Ge("div", { ref: D2, className: `${Dt} ${xt}`, style: { overflow: "hidden auto" }, children: Ge("div", { className: "w-full flex flex-col border-t border-l border-gray-100 dark:border-gray-800", style: { opacity: C ? 1 : 0, transition: "opacity 0.2s ease" }, children: V2.map((e, o2) => Ge(To, { rowDays: e, events: q3, columnsPerRow: x2, app: t2, calendarRef: n, locale: p, isDragging: _4, dragState: z2, onMoveStart: j3, onResizeStart: Y2, onCreateStart: W2, selectedEventId: H2, onEventSelect: O2, onMoreEventsClick: t2.onMoreEventsClick, newlyCreatedEventId: L2, onDetailPanelOpen: () => A3(null), detailPanelEventId: R3, onDetailPanelToggle: P2, customDetailPanelContent: r, customEventDetailDialog: a }, o2)) }) })] });
};
function So(e, t2, n) {
  const r = new Date(n, t2, 1), a = new Date(n, t2 + 1, 0).getDate(), o = r.getDay(), l2 = r.getTime(), i = new Date(n, t2, a, 23, 59, 59, 999).getTime(), s = e.filter((e2) => {
    if (!e2.start) return false;
    const t3 = U2(e2.start), n2 = e2.end ? U2(e2.end) : t3, r2 = new Date(t3.getFullYear(), t3.getMonth(), t3.getDate()).getTime(), a2 = new Date(n2.getFullYear(), n2.getMonth(), n2.getDate()).getTime();
    return r2 <= i && a2 >= l2;
  });
  s.sort((e2, t3) => {
    const n2 = U2(e2.start).getTime(), r2 = e2.end ? U2(e2.end).getTime() : n2, a2 = U2(t3.start).getTime(), o2 = r2 - n2, l3 = (t3.end ? U2(t3.end).getTime() : a2) - a2;
    return o2 !== l3 ? l3 - o2 : n2 - a2;
  });
  const d2 = [], c = [];
  s.forEach((e2) => {
    const r2 = U2(e2.start), a2 = e2.end ? U2(e2.end) : r2, s2 = new Date(Math.max(r2.getTime(), l2)), u2 = new Date(Math.min(a2.getTime(), i)), h = s2.getDate(), g = u2.getDate(), m = o + (h - 1), v = o + (g - 1), f = r2.getMonth() === t2 && r2.getFullYear() === n, p = a2.getMonth() === t2 && a2.getFullYear() === n;
    let y2 = 0;
    for (; ; ) {
      let e3 = false;
      c[y2] || (c[y2] = []);
      for (let t3 = m; t3 <= v; t3++) if (c[y2][t3]) {
        e3 = true;
        break;
      }
      if (!e3) {
        for (let e4 = m; e4 <= v; e4++) c[y2][e4] = true;
        break;
      }
      y2++;
    }
    d2.push({ id: `${e2.id}_month_${t2}`, event: e2, startCellIndex: m, endCellIndex: v, isFirstSegment: f, isLastSegment: p, visualRowIndex: y2, monthIndex: t2 });
  });
  const u = d2.length > 0 ? Math.max(...d2.map((e2) => e2.visualRowIndex)) : -1;
  return { segments: d2, maxVisualRow: u };
}
var Mo = ({ app: t2, calendarRef: n, customDetailPanelContent: r, customEventDetailDialog: a, config: o, selectedEventId: l2, onEventSelect: i, detailPanelEventId: u, onDetailPanelToggle: m }) => {
  var v;
  const { t: f, locale: p, getWeekDaysLabels: y2 } = In(), b = t2.getCurrentDate(), w = b.getFullYear(), D2 = t2.getEvents(), x2 = /* @__PURE__ */ new Date();
  x2.setHours(0, 0, 0, 0);
  const E = A(null), C = A(null), T3 = A(null), [N2, S2] = d(0), [M3, I2] = d(0), [H2, R3] = d(null), [O2, P2] = d(null), L2 = void 0 !== l2 ? l2 : H2, A3 = void 0 !== u ? u : O2, $3 = (e) => {
    i ? i(e) : R3(e);
  }, j3 = (e) => {
    m ? m(e) : P2(e);
  }, [Y2, F2] = d(null), [z2, _4] = d(null);
  y(() => {
    const e = (e2) => {
      const t3 = e2.target, n2 = t3.closest("[data-event-id]"), r2 = t3.closest("[data-event-detail-panel]"), a2 = t3.closest("[data-event-detail-dialog]"), o2 = t3.closest("[data-range-picker-popup]"), l3 = t3.closest("[data-calendar-picker-dropdown]");
      n2 || r2 || a2 || o2 || l3 || ($3(null), j3(null));
    };
    return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
  }, []);
  const Z2 = T(() => {
    let e = 0;
    for (let t3 = 0; t3 < 12; t3++) {
      const n2 = new Date(w, t3, 1), r2 = new Date(w, t3 + 1, 0).getDate(), a2 = n2.getDay() + r2;
      a2 > e && (e = a2);
    }
    return e;
  }, [w]), { handleMoveStart: W2, handleResizeStart: B3, handleCreateStart: V2, dragState: q3, isDragging: G3 } = Pa(t2, { calendarRef: n, viewType: k2.YEAR, onEventsUpdate: (e, n2) => {
    e(D2).forEach((e2) => {
      const r2 = D2.find((t3) => t3.id === e2.id);
      !r2 || r2.start === e2.start && r2.end === e2.end || t2.updateEvent(e2.id, e2, n2);
    });
  }, currentWeekStart: /* @__PURE__ */ new Date(), events: D2, onEventCreate: (e) => {
    t2.addEvent(e);
  }, onEventEdit: (e) => {
    F2(e.id);
  } }), K2 = null !== (v = null == o ? void 0 : o.showTimedEventsInYearView) && void 0 !== v && v, X2 = q((n2, r2) => {
    if (K2) null == V2 || V2(n2, r2);
    else {
      const n3 = Xn.PlainDate.from({ year: r2.getFullYear(), month: r2.getMonth() + 1, day: r2.getDate() }), a2 = { id: `event-${Date.now()}`, title: f("newEvent") || "New Event", start: n3, end: n3, allDay: true };
      t2.addEvent(a2), F2(a2.id);
    }
  }, [K2, V2, t2]), J3 = T(() => {
    const e = y2(p, "short"), t3 = [e[6], ...e.slice(0, 6)].map((e2) => {
      if (p.startsWith("zh")) return e2.charAt(e2.length - 1);
      const t4 = e2.substring(0, 2);
      return t4.charAt(0).toUpperCase() + t4.slice(1).toLowerCase();
    }), n2 = [];
    for (let e2 = 0; e2 < Z2; e2++) n2.push(t3[e2 % 7]);
    return n2;
  }, [p, y2, Z2]), Q3 = T(() => {
    const e = new Date(w, 0, 1), t3 = new Date(w, 11, 31, 23, 59, 59);
    return D2.filter((n2) => {
      if (!n2.start) return false;
      if (!K2 && !n2.allDay) return false;
      const r2 = U2(n2.start), a2 = n2.end ? U2(n2.end) : r2;
      return r2 <= t3 && a2 >= e;
    });
  }, [D2, w, K2]);
  console.log("yearEvents", Q3.length);
  const ee2 = T(() => {
    const e = [];
    for (let t3 = 0; t3 < 12; t3++) {
      const n2 = new Date(w, t3, 1), r2 = new Date(w, t3 + 1, 0).getDate(), a2 = n2.getDay(), o2 = [];
      for (let e2 = 0; e2 < a2; e2++) o2.push(null);
      for (let e2 = 1; e2 <= r2; e2++) o2.push(new Date(w, t3, e2));
      for (; o2.length < Z2; ) o2.push(null);
      const l3 = n2.toLocaleDateString(p, { month: "short" }), i2 = l3.charAt(0).toUpperCase() + l3.slice(1).toLowerCase(), { segments: s, maxVisualRow: d2 } = So(Q3, t3, w), c = d2 + 1, u2 = Math.max(60, 20 + 18 * c);
      e.push({ monthIndex: t3, monthName: i2, days: o2, eventSegments: s, minHeight: u2 });
    }
    return e;
  }, [w, p, Z2, Q3]), te2 = q((e) => {
    const t3 = e.currentTarget;
    E.current && (E.current.scrollLeft = t3.scrollLeft), C.current && (C.current.scrollTop = t3.scrollTop);
  }, []);
  y(() => {
    const e = () => {
      if (T3.current) {
        const e2 = T3.current, t4 = e2.offsetHeight - e2.clientHeight, n3 = e2.offsetWidth - e2.clientWidth;
        I2((e3) => e3 !== t4 ? t4 : e3), S2((e3) => e3 !== n3 ? n3 : e3);
      }
    }, t3 = T3.current;
    if (!t3) return;
    e();
    const n2 = new ResizeObserver(() => {
      e();
    });
    return n2.observe(t3), () => {
      n2.disconnect();
    };
  }, [ee2]);
  return Ge("div", { className: "h-full bg-white dark:bg-gray-900 overflow-hidden select-none", style: { display: "grid", gridTemplateColumns: "3rem 1fr", gridTemplateRows: "auto auto 1fr" }, onContextMenu: (e) => e.preventDefault(), children: [Ge("div", { className: "col-span-2", children: Ge(Ya, { calendar: t2, viewType: k2.YEAR, currentDate: b, customTitle: p.startsWith("zh") || p.startsWith("ja") ? `${w}年` : `${w}`, onPrevious: () => {
    const e = new Date(b);
    e.setFullYear(e.getFullYear() - 1), t2.setCurrentDate(e);
  }, onNext: () => {
    const e = new Date(b);
    e.setFullYear(e.getFullYear() + 1), t2.setCurrentDate(e);
  }, onToday: () => {
    t2.goToToday();
  } }) }), Ge("div", { className: "bg-gray-50 dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-800 z-30" }), Ge("div", { ref: E, className: "overflow-hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800", children: Ge("div", { className: "flex", style: { minWidth: `calc(1352px + ${N2}px)` }, children: [Ge("div", { className: "grid flex-1", style: { gridTemplateColumns: `repeat(${Z2}, minmax(0, 1fr))`, minWidth: "1352px" }, children: J3.map((e, t3) => {
    const n2 = t3 % 7;
    return Ge("div", { className: "text-center py-2 text-[10px] font-bold tracking-wider border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 " + (0 === n2 || 6 === n2 ? "df-year-view-weekend-header" : ""), children: e }, t3);
  }) }), N2 > 0 && Ge("div", { className: "shrink-0 bg-gray-50 dark:bg-gray-900", style: { width: `${N2}px` } })] }) }), Ge("div", { ref: C, className: "overflow-hidden bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700", children: Ge("div", { className: "flex flex-col min-h-full", children: [ee2.map((e) => Ge("div", { className: "flex items-center justify-center border-b border-gray-200 dark:border-gray-700 font-bold text-[10px] text-gray-500 dark:text-gray-400 grow shrink-0", style: { minHeight: `${e.minHeight}px` }, children: e.monthName }, e.monthIndex)), M3 > 0 && Ge("div", { className: "shrink-0 bg-white dark:bg-gray-900", style: { height: `${M3}px` } })] }) }), Ge("div", { ref: T3, className: `overflow-auto ${xt}`, onScroll: te2, children: Ge("div", { className: "flex flex-col min-h-full", style: { minWidth: "1352px" }, children: ee2.map((e) => Ge("div", { className: "relative grow shrink-0", style: { minHeight: `${e.minHeight}px` }, children: [Ge("div", { className: "grid absolute inset-0 z-0", style: { gridTemplateColumns: `repeat(${Z2}, minmax(0, 1fr))` }, children: e.days.map((e2, n2) => {
    const r2 = n2 % 7, a2 = 0 === r2 || 6 === r2;
    if (!e2) return Ge("div", { className: "bg-gray-50/80 dark:bg-gray-800/40 border-r border-b border-gray-200 dark:border-gray-700 " + (a2 ? "df-year-view-weekend-cell" : "") }, `empty-${n2}`);
    const o2 = ((e3) => e3.getTime() === x2.getTime())(e2);
    return Ge("div", { "data-date": `${e2.getFullYear()}-${String(e2.getMonth() + 1).padStart(2, "0")}-${String(e2.getDate()).padStart(2, "0")}`, className: `
                        relative flex items-start justify-end p-0.5 border-r border-b border-gray-200 dark:border-gray-700
                        cursor-pointer hover:bg-blue-100 dark:hover:bg-primary/20 transition-colors
                        ${a2 ? "bg-blue-50 dark:bg-blue-900/30 df-year-view-weekend-cell" : ""}
                      `, onClick: () => t2.selectDate(e2), onDblClick: (t3) => X2(t3, e2), onContextMenu: (t3) => ((e3, t4) => {
      e3.preventDefault(), e3.stopPropagation(), _4({ x: e3.clientX, y: e3.clientY, date: t4 });
    })(t3, e2), children: Ge("span", { className: `
                          text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full
                          ${o2 ? "bg-primary text-primary-foreground font-bold shadow-sm" : "text-gray-700 dark:text-gray-300"}
                        `, children: e2.getDate() }) }, e2.getTime());
  }) }), e.eventSegments.length > 0 && Ge("div", { className: "absolute inset-0 pointer-events-none z-20", style: { top: 20 }, children: Ge("div", { className: "relative w-full h-full", children: e.eventSegments.map((e2) => Ge("div", { className: "pointer-events-auto", children: Ge(ko, { segment: e2, columnsPerRow: Z2, isDragging: G3 && q3.eventId === e2.event.id, isSelected: L2 === e2.event.id, onMoveStart: W2, onResizeStart: B3, onEventSelect: $3, onDetailPanelToggle: j3, newlyCreatedEventId: Y2, onDetailPanelOpen: () => F2(null), calendarRef: n, app: t2, detailPanelEventId: A3, customDetailPanelContent: r, customEventDetailDialog: a }) }, e2.id)) }) })] }, e.monthIndex)) }) }), z2 && Ge(oo, { x: z2.x, y: z2.y, date: z2.date, viewType: k2.YEAR, onClose: () => _4(null), app: t2, onCreateEvent: () => {
    const e = { preventDefault: () => {
    }, stopPropagation: () => {
    }, clientX: z2.x, clientY: z2.y };
    X2(e, z2.date);
  } })] });
};
var Io = (e) => {
  var t2;
  return Ge("fixed-week" === ((null === (t2 = e.config) || void 0 === t2 ? void 0 : t2.mode) || "year-canvas") ? Mo : No, Object.assign({}, e));
};
var Ho = { enableDrag: false, enableResize: false, enableCreate: false, enableVirtualScroll: true, showDebugInfo: false, eventsConfig: { enableAutoRecalculate: false, enableValidation: true } };
var Ro = (e = {}) => {
  const t2 = Object.assign(Object.assign({}, Ho), e);
  e.mode && (t2.viewConfig = Object.assign(Object.assign({}, t2.viewConfig), { mode: e.mode }));
  const n = (e2) => _(ta, { viewType: k2.YEAR, originalComponent: Io, app: e2.app, config: t2, className: "year-view-factory", customDetailPanelContent: e2.customDetailPanelContent, customEventDetailDialog: e2.customEventDetailDialog, calendarRef: e2.calendarRef, meta: e2.meta, selectedEventId: e2.selectedEventId, detailPanelEventId: e2.detailPanelEventId, onEventSelect: e2.onEventSelect, onDetailPanelToggle: e2.onDetailPanelToggle });
  return n.displayName = "YearViewAdapter", { type: k2.YEAR, component: n, config: t2 };
};
function Oo(e) {
  return [mo(null == e ? void 0 : e.day), bo(null == e ? void 0 : e.week), Eo(null == e ? void 0 : e.month)];
}
var Po = { enableAutoRecalculate: true, enableValidation: true, defaultEvents: [], maxEventsPerDay: 50 };
function Lo(e = {}) {
  const t2 = Object.assign(Object.assign({}, Po), e);
  let n;
  const r = { getAll: () => n.getAllEvents(), getById: (e2) => n.getAllEvents().find((t3) => t3.id === e2), add: (e2) => {
    if (t2.enableValidation) {
      const t3 = r.validateEvent(e2);
      if (t3.length > 0) throw new Error(`Event validation failed: ${t3.join(", ")}`);
    }
    if (t2.maxEventsPerDay && void 0 !== e2.day) {
      if (r.getByDay(e2.day, n.getCurrentDate()).length >= t2.maxEventsPerDay) throw new Error(`Maximum events per day (${t2.maxEventsPerDay}) exceeded`);
    }
    if (n.addEvent(e2), t2.enableAutoRecalculate) {
      const e3 = a(n.getCurrentDate()), t3 = Ae(n.getAllEvents(), e3);
      n.state.events = t3;
    }
  }, update: (e2, o) => {
    const l2 = r.getById(e2);
    if (!l2) throw new Error(`Event with id ${e2} not found`);
    const i = Object.assign(Object.assign({}, l2), o);
    if (t2.enableValidation) {
      const e3 = r.validateEvent(i);
      if (e3.length > 0) throw new Error(`Event validation failed: ${e3.join(", ")}`);
    }
    if (n.updateEvent(e2, o), t2.enableAutoRecalculate) {
      const e3 = a(n.getCurrentDate()), t3 = Ae(n.getAllEvents(), e3);
      n.state.events = t3;
    }
    return n.getAllEvents().find((t3) => t3.id === e2);
  }, delete: (e2) => {
    n.deleteEvent(e2);
  }, getByDate: (e2) => n.getAllEvents().filter((t3) => {
    const n2 = U2(t3.start);
    n2.setHours(0, 0, 0, 0);
    const r2 = new Date(e2);
    return r2.setHours(0, 0, 0, 0), n2.getTime() === r2.getTime();
  }), getByDateRange: (e2, t3) => n.getAllEvents().filter((n2) => {
    const r2 = U2(n2.start), a2 = U2(n2.end);
    return r2 >= e2 && r2 <= t3 || a2 >= e2 && a2 <= t3 || r2 <= e2 && a2 >= t3;
  }), getByDay: (e2, t3) => n.getAllEvents().filter((t4) => t4.day === e2), getAllDayEvents: (e2, t3) => t3.filter((t4) => t4.day === e2 && t4.allDay), recalculateEventDays: (e2, t3) => Ae(e2, t3), validateEvent: (e2) => {
    const t3 = [];
    return e2.title && "" !== e2.title.trim() || t3.push("Event title is required"), e2.start || t3.push("Event start time is required"), e2.end || t3.push("Event end time is required"), e2.start && e2.end && !e2.allDay && e2.start >= e2.end && t3.push("Start time must be before end time"), e2.id && "string" != typeof e2.id && t3.push("Event ID must be a string"), t3;
  }, filterEvents: (e2, t3) => e2.filter(t3) };
  function a(e2) {
    const t3 = e2.getDay(), n2 = e2.getDate() - t3 + (0 === t3 ? -6 : 1), r2 = new Date(e2);
    return r2.setDate(n2), r2.setHours(0, 0, 0, 0), r2;
  }
  return { name: "events", config: t2, install: (e2) => {
    n = e2, L.log("Events plugin installed - providing event management services");
  }, api: r };
}
export {
  $r as BlossomColorPicker,
  Ue as CalendarApp,
  I as CalendarRegistry,
  ea as CalendarRenderer,
  rt as Check,
  Xe as ChevronRight,
  at as ChevronsUpDown,
  Ir as ContentSlot,
  Ka as ContextMenu,
  ao as ContextMenuColorPicker,
  Xa as ContextMenuItem,
  Qa as ContextMenuLabel,
  Ja as ContextMenuSeparator,
  Zr as CreateCalendarDialog,
  Be as CustomRenderingStore,
  jr as DefaultColorPicker,
  T2 as LAYOUT_CONFIG,
  $2 as LOCALES,
  Mn as LocaleContext,
  Hn as LocaleProvider,
  Wr as MiniCalendar,
  gt2 as PanelRightClose,
  mt as PanelRightOpen,
  tt as Plus,
  he as TIME_STEP,
  N as VIRTUAL_MONTH_SCROLL_CONFIG,
  k2 as ViewType,
  S as WeekDataCache,
  Q2 as addDays,
  bn as buildParseRegExp,
  Pe as calculateDayIndex,
  Yt as calendarPickerDropdown,
  bt as cancelButton,
  kn as capitalize,
  hr as clipboardStore,
  Gn as conditionalTheme,
  lr as convertDateEvent,
  ir as convertDateEventWithTimeZone,
  ar as createAllDayEvent,
  re as createDateWithHour,
  mo as createDayView,
  er as createEvent,
  Oe as createEventWithDate,
  Ye as createEventWithRealDate,
  nr as createEvents,
  Lo as createEventsPlugin,
  Eo as createMonthView,
  $ as createPortal,
  Oo as createStandardViews,
  B2 as createTemporalWithHour,
  or as createTimedEvent,
  tr as createTimezoneEvent,
  rr as createTimezoneEvents,
  bo as createWeekView,
  Ro as createYearView,
  on as dateToPlainDate,
  ln as dateToPlainDateTime,
  sn as dateToZonedDateTime,
  X as daysBetween,
  J2 as daysDifference,
  Er as downloadICS,
  A2 as en,
  ne as extractHourFromDate,
  un as extractHourFromTemporal,
  Wn as formatDate,
  _n as formatDateConsistent,
  yr as formatDateToICSTimestamp,
  me as formatEventTimeRange,
  pr as formatICSDate,
  Zn as formatMonthYear,
  En as formatTemporal,
  ge as formatTime,
  Ee as generateDayData,
  xr as generateICS,
  Ze as generateUniKey,
  Ce as generateWeekData,
  Ne as generateWeekRange,
  Te as generateWeeksData,
  Me as getAllDayEventsForDay,
  O as getCalendarColorsForHex,
  xe as getCurrentWeekDates,
  Ie as getDateByDayIndex,
  sr as getDateObj,
  $e as getDayIndexByDate,
  oe as getEndOfDay,
  K as getEndOfTemporal,
  se as getEventBgColor,
  fe as getEventEndHour,
  de as getEventTextColor,
  Se as getEventsForDay,
  je as getEventsForWeek,
  Cn as getIntlLabel,
  ue as getLineColor,
  Nn as getMonthLabels,
  ke as getMonthYearOfWeek,
  mn as getPlainDate,
  cr as getSearchHeaderInfo,
  ce as getSelectedBgColor,
  ae as getStartOfDay,
  G2 as getStartOfTemporal,
  _e as getTestEvents,
  Tn as getWeekDaysLabels,
  De as getWeekRange,
  Dn as getZoneId,
  ur as groupSearchResults,
  Tr as importICSFile,
  _3 as isDate,
  We as isDeepEqual,
  ze as isEventEqual,
  Le as isEventInWeek,
  ie as isMultiDayEvent,
  q2 as isMultiDayTemporalEvent,
  tn as isPlainDate,
  nn as isPlainDateTime,
  le as isSameDay,
  V as isSamePlainDate,
  gn as isSameTemporal,
  F as isValidLocale,
  rn as isZonedDateTime,
  Kn as mergeClasses,
  pn as mergeFormatTemplate,
  be as monthNames,
  Un as normalizeCssWidth,
  dr as normalizeDate,
  Y as normalizeLocale,
  xn as normalizeToZoned,
  ee as now,
  fn as pad,
  wr as parseICS,
  fr as parseICSDate,
  wn as parseTemporalString,
  dn as plainDateTimeToDate,
  cn as plainDateToDate,
  Ae as recalculateEventDays,
  Ra as registerDragImplementation,
  j2 as registerLocale,
  Gr as registerSidebarImplementation,
  Xn2 as resolveAppliedTheme,
  ve as roundToTimeStep,
  Bn as scrollbarTakesSpace,
  hn as setHourInTemporal,
  we as shortMonthNames,
  _t as sidebarContainer,
  Zt as sidebarHeader,
  Ut as sidebarHeaderTitle,
  Wt as sidebarHeaderToggle,
  Sn as t,
  an as temporalToDate,
  qn as themeClasses,
  Vn as themeCn,
  te as today,
  He as updateEventDateAndDay,
  Fe as updateEventWithRealDate,
  Pa as useDragForView,
  In as useLocale,
  Xr as useSidebarBridge,
  pe as weekDays,
  ye as weekDaysFullName,
  W as zonedDateTimeToDate
};
//# sourceMappingURL=@dayflow_core.js.map
