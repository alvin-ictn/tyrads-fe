export default function Card({ className, children, ...rest }) {
  return (
    <div className={`${className || ""} bg-white p-7 rounded-3xl`} {...rest}>
      {children || <></>}
    </div>
  );
}
