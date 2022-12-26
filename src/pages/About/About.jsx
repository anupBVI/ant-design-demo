import { Col, Row } from "antd";
import React from "react";
import "./About.css";
import icon from "../../images/card-icon-1.png";
import Services from "../../components/Services/Services";
import styled from "styled-components";

import { Desc, Heading, Title } from "../../components/common/Fonts/Font";

const AboutButton = styled.button`
  background: red;
  color: white;
  padding: 12px;
  width: 100px;
  border: none;
  &:hover {
    background: green;
  }
`;
const About = () => {
  const cardData = [
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        " We are here because of our valuable customers, and their satisfaction is the main reason we place client pleasure first.We are not afraid to work together to better our ideas and services. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        " We are here because of our valuable customers, and their satisfaction is the main reason we place client pleasure first.We are not afraid to work together to better our ideas and services. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        " We are here because of our valuable customers, and their satisfaction is the main reason we place client pleasure first.We are not afraid to work together to better our ideas and services. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
    {
      icon: icon,
      title: "Optimum Client Satisfaction",
      description:
        " We are here because of our valuable customers, and their satisfaction is the main reason we place client pleasure first.We are not afraid to work together to better our ideas and services. We are motivated by client praise. It's like a crowdheering for a goal, we want to hear it more.",
    },
  ];
  return (
    <div className="about-container">
      <AboutButton>Hello </AboutButton>
      <Row gutter={[24, 12]} className="row-wrapper">
        <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
          <div className="content">
            <Heading text="Who we are ?" align="start" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
          </div>
        </Col>
        <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
          <div className="content">
            <Heading text="What We Do ?" align="start" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
            <Desc text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora eaque eius quos similique alias doloremque porro, quisquam ab vitae dicta ullam consequatur laudantium, voluptatibus veniam exercitationem quasi odit voluptates magni atque?" />
          </div>
        </Col>
      </Row>

      <div>
        <Heading align="center" text="Our Core Principles Make Us Unique" />
        <Title
          align="center"
          text="Deliver Reliable & Quality Electrical Services "
        />
      </div>

      <Row gutter={[12, 12]} className="cards">
        {cardData.map((item, index) => {
          const { icon, title, description } = item;
          return (
            <Col
              key={index}
              className="gutter-row"
              lg={6}
              md={12}
              sm={12}
              xs={24}
            >
              <div className="cardd">
                <div className="img-cont">
                  <img src={icon} alt="" />
                </div>
                <br />
                <Title align="center" text={title} />
                <Desc align="center" text={description} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default About;
