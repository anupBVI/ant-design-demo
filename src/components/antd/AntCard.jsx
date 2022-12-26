import React, { useState } from "react";
import { Avatar, Card, Typography } from "antd";
import { Row } from "antd";
import { Space } from "antd";
import { Col } from "antd";
import Meta from "antd/es/card/Meta";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";

const AntCard = () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Typography.Title level={2} underline>
        CARD COMPONENT{" "}
      </Typography.Title>
      <Row gutter={[24, 24]}>
        {/* <Space style={{ justifyContent: "center", width: "100%" }}>
        
        </Space> */}
        <Col className="gutter-row" span={6}>
          <Card
            title="Default size card"
            extra={<a href="#">Read More</a>}
            style={{
              width: 300,
            }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>

        <Col className="gutter-row" span={6}>
          {" "}
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={{
              width: 300,
              marginTop: 16,
            }}
            loading={loading}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AntCard;
