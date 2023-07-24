import React from "react";

type ButtonProps = {
  type?: "primary" | "danger";
  icon?: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ type, icon, children, onClick }: ButtonProps) => {
  return (
    <div className="bg-black">
      <button
        onClick={onClick}
        className={`p-2 border border-gray-400 rounded ${
          type == "primary" && "bg-blue-500"
        } ${type == "danger" && "bg-red-500 text-white"}`}
      >
        {icon && icon}
        {children}
      </button>
    </div>
  );
};

export default Button;
