import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <section className="container">
      <h1 className="x-large text-primary">
        <i className="fas fa-exclamation-triangle" /> 404 Page Not Found
      </h1>
      <p className="large">Sorry, this page does not exist</p>
      <h2>
        <Link to="/">
          <i className="fa-solid fa-backward"></i> Main Page
        </Link>
      </h2>
    </section>
  );
};

export default NotFound;
