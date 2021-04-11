import React from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import styled from "styled-components";

import rocket from "../assets/images/rocket-2.png";
import collabrate from "../assets/images/cta.png";
import collabrate1 from "../assets/images/cta1.png";
import collabrate2 from "../assets/images/cta2.png";
import collabrate3 from "../assets/images/cta-know-us.png";
import group33 from "../assets/images/group-33.png";
import service1 from "../assets/images/services-cloud-services.png";
import service2 from "../assets/images/services-cyber-security.png";
import service3 from "../assets/images/services-data-analytics.png";
import service4 from "../assets/images/services-digital-solutions.png";
import service5 from "../assets/images/services-managed-it-solutions.png";
import service6 from "../assets/images/services-software-testing.png";
import path5 from "../assets/images/path-5.png";
import process1 from "../assets/images/process-ci@2x.png";
import process2 from "../assets/images/process-contract.png";
import process3 from "../assets/images/process-execution.png";
import process4 from "../assets/images/process-proposal.png";
import process5 from "../assets/images/process-req-gathering.png";
import process6 from "../assets/images/process-resource-selection.png";
import acc1 from "../assets/images/moon.png";
// import env1 from "../assets/images/group-54.png";
// import env2 from "../assets/images/group-54-copy.png";
// import env3 from "../assets/images/group-54-copy-3.png";
// import env4 from "../assets/images/group-55.png";
import envelope from "../assets/images/group-59.png";
import clouds from "../assets/images/cloud-3.png";
import clouds2 from "../assets/images/combined-shape.png";

