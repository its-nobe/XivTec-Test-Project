import "../styles/Collab.scss";

import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class Collab extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const servicesItem = [
      {
        id: 1,
        // imgAsset: "/h1.jpeg",
        imgAsset:
          "https://cdn.discordapp.com/attachments/977560642762448977/977560810643652608/unknown.png",
        serviceH2: "AI + RPA is what we do",
        serviceH3:
          "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience",
        link: "/home",
        linkText: "AI + RPA Automation"
      },
      {
        id: 2,
        imgAsset:
          "https://cdn.discordapp.com/attachments/977560642762448977/977560671925436499/unknown.png",
        serviceH2: "Make Bolder Choices",
        serviceH3:
          "Digital focused strategies to realize market-changing ideas",
        link: "/home",
        linkText: "Build Better Apps"
      },
      {
        id: 3,
        imgAsset:
          "https://cdn.discordapp.com/attachments/977560642762448977/977560729240600636/unknown.png",
        serviceH2: "Innovate with Speed",
        serviceH3:
          "Create higher quality software, deliver on customer expectations and business goals",
        link: "/home",
        linkText: "DevOps"
      },
      {
        id: 4,
        imgAsset:
          "https://cdn.discordapp.com/attachments/977560642762448977/977560769258475561/unknown.png",
        serviceH2: "Embrace Cloud",
        serviceH3:
          "With Cloud-First accelerate innovation and optimize performance",
        link: "/home",
        linkText: "Cloud Services"
      }
    ];

    return (
      <div className="servicesMainDiv">
        {this.state.width > 756 &&
          servicesItem.map((service) => {
            return (
              <Fade bottom>
                <Row>
                  <Col md={6}>
                    <div className="servicesDescription">
                      <div className="servicesH2">
                        <h2>{service.serviceH2}</h2>
                      </div>
                      <div className="servicesH3">
                        <h3>{service.serviceH3}</h3>
                      </div>
                      <div className="servicesP">
                        <a href={service.link}>
                          <p>{service.linkText}</p>
                          <img
                            src="https://www.xivtech.io./Arrow-black.svg"
                            alt="arrow-black"
                          />
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <img
                      className="serviceImage"
                      src={service.imgAsset}
                      alt="servicesimage"
                    />
                  </Col>
                </Row>
              </Fade>
            );
          })}
        {this.state.width <= 756 &&
          servicesItem.map((service) => {
            return (
              <Fade bottom>
                <Row>
                  <div className="servicesDescription-b">
                    <div className="servicesH2-b">
                      <h2>{service.serviceH2}</h2>
                    </div>
                    <div className="servicesImageDiv">
                      <img
                        className="serviceImage-b"
                        src={service.imgAsset}
                        alt="servicesimage"
                      />
                    </div>
                    <div className="servicesH3-b">
                      <h3>{service.serviceH3}</h3>
                    </div>
                    <div className="servicesP-b">
                      <a href={service.link}>
                        <p>{service.linkText}</p>
                        <img
                          src="https://www.xivtech.io./Arrow-black.svg"
                          alt="arrow-black"
                        />
                      </a>
                    </div>
                  </div>
                </Row>
              </Fade>
            );
          })}
      </div>
    );
  }
}

export default Collab;
