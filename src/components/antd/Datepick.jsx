import React from "react";
import { DatePicker, Space } from "antd";

const Datepick = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  return (
    <div>
      <Space direction="vertical">
        <DatePicker onChange={onChange} format={dateFormatList} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
      </Space>
    </div>
  );
};

export default Datepick;
