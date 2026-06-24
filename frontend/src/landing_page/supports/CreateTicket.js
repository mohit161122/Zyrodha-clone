import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h3>To cretae a Ticket, Select a relevant topic</h3>
        <div className="col-4 mt-5 p-2">
          <h5 className="mb-5">
            <i class="fa-solid fa-circle-plus"></i> Account Opening
          </h5>
          <a href="" className="text-decoration-none">
            Online Account opening
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            Offline Account opening
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            Company, Partneship and HUF Account opening
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            NRI Account opening
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            Changes at Zerodha
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>{" "}
          <br />
          <a href="" className="text-decoration-none">
            Getting Started
          </a>{" "}
          <br />
        </div>
        <div className="col-4 mt-5 p-2">
          <i class="fa-solid fa-circle-user"></i>Your Zerodha Account
          <div className="mt-5">
            <a href="" className="text-decoration-none">
              Your Profile
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Account modification
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              NRI Account opening
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Nomination
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Zerodha IDFC FIRST Bank 3-in-1 Account
            </a>{" "}
            <br />
          </div>
        </div>
        <div className="col-4 mt-5 p-2">
          <i class="fa-solid fa-chart-line"></i>Kite
          <div>
            <a href="" className="text-decoration-none">
              IPO
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Trading FAQs
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Margin Trading Facility (MTF) and Margins
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Charts and orders
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Alerts and Nudges
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              General
            </a>{" "}
            <br />
          </div>
        </div>

        <div className="col-4 mt-5 p-2">
          <h5>
            <i class="fa-regular fa-credit-card"></i> Funds
            <div>
              <a href="" className="text-decoration-none">
                Add money
              </a>{" "}
              <br />
              <a href="" className="text-decoration-none">
                Withdraw money
              </a>{" "}
              <br />
              <a href="" className="text-decoration-none">
                Add bank accounts
              </a>{" "}
              <br />
              <a href="" className="text-decoration-none">
                eMandates
              </a>{" "}
              <br />
            </div>
          </h5>
        </div>
        <div className="col-4 mt-5 p-2">
          <i class="fa-solid fa-circle-notch"></i>Console
          <div>
            <a href="" className="text-decoration-none">
              Portfolio
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Corporate actions
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Funds statement
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none"></a> <br />
          </div>
        </div>
        <div className="col-4 mt-5 p-2">
          <i class="fa-regular fa-circle"></i>Coin
          <div>
            <a href="" className="text-decoration-none">
              Mutual funds
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Corporate actions
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Fixed Deposit (FD)
            </a>{" "}
            <br />
            <a href="" className="text-decoration-none">
              Features on Coin
            </a>{" "}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
