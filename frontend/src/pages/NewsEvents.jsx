import { useState, useEffect } from "react";

export default function NewsEvents() {
  const [notices, setNotices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://children-education-academy-s9zd.vercel.app/api/notices")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setNotices(data.data);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to fetch notices", err);
        setIsLoading(false);
      });
  }, []);

  // Utility to get a random rotation for the paper effect
  const getRotation = (idx) => {
    const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0", "-rotate-3"];
    return rotations[idx % rotations.length];
  };

  return (
    <div className="pt-[120px] pb-24 min-h-screen relative overflow-hidden" style={{ backgroundColor: "#d2a679", backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02)), repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.02) 75%, rgba(0,0,0,0.02))", backgroundPosition: "0 0, 10px 10px", backgroundSize: "20px 20px" }}>
      
      {/* Wood Frame Effect */}
      <div className="absolute inset-0 border-[16px] border-[#8b5a2b] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none z-10"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-20">
        <div className="text-center mb-16 bg-white/90 max-w-fit mx-auto px-8 py-4 rounded-md shadow-md border-2 border-dashed border-gray-400 rotate-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A5A63] tracking-wider uppercase font-serif">
            School Notice Board
          </h1>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white/30 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full border-t-transparent animate-spin"></div>
            </div>
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center py-20 max-w-md mx-auto bg-[#ffffe0] rounded-sm shadow-lg p-10 transform -rotate-2 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-md border-2 border-red-700"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">No notices available</h3>
            <p className="text-gray-600 font-serif">The notice board is currently empty.</p>
          </div>
        ) : (
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {notices.map((notice, idx) => (
              <div 
                key={notice._id} 
                className={`relative bg-[#fdfde8] p-6 shadow-[2px_4px_10px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 hover:z-30 flex flex-col ${getRotation(idx)}`}
                style={{ backgroundImage: "linear-gradient(#f1f1d1 1px, transparent 1px)", backgroundSize: "100% 1.5rem", lineHeight: "1.5rem" }}
              >
                {/* Push Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-5 h-5 rounded-full bg-red-600 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3),_2px_4px_4px_rgba(0,0,0,0.4)] border border-red-800"></div>
                  <div className="w-1 h-3 bg-gray-400 -mt-1 shadow-sm"></div>
                </div>

                <div className="mt-4 mb-2 flex justify-between items-start">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest border-b border-red-600">
                    {new Date(notice.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric"
                    })}
                  </span>
                  {idx === 0 && (
                    <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 font-bold uppercase rotate-12 shadow-sm">
                      New
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  {notice.title}
                </h3>
                
                <p className="text-gray-800 flex-1 whitespace-pre-wrap font-medium font-serif leading-[1.5rem] mt-2">
                  {notice.content}
                </p>
                
                <div className="mt-6 flex justify-end">
                  <span className="text-sm font-bold italic text-gray-500 font-serif">
                    - Principal's Office
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
