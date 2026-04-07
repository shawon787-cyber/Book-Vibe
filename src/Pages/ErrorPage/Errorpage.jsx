import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        
        <h1 className="text-9xl font-extrabold text-primary">404</h1>

        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

        <div className="mt-8 text-6xl">🚧</div>
      </div>
    </div>
  );
};

export default Errorpage;