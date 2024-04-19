import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static defaultProps = {
        fallback: 'Something went wrong'
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // console.log(error, info.componentStack);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        const { fallback } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={''}>{fallback}</Suspense>);
        }

        return children;
    }
}

export default ErrorBoundary;

