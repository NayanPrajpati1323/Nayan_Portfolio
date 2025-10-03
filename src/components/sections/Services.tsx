import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: "Full Stack Application Development",
    description: "Custom Full Stack solutions for your business needs",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZnPLvFFZV5j4aL4VYo4nkM8ZPc1KbXwJLQ&s",
    features: ["Custom Web Applications", "API Development", "AI Integration"]
  },
  // {
  //   title: "LLM Applications",
  //   description: "Building intelligent language model applications",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  //   features: ["ChatBots", "Text Analysis", "Content Generation"]
  // },
  {
    title: "Computer Vision",
    description: "Advanced image and video processing solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    features: ["Object Detection", "Image Recognition", "Video Analysis"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized AI solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}