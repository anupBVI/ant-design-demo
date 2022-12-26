import { Button, Col, Row } from "antd";
import React from "react";
import BTN from "../common/Buttons/Button";
import { Flinks, Heading, SubTitle, Title } from "../common/Fonts/Font";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <Row gutter={[12, 12]} className="row-wrapper">
          <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
            <div className="content">
              <Title align={"start"} color={"white"} text={" Brand Name"} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non
                provident possimus. Nostrum voluptate est hic magnam! Vitae,
                obcaecati? Molestiae!
              </p>
            </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={12} lg={5}>
            <div className="content">
              <SubTitle text={"Important Links"} align="start" color="white" />

              <Flinks text={"Link 1"} align="start" />
              <Flinks text={"Link 2"} align="start" />
              <Flinks text={"Link 3"} align="start" />
              <Flinks text={"Link 4"} align="start" />
            </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={12} lg={5}>
            <div className="content">
              <SubTitle text={"Important Links"} align="start" color="white" />
              <Flinks text={"Link 1"} align="start" />
              <Flinks text={"Link 2"} align="start" />
              <Flinks text={"Link 3"} align="start" />
              <Flinks text={"Link 4"} align="start" />
            </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={12} lg={8}>
            <div className="content">
              <SubTitle text={"Newsletter"} align="start" color="white" />
              <div>
              <p>You will get all the latest news updates. </p>
              <div className="news">
                <input type="" placeholder="Enter your email" />
                <button>Subscribe</button>
                {/* <BTN text="subscribe" btnclass="subscribe" /> */}
              </div>

              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
