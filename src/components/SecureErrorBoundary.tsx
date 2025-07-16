
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { secureLogger } from '@/utils/secureLogger';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorId: string | null;
}

class SecureErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorId: null };
  }

  static getDerivedStateFromError(): State {
    // Generate a unique error ID for tracking
    const errorId = `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return { hasError: true, errorId };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error securely without exposing sensitive information
    secureLogger.error(
      `Application Error [${this.state.errorId}]: Component crashed`,
      {
        message: error.message,
        stack: import.meta.env.DEV ? error.stack : '[REDACTED]',
        componentStack: import.meta.env.DEV ? errorInfo.componentStack : '[REDACTED]'
      }
    );
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-noct-dark text-white">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-400 mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            {import.meta.env.DEV && this.state.errorId && (
              <p className="text-sm text-gray-500">Error ID: {this.state.errorId}</p>
            )}
            <button
              onClick={() => window.location.reload()}
              className="bg-noct-electric hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SecureErrorBoundary;
