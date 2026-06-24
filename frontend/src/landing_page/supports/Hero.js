import React from "react";

function Hero() {
  return (
    <div className="text-bg-info">
      <div className="container">
        <div className="row">
          <div className="col-6 p-4">
            <div className="text-light">
              <h4>Support Portal </h4>
            </div>
            <div className="text-light mt-5">
              <h3>
                Search for an answer or browser help topics to create a ticket
              </h3>
              <div>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Eg: how do i activate F&O ,why is my order getting rejected..."
                  aria-label=".form-control-lg example"
                ></input>
              </div>
              <div>
                <a className="text-light" href="">
                  Track account openeng
                </a>  
                <a className="text-light" href="">
                  Track segment activation
                </a>
                <a className="text-light" href="">
                  Intraday margins
                </a>{" "}
                <br />
                <a className="text-light" href="">
                  Kite user manual
                </a>
              </div>
            </div>
          </div>
          <div className="col-6 mt-4 p-4 ">
            <div className="text-end  ">
              <a className="text-light"  href=""> Track Tickets</a>
            </div>
            <div>
              <h3 className="text-light p-1 " >Fratured</h3>
              <ol className="text-light">
                <li >
                  <a href="" className="text-light" >Current Takeovers and Delisting - january 2024</a>
                </li>
                <li>
                  <a href="" className="text-light">Latest intraday leverages = MIS & CO</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
