import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-secondary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4">
          <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <img src="https://www.digitalsahuji.com/storage/app/public/company/2023-06-27-649a72e490fce.png" alt="" />
                <p className=" fs-3 pt-5 text-warning">
                  Download Our App
                 
                </p>
                <div>
                <img className="w-25" src="https://www.digitalsahuji.com/public/assets/front-end/png/google_app.png" alt="" />
                </div>
               
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                 <h6 className="text-uppercase fw-bold mb-4">Special</h6>
                <p>
                  <a href="#!" className="text-reset">
                  Featured Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Latest Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Best Selling Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Top Rated Products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                  Top Rated Products
                  </a>
                </p>
                Register As A Student
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3" /> + 01 234 567 89
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}

export default Footer;
