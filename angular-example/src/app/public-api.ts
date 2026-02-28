/*
 * Public API Surface of angular-calendar
 */

export * from "./lib/day-flow-calendar.component"
export * from "./lib/day-flow-portal.directive"

export {
  CalendarApp,
  CalendarRegistry,
  createEventsPlugin,
  createDayView,
  createWeekView,
  createMonthView,
  createYearView,
  ViewType,
} from "@dayflow/core"

export * from "@dayflow/core"
