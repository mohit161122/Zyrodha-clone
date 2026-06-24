import React from "react";

function Signup() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="media\images\signup.png"></img>
        </div>
        <div className="col-6 mt-5 p-5">
          <div>
            <h2>Signup now</h2>
            <p>Or track your existing application</p>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group mb-3">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-2">
        <p>
          By submitting contect details, you authority Zerodha to contact to
          contact you even if you are register on DD & conduct online KYC for
          Demat account <br /> and PLMLA guidelines. To learn about the details
          we collect when you sign up with Zerodha, Visit out suppport Artical.
        </p>
        <p>
          if you are looking to open a HUF,Corporate,Platnership,or NRI account,
          toy Have to use the offiline form. For Help,click here.
        </p>
      </div>
    </div>
  );
}

export default Signup;
