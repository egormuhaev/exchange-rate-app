import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";

function Container() {
  return (
    <div className="h-[100vh] w-[100%] flex flex-row items-center justify-center">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Container;
