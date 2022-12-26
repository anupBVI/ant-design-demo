import React from "react";
import { Button, Card, Col, Divider, Popconfirm, Row, Space, Typography, Upload } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { UploadOutlined } from '@ant-design/icons';

import { Layout } from "antd";
import Lay from "./Lay";

const { Header, Footer, Sider, Content } = Layout;

// const { Title,} = Typography;

const Test = () => {
  const style = {
    background: "#0092ff",
    padding: "8px 0",
  };
  return (
    <div className>
      <Title level={2} underline>
        LAYOUT
      </Title>
      <Divider></Divider>
      <Space>
    Space
    <Button type="primary">Button</Button>
    <Upload>
      <Button>
        <UploadOutlined /> Click to Upload
      </Button>
    </Upload>
    <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
      <Button>Confirm</Button>
    </Popconfirm>
  </Space>
  <br />
  <br />
  <br />

  <Space
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
    }}
  >
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
  <br />
  <br />
  <br />



      <Title level={2} underline>
        LAYOUT
      </Title>
      <Divider></Divider>
      {/* <Lay/> */}
      
      <Title level={2} underline>
        GRID
      </Title>
      <Divider> </Divider>

      <Row justify="center" gutter={[12, 12]}>
        justified="center"
        <Col order={4} className="gutter-row" span={4}>
          <div style={style}> col 1111</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}> col 222</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}> col 333</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}> col 444</div>
        </Col>
      </Row>
      <br />
      <Row gutter={[12, 12]}>
        <Col className="gutter-row" span={6} offset={6}>
          <div style={style}> offset from left 6 columns</div>
        </Col>
        <Col className="gutter-row" span={6} offset={6}>
          <div style={style}> offset from left 6 columns</div>
        </Col>
      </Row>
      <br />
      <Row gutter={2}>
        <Col span={18} push={6}>
          <div style={style}>col-18 col-push-6</div>
        </Col>
        <Col span={6} pull={18}>
          <div style={style}>col-6 col-pull-18</div>
        </Col>
      </Row>

      <Title level={2} underline>
        DIVIDER
      </Title>
      <Divider> </Divider>
      <Title level={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        perspiciatis cumque saepe.
      </Title>
      <Divider orientation="left">Divide left</Divider>
      <Title level={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        perspiciatis cumque saepe.
      </Title>
      <Divider orientation="center">Divide Center</Divider>
      <Title level={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        perspiciatis cumque saepe.
      </Title>
      <Divider orientation="right">Divide right</Divider>
      <Title level={2} underline>
        PARAGRAPGS-TYPOGRAPHY
      </Title>
      <Divider> </Divider>
      <Paragraph copyable>
        {" "}
        ,,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        labore, ,cumque perferendis Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestiae exercitationem cupiditate tempora quo sunt
        harum, possimus nobis ipsa, delectus illum atque perferendis.
      </Paragraph>

      <Paragraph editable>
        {" "}
        ,,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        labore, ,cumque perferendis Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestiae exercitationem cupiditate tempora quo sunt
        harum, possimus nobis ipsa, delectus illum atque perferendis.
      </Paragraph>

      <Paragraph
        ellipsis={{
          rows: 1,
          expandable: true,
          symbol: "Read More",
          suffix: "--William Shakespeare",
        }}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>

      <Title level={2} underline>
        TITLES-TYPOGRAPHY
      </Title>
      <Divider> </Divider>
      <Paragraph copyable>
        {" "}
        ,,Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        labore, ,cumque perferendis Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestiae exercitationem cupiditate tempora quo sunt
        harum, possimus nobis ipsa, delectus illum atque perferendis.
      </Paragraph>
      <Title type="success">h1. Ant Design</Title>
      <Title type="warning" level={2}>
        h2. Ant Design
      </Title>
      <Title type="danger" level={3}>
        h3. Ant Design
      </Title>
      <Title disabled level={4}>
        h4. Ant Design
      </Title>
      <Title mark level={5}>
        h5. Ant Design
      </Title>
      <Title keyboard level={5}>
        h5. Ant Design
      </Title>
      <Title underline level={5}>
        h5. Ant Design
      </Title>
      <Title strong level={5}>
        h5. Ant Design
      </Title>
      <Title italic level={5}>
        h5. Ant Design
      </Title>
      <Title mark level={5}>
        h5. Ant Design
      </Title>
      <Title mark level={5}>
        h5. Ant Design
      </Title>
    </div>
  );
};

export default Test;
