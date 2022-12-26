import { RadiusUpleftOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import React from "react";

const Notifi = () => {
  const openNotification = (c) => {
    notification.open({
        message:"Hello",
        description:"This is a Notification description",
        placement:"topRight",
        duration:1,
        btn:<Button>Buttons s s s</Button>
    });
  };
  return (
    <div>
      <Button type="primary" onClick={() => openNotification("topLeft")}>
        <RadiusUpleftOutlined />
        topLeft
      </Button>
    </div>
  );
};

export default Notifi;
