import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHEro.png" alt="Hero Image"></img>
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
          <button
            type="button"
            className="btn btn-primary p-2 fs-5"
            style={{ width: "180px" }}
          >
            Signup now
          </button>
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
