
/**
 * Security utility for input sanitization and validation
 */

export const sanitizeInput = {
  /**
   * Sanitize HTML content to prevent XSS attacks
   */
  html: (input: string): string => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },

  /**
   * Sanitize email input
   */
  email: (input: string): string => {
    return input.toLowerCase().trim().replace(/[^\w@.-]/g, '');
  },

  /**
   * Sanitize URL input
   */
  url: (input: string): string => {
    try {
      const url = new URL(input);
      // Only allow https and http protocols
      if (!['https:', 'http:'].includes(url.protocol)) {
        throw new Error('Invalid protocol');
      }
      return url.toString();
    } catch {
      return '';
    }
  },

  /**
   * Sanitize phone number input
   */
  phone: (input: string): string => {
    return input.replace(/[^\d+\-\(\)\s]/g, '').trim();
  },

  /**
   * General text sanitization
   */
  text: (input: string): string => {
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }
};

/**
 * Validate input length and content
 */
export const validateInput = {
  length: (input: string, min: number, max: number): boolean => {
    return input.length >= min && input.length <= max;
  },

  email: (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  },

  url: (input: string): boolean => {
    try {
      new URL(input);
      return true;
    } catch {
      return false;
    }
  }
};
