"use client";
import Link from "next/link";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div>
      <h1>An Error Occured</h1>
      <p>{error.name}</p>
      <Link href="/" replace>
        Go Back to Home
      </Link>
      <button onClick={reset}>Try Reset</button>
    </div>
  );
};

export default ErrorBoundary;
