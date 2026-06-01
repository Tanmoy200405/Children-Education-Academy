export default function Card({ children, className = "" }) {
  return (
    <div className={"bg-white rounded-[24px] p-[32px] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-[8px] transition-all duration-300 ease-out ${className}"}>
      {children}
    </div>
  );
}
