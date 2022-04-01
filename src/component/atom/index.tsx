import React from "react";

const AutoResponsive = () => {
  const autoSize = (size: number, target: number, type: string) => {
    if (type === "vw") {
      const context = target * 0.01;
      return size / context + "vw";
    }
    if (type === "vh") {
      const context = target * 0.01;
      return size / context + "vh";
    }
  };
  return <div style={{ fontSize: `${autoSize(20, 700, "vh")}` }}>하이염</div>;
};

export default AutoResponsive;
