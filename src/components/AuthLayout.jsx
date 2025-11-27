export default function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#3D70B4]">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-96 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
}
