export default function AuthHeader({ title, subtitle }) {
  return (
    <>
      <h2 className="font-semibold text-xl mb-4">{title}</h2>
      {subtitle && (
        <p className="text-sm text-gray-600 text-center mb-4">
          {subtitle}
        </p>
      )}
    </>
  );
}
