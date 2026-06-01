export default function Badge({ children, className = "" }) {
  return (
    <span className={"inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#B8F3F7] text-[#006D77] font-semibold text-sm leading-none ${className}"}>
      {children}
    </span>
  );
}
