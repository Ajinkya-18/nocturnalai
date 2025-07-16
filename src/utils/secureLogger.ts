
interface LogLevel {
  ERROR: 'error';
  WARN: 'warn';
  INFO: 'info';
  DEBUG: 'debug';
}

const LOG_LEVELS: LogLevel = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug'
};

class SecureLogger {
  private isDevelopment = import.meta.env.DEV;

  private sanitizeMessage(message: string): string {
    // Remove potential sensitive information patterns
    return message
      .replace(/password[=:]\s*\S+/gi, 'password=[REDACTED]')
      .replace(/token[=:]\s*\S+/gi, 'token=[REDACTED]')
      .replace(/key[=:]\s*\S+/gi, 'key=[REDACTED]')
      .replace(/secret[=:]\s*\S+/gi, 'secret=[REDACTED]');
  }

  private log(level: keyof LogLevel, message: string, ...args: unknown[]): void {
    if (!this.isDevelopment && level === 'DEBUG') {
      return; // Don't log debug messages in production
    }

    const sanitizedMessage = this.sanitizeMessage(message);
    const timestamp = new Date().toISOString();
    
    if (this.isDevelopment) {
      console[LOG_LEVELS[level]](`[${timestamp}] ${sanitizedMessage}`, ...args);
    } else {
      // In production, only log errors and warnings
      if (level === 'ERROR' || level === 'WARN') {
        console[LOG_LEVELS[level]](`[${timestamp}] ${sanitizedMessage}`);
      }
    }
  }

  error(message: string, ...args: unknown[]): void {
    this.log('ERROR', message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log('WARN', message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.log('INFO', message, ...args);
  }

  debug(message: string, ...args: unknown[]): void {
    this.log('DEBUG', message, ...args);
  }
}

export const secureLogger = new SecureLogger();
