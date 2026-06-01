export default function HoverCard({ children, className = "" }) {
  return (
    <div className={"bg-white rounded-[24px] shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden ${className}"}>
      {children}
    </div>
  );
}
