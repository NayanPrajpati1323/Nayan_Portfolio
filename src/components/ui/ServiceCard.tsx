interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ServiceCard({ title, description, features, image }: ServiceCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-xl p-6 border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold text-[#FFD700] mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400 flex items-center">
            <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="#contact" 
        className="inline-block bg-[#FFD700] text-black px-6 py-2 rounded-lg hover:bg-[#FFD700]/90 transition-colors"
      >
        Learn More
      </a>
    </div>
  );
}