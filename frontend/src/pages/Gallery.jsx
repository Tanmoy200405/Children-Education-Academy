import { useState } from "react";
import Container from "../components/common/Container";
import photo12 from "../assets/photo12.jpg";
import photo13 from "../assets/photo13.jpg";
import photo15 from "../assets/photo15.jpg";
import photo16 from "../assets/photo16.jpg";
import photo17 from "../assets/photo17.jpg";
import photo18 from "../assets/photo18.jpg";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");

  const images = [
    { src: photo12, category: "Learning" },
    { src: photo13, category: "Learning" },
    { src: photo15, category: "Culture" },
    { src: photo16, category: "Sports" },
    { src: photo17, category: "Culture" },
    { src: photo18, category: "Sports" },
  ];

  const categories = ["All", "Learning", "Sports", "Culture"];

  const filteredImages = activeTab === "All" ? images : images.filter(img => img.category === activeTab);

  return (
    <div className="pt-[100px] pb-20">
      <section className="bg-[#0A5A63] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070')] bg-cover bg-center" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Take a glimpse into the vibrant life, modern infrastructure, and memorable events at Children Education Academy.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeTab === category
                  ? "bg-[#0A5A63] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]">
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-semibold text-lg">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
