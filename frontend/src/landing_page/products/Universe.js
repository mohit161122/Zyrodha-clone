import React from "react";
function Universe() {
  return (
    <div className="container">
      <div>
        <p>
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div>
        <h1>The Zerodha Universe</h1>
        <p>
            Extend your trading and investment experience even further with our partner platforms
        </p>


        <div className="row">
            <div className="col-4 p-5">
                <a href="" className="text-decoration-none">
                    <img src="media/images/smallcaseLogo.png" alt="Smallcase"></img>
                    <p>Thematic inverstemt platform</p>

                </a>
            </div>
            <div className="col-4 p-5">
                <a  href="" className="text-decoration-none">
                    <img style={{width:"10rem"}} src="media/images/streakLogo.png" alt="Smallcase"></img>
                    <p >Algo & strategy platform</p>

                </a>
            </div>
             <div className="col-4 p-5 ml-5">
                <a href="" className="text-decoration-none">
                    <img style={{width:"13rem"}} src="media\images\sensibullLogo.svg" alt="Smallcase"></img>
                    <p>Optiona trading platform</p>

                </a>
            </div>
        </div>


        <div className="row">
            <div className="col-4 p-5">
                <a href="" className="text-decoration-none">
                    <img src="media\images\zerodhaFundhouse.png" alt="Smallcase"></img>
                    <p>Asset management</p>

                </a>
            </div>
            <div className="col-4 p-5">
                <a  href="" className="text-decoration-none">
                    <img style={{width:"10rem"}} src="media\images\goldenpiLogo.png" alt="Smallcase"></img>
                    <p >Bonds trading platform</p>

                </a>
            </div>
             <div className="col-4 p-5 ml-5">
                <a href="" className="text-decoration-none">
                    <img style={{width:"13rem"}} src="media\images\dittoLogo.png" alt="Smallcase"></img>
                    <p>Insurance</p>

                </a>
            </div>
           
          
           
        </div>


      </div>

      <div>
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

export default Universe;