const Styles = styled.div`
  * {
    font-family: "Merriweather";
  }
  #second-section {
    margin: 15% 0;
  }
  #third-section {
    margin: 20% 0;
  }
  #third-text-section {
    margin: 15% 0 0 0;
  }
  #fourth-text-section {
    margin: 10% 0 10% 0;
  }
  #fourth-text-section {
    margin: 10% 0 10% 0;
  }
  #fifth-text-section {
    margin: 10% 0 0% 0;
  }
  .title-div {
    margin-top: 25%;
    align-content: center;
  }
  .title {
    margin: 0 0 32px;
    font-family: Merriweather;
    font-size: 80px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .rocket-img {
    width: 100%;
    height: 90%;
    object-fit: contain;
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }
  .collabrate-button {
    width: 176px;
    height: 40px;
    margin: 32px 400px 0 0;
    object-fit: contain;
  }
  .collabrate-button1 {
    width: 176px;
    height: 40px;
    margin: 32px 400px 0 0;
    object-fit: contain;
  }
  .bounce-top {
    cursor: pointer;
  }
  .bounce-top:hover {
    animation: bounce-top 0.5s both;
  }

  @keyframes bounce-top {
    50% {
      -webkit-transform: translateY(-25px);
      transform: translateY(-25px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
  }
  .bounce-top-envelope {
    cursor: pointer;
  }
  .bounce-top-envelope:hover {
    animation: bounce-top 0.5s both;
  }

  @keyframes bounce-top-envelope {
    50% {
      -webkit-transform: translateY(-25px);
      transform: translateY(-25px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
  }

  /*  */

  .clouds {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: #fdc679;
    position: absolute;
    top: 90%;
    left: 0;
  }
  .clouds-1 {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: #fdc679;
    position: absolute;
    top: 90%;
    left: 0%;
    z-index: 1;
  }

  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  .small-text {
    font-family: Titillium Web;
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    color: #fe5814;
    text-transform: uppercase;
  }
  .mid-text {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .head-text {
    font-family: Merriweather;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .second-section-img {
    width: 90%;
    height: auto;
    object-fit: contain;
  }
  .service-card {
    border: none;
    margin: 10% 0 5% 0;
  }
  .card-img {
    width: 156px;
    height: 131px;
    object-fit: contain;
  }
  .card-img:hover {
    animation: rotate-in-center 0.6s cubic-bezier(0.15, 0.16, 0.15, 0.54) both;
  }
  @keyframes rotate-in-center {
    0% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
      opacity: 1;
    }
  }

  .body-card {
    margin-top: 15px;
    object-fit: contain;
    border-radius: 10px;
    background-color: #fff5f1;
  }
  .card-title {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .card-text {
    margin: 16px 0;
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #333333;
  }
  .link-more {
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fe5814;
  }
  .background-div {
    padding: 5% 0;
    background: url("${path5}") no-repeat center;
    background-size: 1100px 400px;
  }
  .card-title-2 {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  .card-text-2 {
    font-family: Titillium Web;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  .acc-header {
    font-family: Merriweather;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .acc-desc {
    margin: 26px 0 0;
    font-family: Titillium Web;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .header-card {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: none;
    border-bottom: none;
  }
  /* .envelope-1 {
    position: absolute;
    top: 0;
    right: 30%;
  }
  .envelope-2 {
    position: absolute;
    top: 100%;
    right: 10%;
  }
  .envelope-3 {
    position: absolute;
    top: 100%;
    right: 10%;
  } */
  .envelope {
    width: 100%;
    height: 900px;
    object-fit: contain;
    position: absolute;
  }
  .join-us {
    margin-top: 35%;
  }
  .accordian-image {
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes scale-in-center {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Media Query  */
  @media only screen and (min-width: 360px) and (max-width: 640px) {
    .title {
      margin: 0 0 32px;
      font-family: Merriweather;
      font-size: 24px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #000;
      text-align: center;
    }
    .br {
      display: none;
    }
    .collabrate-button1 {
      margin-left: 22%;
    }
    .clouds {
      width: 100%;
      height: 100%;
      object-fit: contain;
      color: #fdc679;
      position: absolute;
      top: 75%;
      left: 0;
    }
    .clouds-1 {
      width: 100%;
      height: 100%;
      object-fit: contain;
      color: #fdc679;
      position: absolute;
      top: 75%;
      left: 0%;
      z-index: 1;
    }
    .who-text {
      margin-top: 10%;
    }
    .head-text {
      font-family: Merriweather;
      font-size: 18px;
      color: #000000;
    }
    .mid-text {
      font-family: Titillium Web;
      font-size: 12px;
    }
    .link-more {
      font-family: Titillium Web;
      font-size: 15px;
      color: #fe5814;
    }
    .background-div {
      display: none;
    }
    .accordian-image {
      width: 251px;
      height: 173px;
      object-fit: contain;
      margin: 5% 0;
    }
    .envelope {
      width: 100%;
      height: auto;
      object-fit: contain;
      position: absolute;
      top: 35%;
      left: 58%;
    }
    .bounce-top-envelope {
      width: 116px;
      height: 32px;
      object-fit: contain;
    }
    .head-text {
      font-family: Merriweather;
      font-size: 15px;
    }
    .join-us {
      margin-top: 10%;
    }
    .envelope-br {
      display: none;
    }
  }
`;

