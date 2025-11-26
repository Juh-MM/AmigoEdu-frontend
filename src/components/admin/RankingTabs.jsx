export default function RankingTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex space-x-1 bg-blue-100 p-1 rounded-lg w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-8 py-5 rounded-md text-sm font-medium transition 
            ${activeTab === tab
              ? "bg-[#3D70B4] text-white shadow"
              : "text-[#3D70B4] hover:bg-[#3B5474]/20"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
