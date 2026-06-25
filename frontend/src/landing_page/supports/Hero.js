import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 style={{ marginLeft: "150px" }}>Support Portal</h4>
        <a href="" style={{ marginRight: "220px" }}>
          Track Tickets
        </a>
      </div>
      <div className="row p-0 m-3 ">
        <div className="col-6 p-3">
          <h1 style={{ marginLeft: "280px" }} className="fs-3">
            Search for an answer or browse help topics to <br /> create a ticket
          </h1>
          <input
            style={{ marginLeft: "280px", width: "550px", height: "60px" }}
            placeholder="Eg. how do I activate F&O"
          />
          <br />
          <br />
          <div style={{ display: "flex", gap: "10px", marginLeft: "280px" }}>
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3" >
          <h1 className="fs-3" style={{marginLeft:"70px"}}>Featured</h1>
          <ol style={{marginLeft:"70px"}}>
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
