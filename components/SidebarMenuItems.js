import React from "react";
export default function SidebarMenuItems({ Icon, title, active }) {
  return (
    <div className="group flex max-w-fit cursor-pointer flex items-center space-x-5 rounded-full px-8 py-3 transiton-all duration-200 hover:bg-gray-200 ">
      <Icon className="h-6 w-6" />
      <p
        className={`group-hover:text-black hidden xl:inline-flex lg:text-xl ${
          active && "font-bold"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
