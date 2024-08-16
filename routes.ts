/**
 * An array routes that are accessibility to the public
 * These routes not require athentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/"
];

/**
 * An array routes that are use for authentication
 * These routes will redirect logged in users to dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";