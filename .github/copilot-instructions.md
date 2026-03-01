# Copilot Instructions for `mattfrank48/angular-calendar`

## 1. Project Overview

- **Purpose**: A lightweight, elegant Angular calendar component.
- **Tech Stack**:
  - **Frontend**: Angular (use detected version from `package.json`), Preact, Tailwind CSS
  - **Languages**: TypeScript (92.1%), CSS (6.8%)
  - **Build/Tooling**: Angular CLI (`angular.json`), Capacitor (if `capacitor.config.*` exists), ESLint
  - **Style**: Single-page Angular component library

## 2. Architecture & Key Conventions

- **Frontend**:
  - All source code in `src/` per Angular CLI conventions
  - Angular components, services, and utilities organized by feature or domain
  - Standalone Angular components preferred if detected, else traditional module system
  - Styling through Tailwind CSS; class names in templates, limited custom CSS files
- **Backend**:
  - No backend/server—this is a frontend library
- **Shared**:
  - Reusable helpers/services in `src/app/shared` or similar
  - No cross-app monorepo structure unless detected
- **Build & Runtime Flow**:
  - Build: `ng build`
  - Runtime: served via Angular dev server
  - Distribution: Angular package output (see `package.json` exports, if any)
- **Environment Handling**:
  - Angular `environments/` convention for prod/dev switches
  - Use `environment.ts` for feature toggles, never hard-code secrets

## 3. Coding Standards

- **TypeScript**:
  - Strict typing enforced (`tsconfig.json` — `strict: true`)
  - No `any` or implicit `any`
  - Use interfaces for contracts
- **Angular Patterns**:
  - Use `@Component` with templateUrls and styleUrls
  - Use standalone components if indicated by config or code
  - No use of Angular zones—assume not zoneless unless detected
- **State Management**:
  - Prefer RxJS and local component state
  - Avoid global state libraries unless present
- **HTTP/Data Access**:
  - Use Angular `HttpClient`; organize API calls in services
  - No direct HTTP requests in components
- **Error Handling**:
  - Catch errors at service level; propagate meaningful errors
  - User-facing errors handled in UI; do not expose stack traces
- **Logging**:
  - Console logging for dev only; strip from production builds
- **Linting/Formatting**:
  - Follow ESLint rules from `.eslintrc.*`
  - Enforce Prettier (if configured), otherwise use Angular formatting defaults
  - No unused vars or imports

## 4. Platform-Specific Rules

- **Web/Capacitor**:
  - Use Capacitor APIs only if guarded for web/mobile
  - No direct DOM appliance—always use Angular universal APIs
- **Mobile Constraints**:
  - Respect viewport scaling and touch behaviors
  - Avoid using browser-specific features unconditionally
- **Service Workers**:
  - Only use if clearly enabled in `ngsw-config.json`; otherwise, do not generate PWAs
- **Native Plugins**:
  - Integrate Capacitor plugins only as present in `capacitor.config.*` and referenced in code

## 5. Testing Conventions

- **Framework**:
  - Prefer Jasmine/Karma or Jest as found in `package.json`
  - Test files: `*.spec.ts` in the same folder as source code
- **Structure**:
  - Arrange tests to match file structure of `src/`
  - Mock dependencies, especially HTTP and Capacitor plugins
  - Do not access real APIs in tests
- **Pitfalls**:
  - Clean up after tests; avoid global state pollution
  - Thoroughly test observable streams

## 6. API & Backend Conventions

- **Routing**:
  - If present, use Angular router; configure routes in `app-routing.module.ts` or Standalone API
- **Middleware**:
  - No backend; if middleware found, document its location and usage
- **Authentication**:
  - Not applicable—no backend
- **File/Binary Handling**:
  - N/A for pure calendar component
- **Database**:
  - N/A unless explicit integration present

## 7. Build & Deployment

- **Development Flow**:
  - Start: `npm install` → `ng serve`
  - Recommend using Angular CLI scripts from `package.json`
- **Production Build**:
  - `ng build --configuration production`
- **Docker**:
  - Use Docker only if a `Dockerfile` exists; otherwise, do not invent containerization
- **CI**:
  - Follow workflows as shown in `.github/workflows/`; run build and lint on all commits
  - Ensure tests run and pass before builds are considered successful

## 8. Do & Don’t Rules for Copilot

- **Do**:
  - Match file structure and naming conventions in `src/`
  - Use feature-based folder structure if present
  - Use strict TypeScript, and all lint rules
  - Generate Angular code that matches existing template and styling patterns (Tailwind classes)
  - Use same dependency versions as in `package.json`
  - Write tests matching current test file style
- **Don’t**:
  - Do not add new libraries unless requested
  - Do not change package manager or build tools
  - Do not use deprecated Angular APIs
  - Do not use any direct DOM manipulation outside Angular abstractions
  - Do not expose or hard-code secrets, tokens, or licenses
- **Performance**:
  - Keep bundle size minimal (no unnecessary dependencies)
  - Optimize template change detection to OnPush if compatible
- **Security**:
  - Sanitize external inputs
  - Avoid `eval`, `innerHTML`, or direct script injection
  - No default credentials or privileged API tokens
- **Style**:
  - All code must pass lint and follow repository formatting exactly
  - Use Tailwind and concise template structure

## 9. Output Requirements

- Always match established project structure and code style
- Prefer copying/adapting from existing code over introducing new patterns
- Do not invent new architecture, dependencies, or folder structure
- Output only minimal, production-grade, and tested code