import Hero from "../components/home/Hero";
import NoticeTicker from "../components/home/NoticeTicker";
import AcademicPrograms from "../components/home/AcademicPrograms";
import StudentActivities from "../components/home/StudentActivities";
import WhyParentsChooseUs from "../components/home/WhyParentsChooseUs";
import CampusMomentsGallery from "../components/home/CampusMomentsGallery";
import Testimonials from "../components/home/Testimonials";
import AdmissionsCTA from "../components/home/AdmissionsCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <AcademicPrograms />
      <StudentActivities />
      <WhyParentsChooseUs />
      <CampusMomentsGallery />
      <Testimonials />
      <AdmissionsCTA />
    </>
  );
}
