import React from "react";

const CustomAlert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  };

  return (
    <div
      className={`border-l-4 p-4 ${alertStyles[type]} flex items-center justify-between rounded-md shadow-md`}
      role="alert"
    >
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-lg font-bold">
        ✕
      </button>
    </div>
  );
};

export default CustomAlert;
