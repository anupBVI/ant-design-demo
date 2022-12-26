import { Button, message } from "antd";
import React from "react";

const MessageComp = () => {
  const click = (val) => {
    message.open({
      type: `${val}`,
      content:
        "This is a prompt message for , and it will disappear in 2 seconds",
      duration: 2,
    });
  };


  const key = 'updatable';
  const openMessage = () => {
    message.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      message.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
    }, 1000);
  };

  return (
    <div>
      <Button type="primary" onClick={()=>click("success")}>
        Display success message
      </Button>
      <Button type="primary" onClick={()=>click("warning")}>
        Display warning message
      </Button>
      <Button type="primary" onClick={()=>click("info")}>
        Display info message
      </Button>
      <Button type="primary" onClick={()=>click("error")}>
        Display error message
      </Button>
    <br /><br />
      <Button type="primary" onClick={openMessage}>
        Open the message box with updateable content
      </Button>
    </div>
  );
};

export default MessageComp;
