export default function ImageCard({ image, title, description, className = "" }) {
  return (
    <div className={"group bg-white rounded-[24px] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-[8px] transition-all duration-300 ease-out overflow-hidden flex flex-col ${className}"}>
      <div className="w-full h-[260px] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
      </div>
      <div className="p-[32px] flex flex-col flex-1">
        <h3 className="text-[24px] font-bold text-[#003D43] font-['Outfit'] mb-4">{title}</h3>
        <p className="text-[18px] text-gray-600 leading-[1.8]">{description}</p>
      </div>
    </div>
  );
}
