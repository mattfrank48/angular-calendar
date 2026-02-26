import "@testing-library/jest-dom"

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe () {
    /* noop */
  }

  unobserve () {
    /* noop */
  }

  disconnect () {
    /* noop */
  }
}
