import React from "react";
import { Link } from "react-router-dom";

const Skip = () => {
  return (
    <div className = "wrapper-inner">
        <nav>
            <Link to = "/profile/*"> назад</Link>
        </nav>
    </div>);
};

export default Skip;
