import { Row } from "antd";
import React from "react";
import "./Services.css";

import { Heading } from "../common/Fonts/Font";
import { ServiceCard } from "../common/Card/Card";

const Services = (props) => {
  const { heading } = props;
  return (
    <div className="services-container">
      {heading && <Heading text={heading} align="center" />}

      <Row gutter={[12, 12]} className="row-wrapper">
        <ServiceCard />
      </Row>
    </div>
  );
};

export default Services;
