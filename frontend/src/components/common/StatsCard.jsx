import Card from "./Card";

export default function StatsCard({ icon, number, label, className = "" }) {
  return (
    <Card className={"h-[180px] flex flex-col items-center justify-center text-center p-6 ${className}"}>
      <div className="text-[40px] text-[#1FC7D4] mb-3">{icon}</div>
      <div className="text-[40px] font-bold text-[#003D43] font-['Outfit'] leading-none mb-2">{number}</div>
      <div className="text-[16px] text-gray-500 font-medium">{label}</div>
    </Card>
  );
}
