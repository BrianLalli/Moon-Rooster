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
              style={{ textAlign: "center", fontSize: "2.5rem" }}
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
                style={{ paddingTop: "0" }} // Use paddingTop to remove top padding
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
            <form className={Style.contact__form + " w-100"}>
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
                    name="email"
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
                    backgroundColor: "#1c75bc", // Replace with the actual hex code
                    color: "white",
                    borderRadius: "10px",
                  }}
                  className={`py-2 px-4`}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <SimpleFooter />
    </div>
  );
}
