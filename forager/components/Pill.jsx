import React from "react";

const Pill = ({ label, active, onClick }) => {
  const pillClass = active
    ? "px-2 py-1 text-xs rounded-full bg-[#589477] text-white"
    : "px-2 py-1 text-xs rounded-full bg-gray-300 text-gray-700";
  return (
    <button className={pillClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Pill;