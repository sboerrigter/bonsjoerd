export default function Wrap({ children, className }) {
  return (
    <div className={`mx-auto w-full px-6 lg:px-8 max-w-[1264px] ${className}`}>
      {children}
    </div>
  );
}
