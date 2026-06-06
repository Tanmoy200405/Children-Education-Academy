import Container from "../components/common/Container";
import { BookOpen, Award, Users, Target, FlaskConical, Calculator, Globe2, Music } from "lucide-react";

export default function Academics() {
  const sections = [
    {
      id: "curriculum",
      title: "Our Curriculum",
      description: "A comprehensive, future-ready curriculum designed to foster critical thinking, creativity, and a lifelong love for learning.",
      icon: <BookOpen className="w-8 h-8 text-[#14B8A6]" />
    },
    {
      id: "primary-school",
      title: "Primary School",
      description: "Building strong foundational skills in literacy, numeracy, and environmental awareness in a nurturing environment.",
      icon: <Users className="w-8 h-8 text-[#14B8A6]" />
    },
    {
      id: "middle-school",
      title: "Middle School",
      description: "Encouraging exploration and independence as students delve deeper into subjects like science, mathematics, and humanities.",
      icon: <Target className="w-8 h-8 text-[#14B8A6]" />
    },
    {
      id: "senior-secondary",
      title: "Senior Secondary",
      description: "Specialized streams in Science, Commerce, and Humanities preparing students for higher education and professional careers.",
      icon: <Award className="w-8 h-8 text-[#14B8A6]" />
    }
  ];

  const subjects = [
    { name: "Advanced Sciences", icon: <FlaskConical className="w-6 h-6 text-[#0A5A63]" /> },
    { name: "Mathematics", icon: <Calculator className="w-6 h-6 text-[#0A5A63]" /> },
    { name: "Global Languages", icon: <Globe2 className="w-6 h-6 text-[#0A5A63]" /> },
    { name: "Performing Arts", icon: <Music className="w-6 h-6 text-[#0A5A63]" /> }
  ];

  return (
    <div className="pt-[100px] pb-20">
      {/* Hero Section */}
      <section className="bg-[#0A5A63] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-cover bg-center" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Empowering students with knowledge, skills, and values to navigate and shape the future successfully.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="mt-20">
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 rounded-xl bg-[#14B8A6]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0A5A63] mb-4">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Subjects Grid */}
        <section className="bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A5A63] mb-4">Holistic Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our diverse curriculum extends beyond traditional boundaries, offering a wide array of subjects to cater to every student's interests.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
                <div className="mb-4">{subject.icon}</div>
                <h4 className="font-semibold text-gray-800">{subject.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
