import { useParams } from "react-router-dom";
import Container from "../components/common/Container";
import AboutStory from "../components/About/AboutStory";
import MissionVision from "../components/About/MissionVision";
import HolisticFeatures from "../components/About/HolisticFeatures";

export default function SubPage() {
  const { id } = useParams();
  
  // Format the ID to a readable title
  const title = id 
    ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Page Not Found';

  const renderHero = (title, subtitle, bgImage) => (
    <section className="bg-[#0A5A63] text-white py-20 relative overflow-hidden">
      <div className={`absolute inset-0 opacity-10 bg-[url('${bgImage}')] bg-cover bg-center`} />
      <Container>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-white/80 leading-relaxed">{subtitle}</p>
        </div>
      </Container>
    </section>
  );

  if (id === 'school-profile') {
    return (
      <div className="pt-[100px] pb-20">
        {renderHero('School Profile', 'Learn about our history, values, and commitment to academic excellence.', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')}
        <AboutStory />
      </div>
    );
  }

  if (id === 'principal-message') {
    return (
      <div className="pt-[100px] pb-20">
        {renderHero('Principal\'s Message', 'A welcome note from our Founder Principal and Vice-Principal.', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')}
        <AboutStory />
      </div>
    );
  }
  
  if (id === 'mission-vision') {
    return (
      <div className="pt-[100px] pb-20">
        {renderHero('Mission & Vision', 'Our goals and aspirations for every student at Children Education Academy.', 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073')}
        <MissionVision />
      </div>
    );
  }

  if (id === 'features') {
    return (
      <div className="pt-[100px] pb-20">
        {renderHero('Holistic Features', 'Facilities and practices that support the complete development of every child.', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022')}
        <HolisticFeatures />
      </div>
    );
  }

  return (
    <div className="pt-[150px] pb-20 min-h-[60vh]">
      <Container>
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A5A63] mb-6">{title}</h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#14B8A6] to-[#0EA5E9] rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            This is the dedicated page for {title}. Detailed content for this section will be updated soon.
          </p>
        </div>
      </Container>
    </div>
  );
}
