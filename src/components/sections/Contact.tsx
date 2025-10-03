import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#FFD700]" />
                <a href="mailto:info.nayan1323@gmail.com" className="hover:text-[#FFD700]">
                  info.nayan1323@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#FFD700]" />
                <a href="tel:+919104295056" className="hover:text-[#FFD700]">
                  +91-9104295056
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/nayan-web-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/NayanPrajpati1323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-black py-3 rounded-lg hover:bg-[#FFD700]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}