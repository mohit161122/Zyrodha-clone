import React from "react";

function Education() {
  return (
    <div className="conclusion">
      <div className="row">
        <div className="col-6 text-center mt-5">
          <img src="media/images/education.svg"></img>
        </div>
        <div className="col-6 mt-5">
          <h4>Free and open market education</h4>

          <div className="col-7 mt-5">
            <p>
              Varsity the largest online stock market education book in the
              world converting everything from the basic to advanced trading
            </p>

            <a
              class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="#"
            >
              Versity <i class="fa-solid fa-arrow-right"></i>
            </a>

            <p className="mt-5">
              Trading Q&A, the most active trading and inversting community in
              india for all you market realated wuaries
            </p>

            <a
              class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
              href="#"
            >
              TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
