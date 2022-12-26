import {
  Col,
  Divider,
  Menu,
  message,
  Pagination,
  Popover,
  Row,
  Steps,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Heading, Title } from "../../components/common/Fonts/Font";
import "./Register.css";

import {
  AppstoreOutlined,
  LoadingOutlined,
  MailOutlined,
  PlusOutlined,
  SettingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UnlockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { Link, Navigate } from "react-router-dom";
import BTN from "../../components/common/Buttons/Button";
import Check from "../../components/antd/Check";
import Datepick from "../../components/antd/Datepick";
import Forms from "./../../components/antd/Forms";
import AntCard from "../../components/antd/AntCard";
import CollapseComp from "../../components/antd/CollapseComp";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Register = () => {
  const [redirect, setRedirect] = useState(false);

  const openMessage = () => {
    const key = "updatable";

    message.open({
      key,
      type: "loading",
      content: "Registering...",
    });
    setTimeout(() => {
      message.open({
        key,
        type: "success",
        content: "Registered Successfully!",
        duration: 2,
      });
    }, 1000);
  };
  //   const { fName } = formData;

  const onFinish = (values) => {
    openMessage();
    console.log("Success:", values);
    setTimeout(() => {
      setRedirect(true);
    }, 1000);
  };

  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  const items2 = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: <Link to="/">Navigation Four - Link</Link>,
      key: "alipay",
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick2 = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const description = "This is a description.";

  // ::::::::::::::::::::::::::: POPOVER FOR STEPS DOTS
  const customDot = (dot, { status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      {dot}
    </Popover>
  );

  // ::::::::::::::::::::::::::: POPOVER FOR STEPS DOTS

  // :::::::::::::::::::::::::::  C A S C A D E R
  const options = [
    {
      value: "India",
      label: "India",
      children: [
        {
          value: "Maharashtra",
          label: "Maharashtra",
          children: [
            {
              value: "Nagpur",
              label: "Nagpur",
            },
          ],
        },
      ],
    },
    {
      value: "Pakistan",
      label: "Pakistan",
      children: [
        {
          value: "Punjab",
          label: "Punjab",
          children: [
            {
              value: "Nagpur",
              label: "Nagpur",
            },
          ],
        },
      ],
    },
    {
      value: "India",
      label: "India",
      children: [
        {
          value: "Maharashtra",
          label: "Maharashtra",
          children: [
            {
              value: "Nagpur",
              label: "Nagpur",
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  const filter = (inputValue, path) =>
    path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

  // :::::::::::::::::::::::::::  C A S C A D E R

  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  return (
    <>
      <div className="register-container">
      <CollapseComp/>


        <Row gutter={[24, 12]} className="row-wrapper">
          <Col className="gutter-row" lg={24} md={16} sm={16} xs={24}>
            <div className="content">
              <Divider orientation="center">ANT D </Divider>
              <AntCard />
              <Forms />

              <Divider orientation="center"></Divider>
              <Typography.Title level={2} underline>
                Date picker{" "}
              </Typography.Title>

              <Row gutter={[24, 24]}>
                <Col className="gutter-row" span={16} offset={3}>
                  <Datepick />
                </Col>
              </Row>
              <Divider orientation="center"></Divider>

              <Divider orientation="center"></Divider>
              <Typography.Title level={2} underline>
                Checkbox
              </Typography.Title>

              <Row gutter={[24, 24]}>
                <Col className="gutter-row" span={16} offset={3}>
                  <Check />
                </Col>
              </Row>
              <Divider orientation="center"></Divider>

              <Divider orientation="center"></Divider>
              <Typography.Title level={2} underline>
                C A S C A D E R{" "}
              </Typography.Title>

              <Row gutter={[24, 24]}>
                <Col className="gutter-row" span={16} offset={3}>
                  <Cascader
                    options={options}
                    onChange={onChange}
                    placeholder="Please select"
                    limit={1}
                    showSearch={{
                      filter,
                    }}
                    onSearch={(value) => console.log(value)}
                  />
                </Col>
              </Row>

              <Divider orientation="center"></Divider>

              <Typography.Title level={2} underline>
                S T E P S
              </Typography.Title>

              <Row gutter={[24, 24]}>
                <Col className="gutter-row" span={16} offset={3}>
                  <Steps
                    current={1}
                    items={[
                      {
                        title: "Finished",
                        description,
                      },

                      {
                        title: "In Progress",
                        description,
                        subTitle: "Left 00:00:08",
                      },
                      {
                        title: "Waiting",
                        description,
                      },
                    ]}
                  />
                </Col>

                <Col className="gutter-row" span={16} offset={3}>
                  <Steps
                    items={[
                      {
                        title: "Login",
                        status: "finish",
                        icon: <UserOutlined />,
                      },
                      {
                        title: "Verification",
                        status: "finish",
                        icon: <SolutionOutlined />,
                      },
                      {
                        title: "Pay",
                        status: "process",
                        icon: <LoadingOutlined />,
                      },
                      {
                        title: "Done",
                        status: "",
                        icon: <SmileOutlined />,
                      },
                    ]}
                  />
                </Col>

                <Col className="gutter-row" span={16} offset={3}>
                  <Steps
                    current={1}
                    status="error"
                    items={[
                      {
                        title: "Finished",
                        description,
                      },
                      {
                        title: "In Process",
                        description,
                      },
                      {
                        title: "Waiting",
                        description,
                      },
                    ]}
                  />
                </Col>

                <Col className="gutter-row" span={16} offset={3}>
                  <Steps
                    direction="vertical"
                    progressDot
                    current={1}
                    items={[
                      {
                        title: "Finished",
                        description: "This is a description.",
                      },
                      {
                        title: "In Progress",
                        description: "This is a description.",
                      },
                      {
                        title: "Waiting",
                        description: "This is a description.",
                      },
                    ]}
                  />
                </Col>

                <Col className="gutter-row" span={16} offset={3}>
                  <Steps
                    current={1}
                    percent={70}
                    progressDot={customDot}
                    items={[
                      {
                        title: "Finished",
                        description,
                      },
                      {
                        title: "In Progress",
                        description,
                      },
                      {
                        title: "Waiting",
                        description,
                      },
                      {
                        title: "Waiting",
                        description,
                      },
                    ]}
                  />
                </Col>
              </Row>

              <Divider orientation="center"></Divider>

              <Typography.Title level={2} underline>
                PAGINATION
              </Typography.Title>

              <Row gutter={12}>
                <Col className="gutter-row" span={24} offset={6}>
                  <Pagination total={500} itemRender={itemRender} />
                </Col>
              </Row>
              <br />
              <br />
              <Row gutter={12}>
                <Col className="gutter-row" span={24} offset={6}>
                  <Pagination
                    defaultCurrent={3}
                    showLessItems={true}
                    responsive
                    // pageSize={5}
                    showQuickJumper={true}
                    showSizeChanger
                    total={85}
                    showTotal={(total, range) =>
                      `${range[0]}-${range[1]} of ${total} items`
                    }
                    defaultPageSize={20}
                  />
                </Col>
              </Row>
              <Divider orientation="center"></Divider>

              <Typography.Title level={2} underline>
                MENU
              </Typography.Title>
              <br />
              <Menu
                onClick={onClick2}
                selectedKeys={[current]}
                mode="horizontal"
                items={items2}
              />
              <br />
              <br />
              <br />

              <Menu
                onClick={onClick}
                style={{
                  width: 256,
                }}
                theme={"dark"}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
              />
              <Divider orientation="center">ANT D</Divider>
            </div>
          </Col>
        </Row>
      </div>
      <div className="register-container">
        <Row gutter={[24, 12]} className="row-wrapper">
          <Col className="gutter-row" lg={12} md={12} sm={16} xs={24}>
            <div className="content">
              <Heading align=" center" text="Register " />

              <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                onFinish={onFinish}
              >
                <Row gutter={12}>
                  <Col className="gutter-row" lg={12} md={24}>
                    <Form.Item
                      rules={[
                        {
                          required: true,
                          message: "Please input your first name",
                        },
                      ]}
                      name="fName"
                      label="First Name"
                    >
                      <Input prefix={<UserOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col className="gutter-row" lg={12} md={24}>
                    <Form.Item name="lName" label="Last Name">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please enter your Email!",
                    },
                  ]}
                  name="email"
                  label="Email"
                >
                  <Input prefix={<MailOutlined />} />
                </Form.Item>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please enter a password",
                    },
                  ]}
                  name="password"
                  label="Password"
                >
                  <Input.Password prefix={<UnlockOutlined />} />
                </Form.Item>
                <Form.Item name="country" label="Select country">
                  <Select>
                    <Select.Option value="ind">India</Select.Option>
                    <Select.Option value="aus"> Australia</Select.Option>
                    <Select.Option value="eng"> England</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  labelCol={{ span: 4 }}
                  wrapperCol={{ span: 24 }}
                  name="gender"
                  label="Select Gender"
                >
                  <Radio.Group>
                    <Radio value="male"> Male </Radio>
                    <Radio value="female"> Female </Radio>
                    <Radio value="Others"> Others </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  wrapperCol={{ span: 24 }}
                  name="date"
                  label="Date of Birth"
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="range" label="Choose duration">
                  <RangePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="address" label="Address">
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  wrapperCol={3}
                  labelCol={24}
                  name="terms"
                  label="I agree the terms and conditions Terms and conditions"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  name="notify"
                  valuePropName="checked"
                  wrapperCol={{ span: 16 }}
                >
                  <Checkbox>Allow Notifications</Checkbox>
                </Form.Item>

                <Row>
                  <Col span={24} offset={2}>
                    <Form.Item wrapperCol={{ span: 20 }}>
                      {/* <Button type="primary" block htmlType="submit">
                  Submit
                </Button> */}

                      <BTN
                        text="Register"
                        block={true}
                        htmlType={"submit"}
                        btnclass="primary-btn"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
        {redirect && <Navigate to="/" />}
      </div>
    </>
  );
};

export default Register;
