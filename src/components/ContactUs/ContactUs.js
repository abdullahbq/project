import React from "react"

const ContactUs = () => (
  <section className="contactus-section">
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-7 col-md-12">
          <form
            method="POST"
            role="presentation"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            className="card p-4 shadow mb-4 border-primary"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-row">
              <div className="col-lg-12 form-group mb-2">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-lg-12 form-group mb-2">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="col-lg-12 form-group mb-2">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="col-lg-12 form-group mb-4">
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="8"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="text-center">
              <div
                className="btn-group text-decoration-none mb-4"
                role="group"
                aria-label="Send"
              >
                <button type="submit" className="btn btn-primary shadow">
                  <span className="mx-4">Submit</span>
                </button>
                <button type="reset" className="btn btn-light shadow">
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

export default ContactUs
