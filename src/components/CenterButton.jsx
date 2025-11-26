import Button from "./Button";

export default function CenterButton({ children, ...rest }) {
  return (
    <div className="flex justify-center">
      <Button {...rest}>{children}</Button>
    </div>
  );
}
