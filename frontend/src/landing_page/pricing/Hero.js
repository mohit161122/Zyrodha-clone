import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        {/* 150px ÷ 16 = 9.375rem */}
        <h4 style={{ marginLeft: "9.375rem" }}>Support Portal</h4>

        {/* 220px ÷ 16 = 13.75rem */}
        <a href="" style={{ marginRight: "13.75rem" }}>
          Track Tickets
        </a>
      </div>

      <div className="row p-0 m-3">
        <div className="col-6 p-3">
          {/* 280px ÷ 16 = 17.5rem */}
          <h1 style={{ marginLeft: "17.5rem" }} className="fs-3">
            Search for an answer or browse help topics to <br /> create a ticket
          </h1>

          {/* 280px = 17.5rem | 550px ÷ 16 = 34.375rem | 60px ÷ 16 = 3.75rem */}
          <input
            style={{
              marginLeft: "17.5rem",
              width: "34.375rem",
              height: "3.75rem",
            }}
            placeholder="Eg. how do I activate F&O"
          />

          <br />
          <br />

          {/* 10px ÷ 16 = 0.625rem | 280px = 17.5rem */}
          <div
            style={{
              display: "flex",
              gap: "0.625rem",
              marginLeft: "17.5rem",
            }}
          >
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-6 p-3">
          {/* 70px ÷ 16 = 4.375rem */}
          <h1 className="fs-3" style={{ marginLeft: "4.375rem" }}>
            Featured
          </h1>

          <ol style={{ marginLeft: "4.375rem" }}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;