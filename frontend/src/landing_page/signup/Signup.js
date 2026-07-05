import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // After signup, redirect to dashboard
    window.location.href = "/dashboard";
  };

  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-6 mt-5">
          <img src="media/images/signup.png" style={{ width: "100%" }} alt="Signup"></img>
        </div>
        <div className="col-6 mt-5 p-5">
          <div>
            <h2>Signup now</h2>
            <p>Or track your existing application</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Signup &amp; Go to Dashboard →
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-2">
        <p>
          By submitting contect details, you authority Zerodha to contact to
          contact you even if you are register on DD &amp; conduct online KYC for
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

