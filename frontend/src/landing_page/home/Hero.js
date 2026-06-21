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
        <button
          type="button"
          class="btn btn-primary p-2 mt-2 mb-5 fs-5 "
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
