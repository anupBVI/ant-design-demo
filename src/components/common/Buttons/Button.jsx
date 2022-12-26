import React from "react";
import { Button } from "antd";
import "./Button.css";

const BTN = (props) => {
  const { text, btnclass, htmlType , block } = props;

  return (
    <Button block={block} htmlType={htmlType}  className={btnclass}>
      {text}
    </Button>
  );
};

export default BTN;


