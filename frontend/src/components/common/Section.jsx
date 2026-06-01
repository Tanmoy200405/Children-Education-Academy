export default function Section({ children, className = "", id }) {
  return (
    <section id={id} className={"py-[80px] md:py-[100px] lg:py-[120px] ${className}"}>
      {children}
    </section>
  );
}
