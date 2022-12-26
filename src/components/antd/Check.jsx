import React from "react";
import { Checkbox } from "antd";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
];

const Check = () => {
  return (
    <div>
      
      <br />
      <Checkbox.Group
        options={options}
        defaultValue={[]}
        onChange={onChange}
      />
      <br />
    </div>
  );
};

export default Check;
