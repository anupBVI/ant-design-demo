import { Button, Drawer } from "antd";
import React, { useState } from "react";

const DrawerComp = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <div className="site-drawer-render-in-current-wrapper">
        Render in this
        <div
          style={{
            marginTop: 16,
          }}
        >
          <Button type="primary" onClick={showDrawer2}>
            Open
          </Button>
          <br />
        </div>
        <Drawer
        mask={true}
        footer={<div>"Hello footer</div>}
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose2}
          open={open2}
          getContainer={false}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
      <br />
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <br />
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        className="draw"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default DrawerComp;
