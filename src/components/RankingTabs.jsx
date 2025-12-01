export default function RankingTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="
        flex overflow-x-auto sm:overflow-visible
        gap-2 bg-blue-100 p-1 rounded-lg w-full sm:w-fit
        sm:flex-row
        flex-wrap sm:flex-nowrap justify-around
        no-scrollbar">
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
