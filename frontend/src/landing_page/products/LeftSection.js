import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePLay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 mt-5 p-3">
          <img className="" src={imageURL} alt={productName} />
        </div>

        <div className="col-6 p-5 mt-5 ">
          <h1 className="mt-5">{productName} </h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none"> Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} className="text-decoration-none" style={{ marginLeft: "50px" }}>
              {" "}
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePLay}>
              {" "}
              <img
                src="/media/images/googlePlayBadge.svg"
                alt="Google Play"
              />{" "}
            </a>
            <a href={appStore}>
              {" "}
              <img src="/media/images/appstoreBadge.svg" alt="App Store" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
