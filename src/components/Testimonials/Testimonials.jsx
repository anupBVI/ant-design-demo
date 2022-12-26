import React from "react";
import "./Testimonials.css";
import cardimage from "../../images/card-icon-1.png";
import { Col, Row, Space } from "antd";
import { Desc, Heading, Title } from "../common/Fonts/Font";

const Testimonials = () => {
  return (
    <div className="Testimonial-container">
      <Heading text={"Testimonials"} align="center"/>
      <Row gutter={[12, 6]} className="row-wrapper">
        <TestimonialCard />
      </Row>
    </div>
  );
};

export const TestimonialCard = () => {
  const TestimonialData = [
    {
      image: cardimage,
      title: "Title 001",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 002",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 003",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
    {
      image: cardimage,
      title: "Title 004",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorum ex voluptas necessitatibus nostrum, nobis quis atqueculpa maxime enim nesciunt in labore repellat.",
    },
  ];
  return TestimonialData.map((item, index) => {
    const { image, title, description } = item;
    return (
      <Col key={index} className="gutter-row" xs={12} sm={8} md={12} lg={6}>
        <div className="service-style">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <Title text={title} align="center" />
          <Desc text={description} align="center" />
        </div>
      </Col>
    );
  });
};

export default Testimonials;
