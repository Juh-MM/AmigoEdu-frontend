export default function MetaCardAdmin({ children, className, ...rest }) {
  return (
    <div
      className={`
        flex flex-col bg-neutral-50 rounded-3xl shadow p-7
        ${className}
      `}
      {...rest}
    >
      {children}
    </div>
  );
}
