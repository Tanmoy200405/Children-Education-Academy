import Container from "../components/common/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-[100px] pb-20">
      <section className="bg-[#0A5A63] text-white py-20 relative overflow-hidden">
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/80 leading-relaxed">
              We're here to answer all your questions. Get in touch with us for admissions, general enquiries, or feedback.
            </p>
          </div>
        </Container>
      </section>

      <Container className="mt-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0A5A63] mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">Reach out to our administrative office during working hours for prompt assistance.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#14B8A6] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Campus Address</h4>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(import.meta.env.VITE_CONTACT_ADDRESS)}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#14B8A6] transition-colors">
                    {import.meta.env.VITE_CONTACT_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#14B8A6] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +91 {import.meta.env.VITE_CONTACT_PHONE1}<br />
                    +91 {import.meta.env.VITE_CONTACT_PHONE2}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#14B8A6] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Address</h4>
                  <p className="text-gray-600">
                    <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="hover:text-[#14B8A6] transition-colors">{import.meta.env.VITE_CONTACT_EMAIL}</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#14B8A6]/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#14B8A6] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday<br />8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-4 lg:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 h-[500px] lg:h-full relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Memanpur,%20Maheshtala,%20Kolkata,%20India,%20700139+(Children%20Education%20Academy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Children Education Academy Location"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
