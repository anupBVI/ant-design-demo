import { Alert, Divider } from "antd";
import React from "react";
import Marquee from "react-fast-marquee";
import DrawerComp from "./DrawerComp";
import MessageComp from "./MessageComp";
import ModalComp from "./ModalComp";
import Notifi from "./Notifi";
import PopConfirm from "./PopConfirm";
import ProgressComp from "./ProgressComp";
import ResultComp from "./ResultComp";
import SkeletonComp from "./SkeletonComp";

const AlertComp = () => {
  return (
    <div>
      <h2>Skeleton Component </h2>
      <br />
      <SkeletonComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h2>Result Component </h2>
      <br />
      <ResultComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h2>Progress Component </h2>
      <br />
      <ProgressComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h2>PopConfirm </h2>
      <br />
      <PopConfirm />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h2>Notification Component</h2>
      <br />
      <Notifi />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <br />
      <h2>Modal Component</h2>
      <ModalComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <br />
      <h2>Message</h2>
      <MessageComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h2>DRAWERS</h2>
      <DrawerComp />
      <Divider>
        {" "}
        |||||||||||||| |||||||||||||| |||||||||||||| ||||||||||||||
        |||||||||||||| ||||||||||||||
      </Divider>
      <h3>Closable Alerts</h3>
      <Alert
        banner
        message={
          <Marquee speed={100} pauseOnHover gradient={true}>
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        }
      />
      <h3>Closable Alerts</h3>
      <br />
      <br /> <br /> <br />
      <Alert message="Warning text" banner />
      <Alert
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <Alert showIcon={false} message="Warning text without icon" banner />
      <Alert type="error" message="Error text" banner />
      <br /> <br /> <br />
      <Alert
        banner
        message="Success Text"
        showIcon
        closable
        closeText="Close Now"
        type="success"
      />
      <br />
      <Alert
        message="info Text"
        description="Additional description and information about copywriting."
        showIcon
        closable
        type="info"
      />
      <br />
      <Alert
        message="Warning Text"
        showIcon
        description="Additional description and information about copywriting."
        closable
        type="warning"
      />
      <br />
      <Alert message="error Text" closable type="error" />
      <br />
      <h3>Alerts</h3>
      <br />
      <Alert message="Success Text" type="success" />
      <br />
      <Alert message="info Text" type="info" />
      <br />
      <Alert message="Warning Text" type="warning" />
      <br />
      <Alert message="error Text" type="error" />
    </div>
  );
};

export default AlertComp;
