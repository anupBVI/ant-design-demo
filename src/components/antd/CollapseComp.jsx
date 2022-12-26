import {
  Avatar,
  Button,
  Col,
  Divider,
  Empty,
  Image,
  List,
  message,
  Popover,
  Row,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Collapse } from "antd";
import { Descriptions } from "antd";
import VirtualList from "rc-virtual-list";
import TableComp from "./TableComp";
import TabsComp from "./TabsComp";
import TimelineComp from "./TimelineComp";
import TourComp from "./TourComp";
import TreeComp from "./TreeComp";
import AlertComp from "./Feedback/AlertComp";

const { Panel } = Collapse;

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
const ContainerHeight = 400;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const container = {
  width: "98vw",
  margin: "10px auto",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};
const wrapper = {
  margin: "12px",
  display: "flex",
  justifyContent: "center",
};

const content = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "10px",
  borderRadius: "8px",
  background: "#ffffff",
  boxShadow: "14px 14px 39px #e3e3e3, -14px -14px 39px #ffffff",
};

const CollapseComp = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const data2 = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  //   virtual list
  const [data3, setData3] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData3(data3.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };
  //   virtual list

  // POPOVERS
  const content22 = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  // POPOVERS

  return (
    <div style={container}>
      <Row gutter={12} style={wrapper}>
        <Col className="gutter-row" span={24}>
          <div className="content" style={content}>
           
            <h2>FEEDBACKS</h2>
            <AlertComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>

            <h2>Tree</h2>
            <TreeComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>
            <h2>Tree</h2>
            <TreeComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>
            <h2>Tree</h2>
            <TreeComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>
            <h2>Tree</h2>
            <TreeComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>

            <h2>Tree</h2>
            <TreeComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>

            <h2>Tour</h2>
            <TourComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>
            <h2>Timeline</h2>
            <TimelineComp />
            <Divider>
              {" "}
              |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
              |||||||||||||| ||||||||||||||
            </Divider>

            <h2>Tabs</h2>
            <TabsComp />

            <Divider> ||||||||||||||</Divider>

            <h2>Tables</h2>
            <TableComp />

            <h2>Collapse</h2>

            <Collapse
              expandIconPosition
              ghost={false}
              bordered={true}
              defaultActiveKey={3}
              onChange={onChange}
            >
              <Panel header="This is panel header 1" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>

            <h2>Descriptions</h2>

            <Descriptions size={"small"} bordered title="User Info">
              <Descriptions.Item label="UserName">
                Zhou Maomao
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                1810000000
              </Descriptions.Item>
              <Descriptions.Item label="Live">
                Hangzhou, Zhejiang
              </Descriptions.Item>
              <Descriptions.Item label="Remark">Remarks test</Descriptions.Item>
              <Descriptions.Item label="Address">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </Descriptions.Item>
            </Descriptions>

            <h2>Empty</h2>

            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

            <h2>Images</h2>

            <Row gutter={12}>
              <Image.PreviewGroup>
                <Image
                  width={200}
                  preview={{
                    visible: false,
                  }}
                  src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
                <Image
                  width={200}
                  src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                />
              </Image.PreviewGroup>
              <br />
              <Col className="gutter-row" span={5}>
                <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <Image
                  width={200}
                  height={200}
                  src="error"
                  fallback="data:image/png;base64,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"
                />
              </Col>
            </Row>

            <h2>Lists</h2>
            <List
              header={<div>Header</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text mark>[ITEM]</Typography.Text> {item}
                </List.Item>
              )}
            />

            <List
              bordered
              itemLayout="horizontal"
              dataSource={data2}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />

            <List bordered>
              <h2>Virtual list</h2>
              <VirtualList
                data={data3}
                height={ContainerHeight}
                itemHeight={47}
                itemKey="email"
                onScroll={onScroll}
              >
                {(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.picture.large} />}
                      title={<a href="https://ant.design">{item.name.last}</a>}
                      description={item.email}
                    />
                    <div>Content</div>
                  </List.Item>
                )}
              </VirtualList>
            </List>

            <h2>POPOVERS</h2>

            <div>
              <Popover
                placement="topLeft"
                content={content22}
                title="Title"
                trigger="hover"
              >
                <Button>Hover me</Button>
              </Popover>
              <Popover content={content22} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>
              <Popover
                content={<a onClick={hide}>Close</a>}
                title="Title"
                trigger="click"
                open={open}
                onOpenChange={handleOpenChange}
              >
                <Button>Click me</Button>
              </Popover>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CollapseComp;
