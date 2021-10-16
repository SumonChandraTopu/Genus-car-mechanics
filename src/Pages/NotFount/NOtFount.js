import React from "react";
import { Link } from "react-router-dom";
import NotFound from "../../images/404.png";

const NOtFount = () => {
  return (
    <div>
      <img className="d-block m-auto mt-5" src={NotFound} alt="" />
      <Link to="/home">
      <button type="button" className="btn px-5 btn-warning">Go back</button>
      </Link>
    </div>
  );
};

export default NOtFount;
