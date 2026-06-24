import React from "react";

function Team() {
  return (
    <div className="container border-top">
      <div className="row mt-3">
        <h3 className="text-center">People</h3>

        <div className="col-6 mt-1 text-muted rounded-circle text-center mt-4">
          <img
            src="media\images\nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h5> Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 text-muted mt-4">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome <br />{" "}
            the hurdles he faced during his decade long stint as a trader.{" "}
            <br /> Today, Zerodha has changed the landscape of the Indian
            broking <br /> industry
          </p>
          <p>
            {" "}
            He is a member of the SEBI Secondary Market Advisory <br />{" "}
            Committee (SMAC) and the Market Data Advisory Committee <br />{" "}
            (MDAC).
          </p>
          <p> Playing basketball is his zen.</p>
          <p>
            {" "}
            Connect on
            <a href="" className="text-decoration-none">
              {" "}
              Homepage{" "}
            </a>
            /
            <a href="" className="text-decoration-none">
              {" "}
              TrandingQnA{" "}
            </a>
            /
            <a href="" className="text-decoration-none">
              {" "}
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
