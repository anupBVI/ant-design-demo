import React from "react";
import { Progress } from "antd";

const ProgressComp = () => {
  return (
    <div>
      <Progress
        percent={30}
        
        strokeColor={{
            from: '#108ee9',
            to: '#87d068',
          }}
    
      />
      <Progress percent={100} type="circle" status="success" />
      <Progress percent={50} type="circle" status="exception" />
      <br />
      <Progress percent={30} type="dashboard" size="" />
      <Progress
        percent={50}
        type="circle"
        size=""
        showInfo={true}
        format={(percent) => `${percent} Days`}
      />{" "}
      <br />
      <Progress
        percent={50}
        steps={3}
        size=""
        strokeLinecap="butt"
        showInfo={true}
      />
    </div>
  );
};

export default ProgressComp;
