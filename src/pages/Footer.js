import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import collabrate from "../assets/images/cta.png";
import { GrInstagram } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Styles = styled.div`
  .footer-cont {
    margin: 14% 0 0 0;
    padding: 124px 125px 131px 165px;
    object-fit: contain;
    background-image: linear-gradient(120deg, #343434 15%, #000000 146%);
  }
  .footer-head {
    margin: 0 0 16px;
    font-family: Merriweather;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  .collabrate-button {
    width: 176px;
    height: 40px;
    margin: 32px 400px 0 0;
    object-fit: contain;
  }
  .location {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fe5814;
  }
  .office-text {
    opacity: 0.5;
    font-family: Titillium Web;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  .country {
    font-family: Titillium Web;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  ul {
    list-style-type: none;
  }
  .links {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fe5814;
  }
  li {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2.5rem;
    letter-spacing: normal;
    color: #ffffff;
  }
  .social-media {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fe5814;
  }
  .insta-icon {
    color: #fe5814;
  }
  .contact-info {
    padding: 0px 15px;
    font-family: Titillium Web;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  @media only screen and (min-width: 360px) and (max-width: 640px) {
    .contact-class {
      display: none;
    }
    .footer-cont {
      margin: 14% 0 0 0;
      padding: 50px;
      object-fit: contain;
      background-image: linear-gradient(120deg, #343434 15%, #000000 146%);
    }
    .unstyled {
      margin: 5% 0;
    }
  }
`;
function Footer() {
  return (
    <>
      <Styles>
        <Container fluid style={{ padding: "0px" }}>
          <section className={"footer-cont"}>
            <Row>
              <Col xs={12} sm={12} md={3} lg={3} xl={3}>
                <div className={"text-left"}>
                  <h2 className={"footer-head"}>
                    We Engineer brilliant solutions
                  </h2>
                  <a className={"collabrate-button"} href="/">
                    <Image src={collabrate} alt="collabrate" />
                  </a>
                </div>

                <div className={"mt-5"}>
                  <h2 className={"location"}>Location</h2>
                  <Row>
                    <Col xs={6} sm={6} md={6}>
                      <h3 className={"office-text"}>
                        Need the Office. <br /> Address here
                      </h3>
                      <h3 className={"country"}>Australia</h3>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                      <h3 className={"office-text"}>
                        Need the Office. <br /> Address here
                      </h3>
                      <h3 className={"country"}>Australia</h3>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                <ul className={"unstyled"}>
                  <li className={"links"}>Links</li>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Service</li>
                  <li>Process</li>
                  <li>Service</li>
                  <li>Parterns</li>
                  <li>Career</li>
                  <li>Blogs</li>
                  <li>Contact Us</li>
                </ul>
              </Col>

              <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                <ul className={"unstyled"}>
                  <li className={"links"}>Service</li>
                  <li>Cloud Service</li>
                  <li>Cyber Security</li>
                  <li>Software Testing</li>
                  <li>Digital Solution</li>
                  <li>Analytics, Insight & Data</li>
                  <li>Manged IT Service</li>
                </ul>
              </Col>

              <Col xs={6} sm={6} md={3} lg={3} xl={3}>
                <div>
                  <h2 className={"social-media"}>SOCIAL MEDIA</h2>
                  <GrInstagram size={"2rem"} className={"insta-icon"} />
                </div>

                <div className={"mt-5 contact-class"}>
                  <h2 className={"social-media"}>Contact</h2>

                  <div className={"d-flex mt-4"}>
                    <BiPhone size={"2rem"} className={"insta-icon"} />
                    <h2 className={"contact-info"}>7894651320</h2>
                  </div>
                  <div className={"d-flex mt-4"}>
                    <AiOutlineMail size={"2rem"} className={"insta-icon"} />
                    <h2 className={"contact-info"}>email@synnfo.com</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </Styles>
    </>
  );
}

export default Footer;
