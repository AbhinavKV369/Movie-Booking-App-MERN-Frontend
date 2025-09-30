import React from "react";

const ColorGradient = ({
  top = "auto",
  left = "auto",
  right = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="absolute -z-50 h-60 w-60 bg-gradient-to-r from-secondary to-primary blur-3xl rounded-full"
      style={{
        top,
        left,
        right,
        bottom,
      }}
    />
  );
};

export default ColorGradient;
