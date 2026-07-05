import React, { useState, useEffect } from "react";
import { holdings as staticHoldings } from "../data/data";
import axios from "axios";
import API_BASE_URL from "../config";

const Summary = () => {
  const [allHoldings, setAllHoldings] = useState(staticHoldings);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/allHoldings`)
      .then((res) => {
        if (res.data && Array.isArray(res.data) && res.data.length > 0) {
          setAllHoldings(res.data);
        }
      })
      .catch(() => {
        // fallback to static data
      });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + (Number(stock.avg) || 0) * (Number(stock.qty) || 0),
    0
  );
  const currentValue = allHoldings.reduce(
    (acc, stock) => acc + (Number(stock.price) || 0) * (Number(stock.qty) || 0),
    0
  );
  const pnl = currentValue - totalInvestment;
  const pnlPercent = totalInvestment > 0 ? (pnl / totalInvestment) * 100 : 0;
  const isProfit = pnl >= 0;

  const formatCurrency = (value) => {
    if (Math.abs(value) >= 1000) {
      return (value / 1000).toFixed(2) + "k";
    }
    return value.toFixed(2);
  };

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={isProfit ? "profit" : "loss"}>
              {isProfit ? "" : "-"}{formatCurrency(Math.abs(pnl))}{" "}
              <small>{isProfit ? "+" : "-"}{Math.abs(pnlPercent).toFixed(2)}%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{formatCurrency(currentValue)}</span>{" "}
            </p>
            <p>
              Investment <span>{formatCurrency(totalInvestment)}</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;