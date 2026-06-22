import React from "react";

function NotFound() {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mt-4">
        <h1>404 Not Found</h1>
        <p>
         Sorry, the page you are looking for does not Exist.
        </p>

        {/* <Link>
          {" "}
          <button
            type="button"
            class="btn btn-primary p-2 mt-2 mb-5 fs-5 "
            style={{ width: "15%", margin: "0 auto" }}
          >
            Go Home{" "}
          </button>
        </Link> */}

      </div>
    </div>
  );
}

export default NotFound;
