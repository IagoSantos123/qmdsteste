import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  const buttonStyle = {
    backgroundColor: bgColor,
    color: textColor,
    cursor: "pointer",
    transition: "transform 0.3s",
    padding: "8px 16px",
    borderRadius: "999px",
    zIndex: "10"
  };

  return (
    <button
      onClick={handler}
      style={buttonStyle}
      className="hover:scale-105 duration-300"
    >
      {text}
    </button>
  );
};

export default Button;