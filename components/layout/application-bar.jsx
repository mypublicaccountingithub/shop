import React from "react";

import { Avatar } from "antd";

import { CustomIcons } from "../Icons";

import Favorites from "../favorites";
import Cart from "../cart/index";

function ApplicationBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-0 border-b border-solid border-primary-main/20">
      <Avatar icon={<CustomIcons.User className="text-[16px] text-primary-main" />} />

      <div className="flex items-center justify-center gap-2">
        <Favorites />

        <Cart />
      </div>
    </header>
  );
}

export default ApplicationBar;
