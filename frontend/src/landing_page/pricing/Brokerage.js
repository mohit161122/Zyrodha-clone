import React from "react";

function Brokrage() {
  return (
    <div className="container">
      <div className="row border-top ">
        <div className="col-8 mt-5 ">
            <div className="p-3 text-center">
          <a href="" style={{ fontWeight:"600"}} className="text-decoration-none"  >Brokerage calculater</a>
            </div>
        
          <ul className="mt-4">
            <li>
              Call & trade and RMS auto-squareoff: Additional charges of ₹ 50 +
              GST per order.
            </li>
            <li>
                Digital contract notes will br send via e-mail
            </li>
            <li>
                Physical copies of contact notes, if require , shell be change ₹ 50 per contract note. Courier changes apply.
            </li>
            <li>
               For NRI account (non-PIS), 0.5% or ₹100 per execute order for equal (whichever is lower)
            </li>
            <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for equal order (whichever is lower).
            </li>
            <li>
                If the account is in debite balance ,any order placed will be changed ₹40 per executed order instead of ₹ 20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-3 mt-5 p-3 text-center">
            <a href="" style={{ fontWeight:"600"}} className="text-decoration-none" >List of charges</a>
        </div>
      </div>
    </div>
  );
}

export default Brokrage;
