"use client";

import { useState } from "react";

const menus = [
  { id: "home", icon: "ri-home-6-line" },

  { id: "notification", icon: "ri-notification-2-line" },

  { id: "time", icon: "ri-time-line" },

  { id: "group", icon: "ri-group-line" },

  { id: "wallet", icon: "ri-wallet-line" },

  { id: "settings", icon: "ri-settings-2-line" },
];

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(menus[0].id);

  return (
    <aside className="bg-white px- py-[35px] w-[136px] h-screen fixed flex flex-col items-center justify-between">
      <div className="flex items-center justify-center">
        <p className="text-3xl font-semibold">S.</p>
      </div>

      <div className="flex items-center justify-center p-5 rounded-full w-16 h-16 bg-[#fedfc0]">
        <i className="text-2xl ri-question-answer-line"></i>
      </div>

      <div></div>
      <div></div>

      <nav className="flex flex-col p-3 rounded-[54px] w-fit gap-7 bg-[#f7f6fc]">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className={`p-3 w-14 flex items-center justify-center rounded-full cursor-pointer ${
              activeMenu === menu.id ? "bg-[#5058e3]" : "bg-transparent"
            }`}
            onClick={() => setActiveMenu(menu.id)}
          >
            <i className={`text-2xl ${menu.icon} ${activeMenu === menu.id ? "text-white" : "text-black"}`}></i>
          </div>
        ))}
      </nav>

      <div></div>
      <div></div>

      <div>
        {/* <div className="bubble-icon bg-menu">
        <i className="ri-logout-box-r-line"></i>
      </div> */}
        <div className="flex items-center justify-center p-5 rounded-full w-16 h-16 bg-[#f7f6fc]">
          <i className="text-2xl ri-logout-box-r-line"></i>
        </div>
      </div>
    </aside>
  );
}
