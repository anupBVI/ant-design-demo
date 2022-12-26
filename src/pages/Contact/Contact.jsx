import { Col, Button, Checkbox, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";

import React from "react";
import { Heading, Title } from "../../components/common/Fonts/Font";
import "./Contact.css";

const Contact = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="contact-container">
      <div>
        <Heading
          align=" start"
          text="Let's Discuss Your Requirements & Start Develop Something Unique."
        />

        <Heading align=" start" text="Get a Free Quote!" />
      </div>

      <Row gutter={[24, 12]} className="row-wrapper">
        <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
          <div className="content">
            <Title
              align=" center"
              text="Get In Touch With Our Experts To Turn Your Idea Into Reality."
            />

            <Form
              name="basic"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Full Name"
                name="fname"
                
                rules={[
                  { required: false, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: false, message: "Please input your username!" },
                ]}
              >
                <TextArea />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" block htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col className="gutter-row" lg={12} md={12} sm={24} xs={24}>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            ducimus, reprehenderit delectus dolorem impedit nostrum eveniet
            magnam, ad eius ullam, similique expedita corrupti beatae a nesciunt
            pariatur nisi. Ea cumque, quod quibusdam dolore quos tempora
            inventore deserunt. Enim facilis dolores veniam repellat in quidem
            ab blanditiis aliquid ipsum accusamus maiores esse labore similique
            dignissimos et deserunt aspernatur, iusto distinctio autem
            accusantium consequuntur tempora laboriosam dolor! Libero,
            cupiditate accusamus architecto laboriosam, vero illum vitae nam
            natus possimus dicta sapiente sint pariatur magnam? Recusandae
            nostrum quo vitae rem repellendus architecto, ipsum ullam obcaecati
            ut, facere at commodi molestias illo nam. Error aperiam et autem
            amet cupiditate ex iste, sint non optio eius quia quam maxime
            excepturi reiciendis, voluptatum fuga odit molestiae vitae numquam
            illum?
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;


