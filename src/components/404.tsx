import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div className="background-frame-error">
      <div className="error-message-container">
        <h1>Oh no, Page not found!</h1>
        <p>
          Im sorry, this page does not exists! Please have a look at all our
          recipes and see if you can find what you are looking for. <br />
          Happy Eating!
        </p>
        <Link to="/recipes">
          <button className="btn">View all recipes</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
