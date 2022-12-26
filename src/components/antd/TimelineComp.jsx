import { ClockCircleOutlined, LoadingOutlined, SmileOutlined } from "@ant-design/icons";
import { Col, Timeline } from "antd";
import React from "react";

const TimelineComp = () => {
  return (
    <div>
      <Col span={8} style={{background:""}}>

      <Timeline mode="alternate" >
        <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item color="blue" label="Label === 22222">Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item color="gray" 
          dot={<LoadingOutlined className="timeline-clock-icon" />}
          
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item dot={<SmileOutlined />} color="red" >Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
      </Col>

    </div>
  );
};

export default TimelineComp;
