import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useRouteError, Link } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-container">
      <div className="error-content">
        <FaExclamationTriangle className="error-icon" />
        <h1>Oops!</h1>
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or another error occurred.</p>
        <p className="error-details">
          {error.statusText || error.message}
        </p>
        <Link to="/" className="home-link">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};