import {
  AntDesignOutlined,
  InboxOutlined,
  LockOutlined,
  MinusOutlined,
  PlusOutlined,
  QuestionOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Space,
  Switch,
  Tooltip,
  Typography,
  Upload,
} from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Search from "antd/es/input/Search";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";

const Forms = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // --::::::::::::::::::::::::::::::::::::::::::::::::::MODAL FORM--::::::::::::::::::::::::::::::::::::::::::::::::::

  const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please input the title of collection!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input type="textarea" />
          </Form.Item>
          <Form.Item
            name="modifier"
            className="collection-create-form_last-form-item"
          >
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };

  //--:::::::::::::::::::::::::::::::::::::::::::::::::: MODAL FORM--::::::::::::::::::::::::::::::::::::::::::::::::::

  // ::::::::::::::::::::::::::::::::::: ADVANCE FORM :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // :::::::::::::::::::::::::::::::::::: ADVANCE FORM ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const onSearch = (value) => console.log(value);

  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };

  return (
    <div>
      <Divider orientation="center"></Divider>


      

      <Typography.Title level={2} underline>
        FORM COMPONENTS{" "}
      </Typography.Title>
      <Row gutter={[24, 24]}>
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <h2>Advance form</h2>
        </Space>
        <Col className="gutter-row" span={12} offset={6}>
          <Form
            scrollToFirstError
            name="validate_other"
            {...formItemLayout}
            onFinish={onFinish}
            initialValues={{
              "input-number": 3,
              "checkbox-group": ["A", "B"],
              rate: 3.5,
            }}
          >
            <span className="avatar-item">
              <Badge count={1}>
                <Avatar shape="square" icon={<UserOutlined />} />
              </Badge>
            </span>
            <br />

            <Avatar.Group>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
              <Tooltip title="Ant User" placement="top">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: "#1890ff" }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
            <br />
            {/* BADGES */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <Space size="large">
              <Badge count={count}>
                <Button>Cart</Button>
              </Badge>
              <ButtonGroup>
                <Button onClick={decline} icon={<MinusOutlined />} />
                <Button onClick={increase} icon={<PlusOutlined />} />
                <Button icon={<QuestionOutlined />} />
              </ButtonGroup>
            </Space>
            <br />
            <br />
            <br />
            <br />
            <br />

            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />

            <Input showCount maxLength={20} onChange={onChange} />
            <br />
            <br />
            <TextArea showCount maxLength={100} onChange={onChange} />

            <Form.Item label="Plain Text">
              <span className="ant-form-text">China</span>
            </Form.Item>
            <Form.Item
              name="country"
              label="Select country"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select your country!",
                },
              ]}
            >
              <Select placeholder="Please select a country">
                <Option value="china">China</Option>
                <Option value="usa">U.S.A</Option>
                <Option value="australia">
                  <Button buttonStyle={"solid"}> australia</Button>
                </Option>
                <Button value="am"> America</Button>
              </Select>
            </Form.Item>

            <Form.Item
              name="select-multiple"
              label="Select[multiple]"
              rules={[
                {
                  required: true,
                  message: "Please select your favourite colors!",
                  type: "array",
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select favourite colors"
              >
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
              </Select>
            </Form.Item>

            <Form.Item label="InputNumber">
              <Form.Item name="input-number" noStyle>
                <InputNumber min={1} max={10} />
              </Form.Item>
              <span
                className="ant-form-text"
                style={{
                  marginLeft: 8,
                }}
              >
                machines
              </span>
            </Form.Item>

            <Form.Item name="switch" label="Switch" valuePropName="checked">
              <Switch
                checkedChildren="ON"
                unCheckedChildren="OFF"
                defaultChecked
              />
              <Switch
                checkedChildren="ON"
                unCheckedChildren="OFF"
                size="small"
              />
            </Form.Item>

            <Form.Item name="slider" label="Slider">
              <Slider
                step={10}
                marks={{
                  0: "A",
                  20: "B",
                  40: "C",
                  60: "D",
                  80: "E",
                  100: "F",
                }}
              />
            </Form.Item>

            <Form.Item name="radio-group" label="Radio.Group">
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="radio-button"
              label="Radio Button"
              rules={[
                {
                  required: true,
                  message: "Please pick an item!",
                },
              ]}
            >
              <Radio.Group optionType="button" buttonStyle="solid">
                <Radio.Button value="a">item 1</Radio.Button>
                <Radio.Button value="b">item 2</Radio.Button>
                <Radio.Button value="c">item 3</Radio.Button>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="checkbox-group" label="Checkbox.Group">
              <Checkbox.Group>
                <Row>
                  <Col span={8}>
                    <Checkbox
                      value="A"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      A
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="B"
                      style={{
                        lineHeight: "32px",
                      }}
                      disabled
                    >
                      B
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="C"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      C
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="D"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      D
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="E"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      E
                    </Checkbox>
                  </Col>
                  <Col span={8}>
                    <Checkbox
                      value="F"
                      style={{
                        lineHeight: "32px",
                      }}
                    >
                      F
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item name="rate" label="Rate">
              <Rate />
            </Form.Item>

            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="longgggggggggggggggggggggggggggggggggg"
            >
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item label="Dragger">
              <Form.Item
                name="dragger"
                valuePropName="fileList"
                getValueFromEvent={normFile}
                noStyle
              >
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <br />
      <br />
      <br />
      <Row gutter={[24, 24]}>
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <h2>Modal form</h2>
        </Space>
        <Col className="gutter-row" span={12} offset={6}>
          <div>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
              }}
            >
              New Collection
            </Button>
            <CollectionCreateForm
              open={open}
              onCreate={onCreate}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <h2>Login form</h2>
        </Space>
        <Col className="gutter-row" span={12} offset={6}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              validateStatus="validating"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                allowClear
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item wrapperCol={24}>
              <Row gutter={12} style={{}}>
                <Col className="gutter-row" span={19}>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={5}>
                  <a className="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <h2>Complex form</h2>
        </Space>
        <Col className="gutter-row" span={18} offset={2}>
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            <Form.Item label="Username">
              <Space>
                <Form.Item
                  name="username"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Username is required",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: 160,
                    }}
                    placeholder="Please input"
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Need Help?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>

            <Form.Item label="Address2" name="address2">
              <Input.Group compact>
                <Form.Item name={["address2", "country"]}>
                  <Select placeholder="Select country">
                    <Option value="India">India</Option>
                    <Option value="Pakistan">Pakistan</Option>
                    <Option value="Australia">Australia</Option>
                    <Option value="England">England</Option>
                    <Option value="Argentina">Argentina</Option>
                    <Option value="Brazil">Brazil</Option>
                  </Select>
                </Form.Item>
                <Form.Item name={["address2", "state"]}>
                  <Select placeholder="Select state">
                    <Option value="Maharashtra">Maharashtra</Option>
                    <Option value="Punjab">Punjab</Option>
                    <Option value="Haryana">Haryana</Option>
                    <Option value="Jammu & Kashmir">Jammu & Kashmir</Option>
                    <Option value="Gujarat">Gujarat</Option>
                    <Option value="Madhya pradesh">Madhya pradesh</Option>
                  </Select>
                </Form.Item>
                <Form.Item name={["address2", "city"]}>
                  <Select placeholder="Select city">
                    <Option value="Nagpur">Nagpur</Option>
                    <Option value="Akola">Akola</Option>
                    <Option value="Wardha">Wardha</Option>
                    <Option value="Amravati">Amravati</Option>
                    <Option value="Jalgao">Jalgao</Option>
                    <Option value="Beedh">Beedh</Option>
                  </Select>
                </Form.Item>
              </Input.Group>
            </Form.Item>

            <Form.Item label="Address">
              <Input.Group compact>
                <Form.Item
                  name={["address", "province"]}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Province is required",
                    },
                  ]}
                >
                  <Select placeholder="Select province">
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name={["address", "street"]}
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Street is required",
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: "50%",
                    }}
                    placeholder="Input street"
                  />
                </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item
              label="BirthDate"
              style={{
                marginBottom: 0,
              }}
            >
              <Form.Item
                name="year"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input birth year" />
              </Form.Item>
              <Form.Item
                name="month"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  display: "inline-block",
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Input birth month" />
              </Form.Item>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <br />
      <br />

      <Row gutter={[24, 24]}>
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <h2>Basic form</h2>
        </Space>
        <Col className="gutter-row" span={12} offset={6}>
          <Form
            size="default"
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item label="Fruit" name="Fruit" wrapperCol={12} labelCol="12">
              <Radio.Group>
                <Radio type="primary" value="apple">
                  Apple
                </Radio>
                <Radio value="pear"> Pear </Radio>
                <Radio value="orange"> Orange </Radio>
                <Radio value="banana"> Banana </Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Select cities"
              name="city"
              wrapperCol={12}
              labelCol="12"
            >
              <Checkbox.Group>
                <Checkbox value="one">one</Checkbox>
                <Checkbox value="two">Two</Checkbox>
                <Checkbox value="three">Three</Checkbox>
                <Checkbox value="four">Four</Checkbox>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              label="Agree and continue"
              name="terms"
              wrapperCol={12}
              labelCol="12"
            >
              <Switch></Switch>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
              name="remember2"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Divider orientation="center"></Divider>
    </div>
  );
};

export default Forms;
