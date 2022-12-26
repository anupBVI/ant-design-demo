import React, { useState } from "react";
import { Affix, Alert, Button, FloatButton, Skeleton, Space, Spin } from "antd";
import {
    CommentOutlined,
  CustomerServiceOutlined,
  DotChartOutlined,
  QuestionCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";

const SkeletonComp = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  const [container, setContainer] = useState(null);

  return (
    <div>
      <FloatButton
        icon={<CustomerServiceOutlined />}
        type="primary"
        shape={"circle"}
      />

      <FloatButton.Group
        shape="circle"
        style={{
          right: 24,
        }}
      >
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group
        shape="square"
        style={{
          right: 94,
        }}
      >
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
       
      <FloatButton.Group
        icon={<CustomerServiceOutlined />}
        type="primary"
        trigger="click"
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>

      <h4>
        Affix ("to fix a component or element at certial position in viewport")
      </h4>
      <br />

      <div
        className="scrollable-container"
        style={{ background: "gray", height: "400px" }}
        ref={setContainer}
      >
        <div className="background" style={{ Overflow: "scroll" }}>
          <p>Lorem3000</p>
          <Affix target={() => container}>
            <Button type="primary">Fixed at the top of container</Button>
          </Affix>

          <p>
            iusto veritatis adipisci, officia rerum a ipsam sit consectetur
            dolores reprehenderit voluptatem enim aliquid eos qui quam harum
            voluptate accusantium exercitationem! Dolore ratione consequatur
            tempora similique nobis iste sequi, provident atque, maxime commodi
            laudantium totam et, fugiat consequuntur.
          </p>
        </div>
      </div>

      <br />
      <br />

      <h4>Basic Spin</h4>
      <br />
      <Spin />
      <br />
      <br />
      <h4> Spin sizes</h4>
      <br />
      <Spin size="small" style={{ color: "red", marginLeft: "20px" }} />
      <Spin size="middle" style={{ color: "red", marginLeft: "20px" }} />
      <Spin size="large" style={{ color: "red", marginLeft: "20px" }} />
      <br />
      <br />
      <h4> Spin with container</h4>
      <br />
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Space>

      <br />
      <br />
      <h4>Basic</h4>
      <Skeleton />
      <br />
      <h4>Complex And Animated</h4>
      <Skeleton
        avatar
        active
        paragraph={{
          rows: 12,
        }}
      />
      <br />
      <br />
      <h4>Complex And Animated image</h4>
      <Skeleton.Image active={true} />
      <Skeleton.Node active={true}>
        <DotChartOutlined
          style={{
            fontSize: 40,
            color: "#bfbfbf",
          }}
        />
      </Skeleton.Node>
    </div>
  );
};

export default SkeletonComp;
