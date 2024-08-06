import React from "react";
import Topnav from "./Topnav";
import { useLocation } from "react-router-dom";

function Messages() {
  let loc = useLocation();
  console.log(loc);
  return (
    <div>
      <Topnav />
      <h2>Messages</h2>
      <h2>
        {loc && loc.state && loc.state.msg
          ? loc.state.msg
          : "Please Login Properly"}
      </h2>
    </div>
  );
}

export default Messages;