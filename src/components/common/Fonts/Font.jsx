import { Space } from "antd";
import React from "react";
import "./Font.css";

export const Title = (props) => {
  const { text, align,color } = props;
  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        justifyContent: `${align}`,
        textAlign: `${align}`,
      }}
    >
      <span className="title" style={{color:`${color}`}}>{text}</span>
    </Space>
  );
};

export const SubTitle = (props) => {
  const { text, align, color } = props;
  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        justifyContent: `${align}`,
        textAlign: `${align}`,
      }}
    >
      <span  className="sub-title" style={{color:`${color}`}}>{text}</span>
    </Space>
  );
};

export const Desc = (props) => {
  const { text, align } = props;

  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        justifyContent: `${align}`,
        textAlign: `${align}`,
      }}
    >
      <span className="desc">{text}</span>
    </Space>
  );
};

export const Heading = (props) => {
  const { text, align } = props;

  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",

        justifyContent: `${align}`,
        // textAlign: `${align}`,
        // textAlign: {align},
        // textAlign: {align},
      }}
    >
      <span className="heading">{text}</span>
    </Space>
  );
};

export const Flinks = (props) => {
  const { text, align } = props;

  return (
    <Space
      direction="horizontal"
      style={{
        width: "100%",
        justifyContent: `${align}`,
        textAlign: `${align}`,
      }}
    >
      <span className="fLinks">{text}</span>
    </Space>
  );
};
