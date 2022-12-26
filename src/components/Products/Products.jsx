import { Row } from "antd";
import React from "react";
import "./Products.css";
import { Heading } from "../common/Fonts/Font";
import { ProductCard } from "../common/Card/Card";

const Products = (props) => {
  const { heading } = props;

  return (
    <div className="product-container">
      {heading && <Heading text={heading} align="center" />}
      <Row gutter={[12, 12]} className="row-wrapper">
        <ProductCard />
      </Row>
    </div>
  );
};

export default Products;