function Home() {
  return (
    <>
      <Styles>
        <Container>
          <section>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={"title-div"}>
                  <h1 className={"title"}>
                    We Engineer <br /> brilliant <br className={"br"} />
                    solutions
                  </h1>
                  <a className={"collabrate-button1 mt-5"} href="/">
                    <Image
                      src={collabrate}
                      alt="collabrate"
                      className={"bounce-top"}
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className={"mt-5"}>
                  <Image src={rocket} alt="rocekt" className={"rocket-img"} />
                </div>
              </Col>
            </Row>
          </section>

          <section id={"second-section"}>
            <div className={"mb-5"}>
              <Image src={clouds} alt="" className={"clouds-1"} />
              <Image src={clouds2} alt="" className={"clouds"} />
            </div>
          </section>

          <section id={"third-section"}>
            <Row>
              <Col
                xs={{ order: "last" }}
                sm={12}
                md={6}
                lg={6}
                xl={{ order: "first" }}
              >
                <div className={"who-text"}>
                  <h4 className={"small-text"}>Who are we</h4>
                  <div>
                    <h1 className={"head-text"}>We are clouds experts</h1>
                    <h3 className={"mid-text"}>
                      A team of cloud experts commited to provide exceptional{" "}
                      <br /> tech solutions to complex problems with our
                      expertise and <br /> favourite technology, with pleasure!
                    </h3>
                  </div>
                  <a className={"collabrate-button know-us mt-5"} href="/">
                    <Image
                      src={collabrate3}
                      alt="collabrate"
                      className={"bounce-top"}
                    />
                  </a>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div>
                  <Image
                    src={group33}
                    alt="group33"
                    className={"second-section-img"}
                  />
                </div>
              </Col>
            </Row>
          </section>

          <section>
            <div className={"text-left"}>
              <h4 className={"small-text"}>Our Service</h4>
              <h1 className={"head-text"}>What can we do for you</h1>
              <h3 className={"mid-text"}>
                We strive to bring the highest quality solutions with a fresh
                prespective focused on emerging technology
              </h3>
            </div>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service1}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Cloud Service
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service2}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Cyber Security
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service3}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Software Testing
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service4}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Data Analytics & Insight
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service5}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Digital Solution
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={service6}
                      className={"card-img"}
                    />
                  </div>
                  <Card.Body className={"body-card"}>
                    <Card.Title className={"card-title"}>
                      Manged IT Solution
                    </Card.Title>
                    <Card.Text className={"card-text"}>
                      We Solve complex problems with our favourite technology.
                    </Card.Text>
                    <a variant="primary" className={"link-more"} href="/">
                      More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>

          <section id={"third-text-section"}>
            <div>
              <h4 className={"small-text"}>Process</h4>
              <div>
                <h1 className={"head-text"}>We mind the process!</h1>
                <h3 className={"mid-text"}>
                  We Strive to bring the highest quality solution with a fresh
                  prespective focused on emerging technology
                </h3>
              </div>
            </div>

            <div className={"background-div"}>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                  <Card style={{ width: "15.5rem" }} className={"service-card"}>
                    <div className={"text-center"}>
                      <Card.Img
                        variant="top"
                        src={process5}
                        className={"card-img"}
                      />
                      <Card.Body className={"body-card"}>
                        <Card.Title className={"card-title-2"}>
                          Requirement gathering
                        </Card.Title>
                        <Card.Text className={"card-text-2"}>
                          A growing part of our business is focused on emerging
                          tech.
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                  <Card style={{ width: "15.5rem" }} className={"service-card"}>
                    <div className={"text-center"}>
                      <Card.Img
                        variant="top"
                        src={process6}
                        className={"card-img"}
                      />
                      <Card.Body className={"body-card"}>
                        <Card.Title className={"card-title-2"}>
                          Resource Selection
                        </Card.Title>
                        <Card.Text className={"card-text-2"}>
                          A growing part of our business is focused on emerging
                          tech.
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                  <Card style={{ width: "15.5rem" }} className={"service-card"}>
                    <div className={"text-center"}>
                      <Card.Img
                        variant="top"
                        src={process4}
                        className={"card-img"}
                      />
                      <Card.Body className={"body-card"}>
                        <Card.Title className={"card-title-2"}>
                          Proposal
                        </Card.Title>
                        <Card.Text className={"card-text-2"}>
                          A growing part of our business is focused on emerging
                          tech.
                        </Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>

            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                <Card style={{ width: "15.5rem" }} className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={process3}
                      className={"card-img"}
                    />
                    <Card.Body className={"body-card"}>
                      <Card.Title className={"card-title-2"}>
                        Execution
                      </Card.Title>
                      <Card.Text className={"card-text-2"}>
                        A growing part of our business is focused on emerging
                        tech.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                <Card style={{ width: "15.5rem" }} className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={process1}
                      className={"card-img"}
                    />
                    <Card.Body className={"body-card"}>
                      <Card.Title className={"card-title-2"}>
                        Continous improvement
                      </Card.Title>
                      <Card.Text className={"card-text-2"}>
                        A growing part of our business is focused on emerging
                        tech.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={4} className={"p-3"}>
                <Card style={{ width: "15.5rem" }} className={"service-card"}>
                  <div className={"text-center"}>
                    <Card.Img
                      variant="top"
                      src={process2}
                      className={"card-img"}
                    />
                    <Card.Body className={"body-card"}>
                      <Card.Title className={"card-title-2"}>
                        Contract finalization
                      </Card.Title>
                      <Card.Text className={"card-text-2"}>
                        A growing part of our business is focused on emerging
                        tech.
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </Row>
          </section>

          <section id="fourth-text-section">
            <div>
              <h4 className={"small-text"}>Engagement Model</h4>
              <div>
                <h1 className={"head-text"}>We Offer the choice</h1>
                <h3 className={"mid-text"}>
                  Lorm Ipsum si simply dummy text of printing and typesetting
                  indsutry
                </h3>
              </div>
            </div>
            <Accordion defaultActiveKey="0">
              <>
                <Card.Header className={"header-card"}>
                  <Accordion.Toggle
                    className={"acc-header"}
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    Full Time Model!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <div className={"acc-desc mt-3"}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit,
                        </div>
                      </Col>
                      <Col md={6}>
                        <Image
                          src={acc1}
                          alt="acc1"
                          className={"accordian-image"}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </>

              <>
                <Card.Header className={"header-card"}>
                  <Accordion.Toggle
                    className={"acc-header"}
                    as={Button}
                    variant="link"
                    eventKey="1"
                  >
                    Part Time Model
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <div className={"acc-desc"}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </div>
                      </Col>
                      <Col md={6}>
                        <Image
                          src={acc1}
                          alt="acc1"
                          className={"accordian-image"}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </>

              <>
                <Card.Header className={"header-card"}>
                  <Accordion.Toggle
                    className={"acc-header"}
                    as={Button}
                    variant="link"
                    eventKey="2"
                  >
                    Hybrid Model
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <div className={"acc-desc"}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </div>
                      </Col>
                      <Col md={6}>
                        <Image
                          src={acc1}
                          alt="acc1"
                          className={"accordian-image"}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </>
            </Accordion>
          </section>

          <section id="fifth-text-section">
            <Row>
              <Col xs={4} sm={4} md={6} lg={6} xl={6}>
                <h4 className={"small-text"}>Collabrate with us</h4>
                <div>
                  <h1 className={"head-text"}>
                    Have an idea?
                    <br className={"envelope-br"} /> Share With Us!
                  </h1>
                  <a className={"collabrate-button-envelope mt-5"} href="/">
                    <Image
                      src={collabrate1}
                      alt="collabrate"
                      className={"bounce-top-envelope"}
                    />
                  </a>
                </div>
              </Col>
              <Col xs={4} sm={4} md={6} lg={6} xl={6}>
                <div>
                  <Image src={envelope} className={"envelope"} />
                </div>
              </Col>

              <Col xs={6} sm={6} md={6} lg={6} xl={6} className={"join-us"}>
                <h4 className={"small-text"}>We Are looking for talents</h4>
                <div>
                  <h1 className={"head-text"}>
                    Do you have the same passion and love for technology like we
                    do?
                  </h1>
                  <a className={"collabrate-button mt-3"} href="/">
                    <Image
                      src={collabrate2}
                      alt="collabrate"
                      className={"bounce-top-envelope"}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </Styles>
    </>
  );
}

export default Home;

/* <Container fluid>
  <div>
    <Image src={clouds} alt="clouds" className={"clouds bg-danger"} />
  </div>
</Container>; */
