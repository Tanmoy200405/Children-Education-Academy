import Hero from "../components/home/Hero";
import AcademicPrograms from "../components/home/AcademicPrograms";
import StudentActivities from "../components/home/StudentActivities";
import WhyParentsChooseUs from "../components/home/WhyParentsChooseUs";
import CampusMomentsGallery from "../components/home/CampusMomentsGallery";
import Testimonials from "../components/home/Testimonials";
import AdmissionsCTA from "../components/home/AdmissionsCTA";
import LatestNewsEvents from "../components/home/LatestNewsEvents";

export default function Home() {
  return (
    <>
      <Hero />
      <AcademicPrograms />
      <StudentActivities />
      <WhyParentsChooseUs />
      <CampusMomentsGallery />
      <Testimonials />
      <AdmissionsCTA />
      <LatestNewsEvents />
      
    </>
  );
}
