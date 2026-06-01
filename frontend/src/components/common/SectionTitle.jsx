export default function SectionTitle({ label, title, description, align = "center", className = "" }) {
  const alignments = {
    left: "items-start text-left mx-0",
    center: "items-center text-center mx-auto",
    right: "items-end text-right ml-auto"
  };

  return (
    <div className={`flex flex-col max-w-[700px] ${alignments[align]} ${className}`}>
      {label && (
        <span className="text-[14px] uppercase tracking-widest font-semibold text-[#1FC7D4] mb-4">
          {label}
        </span>
      )}
      <h2 className="section-title text-[#003D43] mb-6">
        {title}
      </h2>
      {description && (
        <p className="body-text">
          {description}
        </p>
      )}
    </div>
  );
}
