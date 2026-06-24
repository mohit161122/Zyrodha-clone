import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="p-5 text-center border-bottom">
        <h1>Pricing</h1>
        <p>Free equity investment and flat ₹20 traday and F&O trades</p>
      </div>
      <div className="row  mt-5">
        <div className="col-4 text-center">
          <img src="media\images\pricingMF.svg"></img>
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 text-center">
          <img src="media\images\intradayTrades.svg"></img>
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) <br /> per executed order on
            intraday trades <br /> across equity, currency, and commodity <br />{" "}
            trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 text-center">
          <img src="media\images\pricingMF.svg"></img>
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
