/**
 * Enrollment utility functions
 * Helper functions for managing enrollment tokens and user sessions
 */

/**
 * Store enrollment token in localStorage
 * @param {string} token - Access token from Auth0
 */
export const storeEnrollmentToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('enrollToken', token);
  }
};

/**
 * Get enrollment token from localStorage
 * @returns {string|null} - Access token or null if not found
 */
export const getEnrollmentToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('enrollToken');
  }
  return null;
};

/**
 * Remove enrollment token from localStorage
 */
export const removeEnrollmentToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('enrollToken');
  }
};

/**
 * Check if user has a valid enrollment token
 * @returns {boolean}
 */
export const hasEnrollmentToken = () => {
  return getEnrollmentToken() !== null;
};

