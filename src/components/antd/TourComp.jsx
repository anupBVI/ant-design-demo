import { Button, Tour } from "antd";
import React, { useRef, useState } from "react";

const TourComp = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Center",
      description: "Displayed in the center of screen.",
      target: null,
    },
    {
      title: "Right",
      description: "On the right of target.",
      placement: "right",
      target: () => ref.current,
    },
    {
      title: "Top",
      description: "On the top of target.",
      placement: "top",
      target: () => ref.current,
    },
  ];

  return (
    <div>
      {" "}
      <Button type="primary" onClick={() => setOpen(true)} ref={ref}>
        Begin Tour
      </Button>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  );
};

export default TourComp;
