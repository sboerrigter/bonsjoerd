export default function Wrap({ children, className }) {
  return (
    <section
      className={`mx-auto w-full px-4 md:px-8 max-w-[1264px] ${className}`}
    >
      {children}
    </section>
  );
}
