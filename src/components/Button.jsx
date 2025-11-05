export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className="w-40 text-white font-semibold py-2 rounded-lg transition-all"
      style={{ backgroundColor: "#FDC240", color: "#3B5474", fontWeight: "600" }}
    >
      {children}
    </button>
  );
}
