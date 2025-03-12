import React from "react";
import { warningMessage } from "../data/development";

const Message = () => {
  return (
    <div className="bg-red-500 rounded-xl text-sm w-[90%] mx-auto font-medium text-white px-4 py-4">
      <div className="header flex items-center">
        <img width="27px" height="27px" src={warningMessage.icon} alt="Warning" />
        <h1 className="uppercase ml-2">{warningMessage.header}</h1>
      </div>
      <p className="mt-1">{warningMessage.message}</p>
    </div>
  );
};

export default Message;
