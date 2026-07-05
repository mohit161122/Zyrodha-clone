import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero Image" style={{ width: "100%" }}></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p className="mt-2">
          {" "}
          Online platform to inverst in stoks , derivatatives,mutual finds and
          more{" "}
        </p>
        <div
          className="mt-2 mb-5"
          style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
        >
          <Link
            to="/signup"
            className="btn btn-primary p-2 fs-5"
            style={{ width: "180px" }}
          >
            Signup now
          </Link>
          <a
            id="Dashboard-button"
            href="/dashboard"
            className="btn btn-outline-primary p-2 fs-5"
            style={{ width: "180px" }}
          >
            See Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

