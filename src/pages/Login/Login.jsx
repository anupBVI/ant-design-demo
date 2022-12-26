import {
  Breadcrumb,
  Col,
  Divider,
  Dropdown,
  message,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Heading } from "../../components/common/Fonts/Font";
import "./Login.css";

import "antd/dist/antd";

import { Navigate } from "react-router-dom";
import {
  CommentOutlined,
  DownOutlined,
  HomeOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import {} from "antd";
import { UnlockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";
import BTN from "../../components/common/Buttons/Button";
import Title from "antd/es/typography/Title";
import DropdownButton from "antd/es/dropdown/dropdown-button";

const Login = () => {
  const key = "updatable";
  const openMessage = () => {
    message.open({
      key,
      type: "loading",
      content: "Logging in...",
    });
    setTimeout(() => {
      message.open({
        key,
        type: "success",
        content: "Logged in Successfully!",
        duration: 2,
      });
    }, 1000);
  };

  const [redirect, setRedirect] = useState(false);

  const onFinish = (values) => {
    openMessage();
    console.log("Success:", values);
    setTimeout(() => {
      setRedirect(true);
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  const handleButtonClick = (e) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  };
  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />,
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */
  /* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

  return (
    <>
      <div className="login-container">
        {/* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        <Divider orientation="center">ANT D</Divider>

        <Title level={2} underline>
          Dropdowns
        </Title>
        <Row gutter={12} className="row-wrapper">
          <Col className="gutter-row" span={18}>
            <div className="content">
              <Space>
                <Dropdown
                  menu={{
                    items,
                    onClick,
                  }}
                >
                  <Button onClick={(e) => e.preventDefault()}>
                    Hover me, Click menu item
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </Space>

              <Space>
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                  Dropdown
                </Dropdown.Button>
                <Dropdown.Button
                  menu={menuProps}
                  placement="bottom"
                  icon={<UserOutlined />}
                  onClick={handleButtonClick}
                >
                  Dropdown
                </Dropdown.Button>
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                  Dropdown
                </Dropdown.Button>
                <Dropdown.Button menu={menuProps} onClick={handleMenuClick}>
                  Dropdown
                </Dropdown.Button>

                <Dropdown.Button
                  menu={menuProps}
                  icon={<DownOutlined />}
                  onClick={handleButtonClick}
                >
                  <Tooltip title="tooltip" key="leftButton">
                    Tooltip
                  </Tooltip>
                </Dropdown.Button>
              </Space>

              <Title level={2} underline>
                Breadcrumb
              </Title>

              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <HomeOutlined /> <span>Home </span>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <UserOutlined />
                  <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
              </Breadcrumb>

              <Title level={2} underline>
                {" "}
                SPACE{" "}
              </Title>
              <Space split={<Divider type="vertical" />}>
                <Typography.Link>Link</Typography.Link>
                <Typography.Link>Link</Typography.Link>
                <Typography.Link>Link</Typography.Link>
                <span></span>
              </Space>

              <Space.Compact block size={24} direction="vertical">
                <Tooltip title="Like">
                  <Button icon={<LikeOutlined />} />
                </Tooltip>
                <Tooltip title="comment">
                  <Button icon={<CommentOutlined />} />
                </Tooltip>
                <Tooltip title="Share">
                  <Button icon={<ShareAltOutlined />} />
                </Tooltip>
              </Space.Compact>

              <Space>
                <Button type="primary">Buttons</Button>
                <Button type="primary">Buttons</Button>
                <Button type="primary">Buttons</Button>
              </Space>

              <Space
                style={{
                  width: "100%",
                  background: "red",
                  justifyContent: "center",
                }}
                size={6}
                wrap
              >
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
                <Button type="primary">Button</Button>
              </Space>
            </div>
          </Col>
        </Row>

        <Divider orientation="center">ANT D</Divider>

        {/* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
        {/* :::::::::::::::::::::::::::::::::::::::::: A N T - D E S I G N ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

        <Row gutter={[24, 12]} className="row-wrapper">
          <Col className="gutter-row" lg={12} md={12} sm={16} xs={24}>
            <div className="content">
              <Heading align=" center" text="Login " />

              <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username or Email!",
                    },
                  ]}
                  label="Username"
                >
                  <Input prefix={<UserOutlined />} />
                </Form.Item>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username or Email!",
                    },
                  ]}
                >
                  <Input.Password prefix={<UnlockOutlined />} />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ span: 16 }}
                >
                  <Checkbox>Remember Me</Checkbox>
                </Form.Item>

                <Row>
                  <Col span={18} offset={3}>
                    <Form.Item wrapperCol={{ span: 24 }}>
                      {/* <Button type="primary" block htmlType="submit">
                  Submit
                </Button> */}

                      <BTN
                        text="Log in"
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

export default Login;
