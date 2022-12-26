import { FacebookOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Divider, Tabs, Tag } from "antd";
import React, { useState } from "react";

const TabsComp = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
        <h2>TAGS</h2>
      <Tag icon={<TwitterOutlined />} color="#55acee">
        Twitter
      </Tag>
      <Tag icon={<YoutubeOutlined />} color="#cd201f">
        Youtube
      </Tag>
      <Tag icon={<FacebookOutlined />} color="#3b5999">
        Facebook
      </Tag>
      <Tag icon={<LinkedinOutlined />} color="#55acee">
        LinkedIn
      </Tag>
      <Divider> ||||||||||||||</Divider>
      <h2>TABS</h2>
      <Tabs
        //   centered
        // tabPosition={"left"}
        // tabPosition={"top"}
        // tabPosition={"right"}
        size={"middle"}
        defaultActiveKey="1"
        onChange={onChange}
        type="card"
        items={[
          {
            label: `Tab 1`,
            key: "1",
            children: `Content of Tab Pane 1`,
          },
          {
            label: `Tab 2`,
            key: "2",
            children: `Content of Tab Pane 2`,
            disabled: true,
          },
          {
            label: `Tab 3`,
            key: "3",
            children: `Content of Tab Pane 3`,
          },
        ]}
      />
    </div>
  );
};

export default TabsComp;
