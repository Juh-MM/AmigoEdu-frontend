import React from "react";

export default function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-nowrap justify-center gap-2 bg-blue-100 px-2 py-2 rounded-lg w-full mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`
            flex-1 px-4 py-2 whitespace-nowrap rounded-md text-sm sm:text-base font-medium text-center transition
            ${activeTab === tab
              ? "bg-[#3D70B4] text-white shadow"
              : "text-[#3D70B4] hover:bg-[#3B5474]/20"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
