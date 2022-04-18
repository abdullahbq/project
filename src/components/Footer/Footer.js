import React from "react"
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <section className="bg-dark">
      <footer className="container py-5">
        <div className="row">
          <div className="col-2">
            <h5 className="text-primary">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-primary">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2">
            <h5 className="text-primary">Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="/" className="nav-link p-0 text-muted">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 border-primary">
            <form>
              <h5 className="text-primary">Subscribe to our newsletter</h5>
              <p className="small text-light">
                Monthly digest of whats new and exciting from us.
              </p>
              <div className="d-flex w-100 mb-2">
                <label for="newsletter1">
                  Email address
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control shadow"
                    placeholder="Email address"
                  />{" "}
                </label>
              </div>
              <button className="btn btn-primary shadow" type="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="d-flex text-light justify-content-between py-4 my-4 border-top">
          <p>&copy; 2021 Company, Inc. All rights reserved.</p>
          <span>
            <ul className="list-unstyled justify-content-center d-flex mb-0">
              <Link className="ms-3" to="">
                <Facebook size="30" />
              </Link>
              <Link className="ms-3" to="">
                <Instagram size="30" />
              </Link>
              <Link className="ms-3" to="">
                <Linkedin size="30" />
              </Link>
            </ul>
          </span>
        </div>
      </footer>
    </section>
  )
}

export default Footer
