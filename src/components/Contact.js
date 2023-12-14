import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./Content_option";
import Style from "./contact.module.scss";
import logo from "../img/MR_Blue.png";
import SimpleFooter from "../components/SimpleFooter";

export default function ContactUs() {
  return (
    <div>
      <Container className={Style.contentWrapper}>
        <Row className="mb-5 mt-3">
          <Col lg="12" className="text-center">
            <img
              src={logo}
              alt="Your Logo"
              style={{
                width: "200px",
                height: "auto",
                display: "block",
                margin: "auto",
                padding: "5px",
              }}
            />
            <h1
              className="display-4 mb-4"
              style={{
                textAlign: "center",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              Contact Me
            </h1>

            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className={Style.sec_sp}>
          <Col lg="5" className="mb-5">
            <address className={Style.centeredContent}>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactConfig.YOUR_EMAIL}`}
                className={`${Style.emailLink}`}
                style={{ paddingTop: "0" }}
              >
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p className={Style.descriptionText}>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form
              action="https://formspree.io/f/mqkrzzzz"
              method="POST"
              className={Style.contact__form + " w-100"}
            >
              <div
                style={{ display: "flex", justifyContent: "center", gap: "4%" }}
              >
                <div className="form-group" style={{ width: "48%" }}>
                  <input
                    className={Style.formControl}
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                    style={{ height: "40px" }}
                  />
                </div>
                <div className="form-group" style={{ width: "48%" }}>
                  <input
                    className={Style.formControl}
                    id="email"
                    name="_replyto"
                    placeholder="Email"
                    type="email"
                    required
                    style={{ height: "40px" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className={Style.formControl}
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div
                className={Style.buttonWrapper}
                style={{ textAlign: "center" }}
              >
                <button
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    backgroundColor: "#1c75bc",
                    color: "white",
                    borderRadius: "25px",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                  className={`py-2 px-4`}
                  type="submit"
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#155b9c")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#1c75bc")
                  }
                >
                  Send
                </button>
              </div>
            </form>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg="6" className="mt-5">
            <div id="mc_embed_shell" className="text-center">
              <form
                action="https://moonrooster.us21.list-manage.com/subscribe/post?u=50b7dd5e8c304cee87f6bfe8d&id=5ba4358a2f&f_id=0048f0e6f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
              >
                <h2 style={{ textAlign: "center" }}>
                  Subscribe to our Newsletter
                </h2>
                <div className="form-group">
                  <label htmlFor="mce-EMAIL">Email Address *</label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="form-control"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mce-FNAME">First Name</label>
                  <input
                    type="text"
                    name="FNAME"
                    className="form-control"
                    id="mce-FNAME"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mce-LNAME">Last Name</label>
                  <input
                    type="text"
                    name="LNAME"
                    className="form-control"
                    id="mce-LNAME"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mce-PHONE">Phone Number</label>
                  <input
                    type="text"
                    name="PHONE"
                    className="form-control"
                    id="mce-PHONE"
                  />
                </div>
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  className="btn btn-primary mt-3"
                  id="mc-embedded-subscribe"
                  style={{
                    backgroundColor: "#1c75bc",
                    borderRadius: "25px",
                    transition: "background-color 0.3s ease-in-out",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#155b9c")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#1c75bc")
                  }
                />
              </form>
            </div>
          </Col>
        </Row>

        <SimpleFooter />
      </Container>
    </div>
  );
}
