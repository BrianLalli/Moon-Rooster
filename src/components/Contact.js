import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./Content_option";
import Style from "./contact.module.scss";
import logo from "../img/MR_Blue.png";
import SimpleFooter from "../components/SimpleFooter";
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>
          Contact Us | Get in Touch with Moon Rooster LLC in Scranton
        </title>
        <meta
          name="description"
          content="Reach out to Moon Rooster LLC for expert web design and software development services in Scranton, PA. Contact us today for a consultation or project inquiries."
        />
      </Helmet>
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
                <label htmlFor="name" style={{ color: 'black' }}>Name</label>

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
                <label htmlFor="name" style={{ color: 'black' }}>Email</label>
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
              <label htmlFor="name" style={{ color: 'black' }}>Message</label>
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
      </Container>
      <SimpleFooter />
    </div>
  );
}
