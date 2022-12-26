import React from "react";
import { message, Popconfirm } from "antd";

const PopConfirm = () => {

  const confirm = (e) => {
    console.log(e.target);
    message.success("Click on Yes");
  };

  const cancel = (e) => {
    console.log(e.target);
    message.error("Click on No");
  };

  return (
    <div>
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
        placement="bottomRight"
      >
        <a href="#">Delete</a>
      </Popconfirm>
    </div>
  );
};

export default PopConfirm;
