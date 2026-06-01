import Card from "./Card";

export default function TestimonialCard({ image, name, role, quote, className = "" }) {
  return (
    <Card className={"flex flex-col h-full relative ${className}"}>
      <div className="flex-1 mb-8">
        <p className="text-[18px] text-gray-600 leading-[1.8] italic">"{quote}"</p>
      </div>
      <div className="flex items-center gap-4 mt-auto">
        {image && (
          <div className="w-[56px] h-[56px] rounded-full overflow-hidden shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <h4 className="font-bold text-[18px] text-[#003D43] font-['Outfit']">{name}</h4>
          <p className="text-[14px] font-semibold text-[#1FC7D4] tracking-wide uppercase mt-1">{role}</p>
        </div>
      </div>
    </Card>
  );
}
