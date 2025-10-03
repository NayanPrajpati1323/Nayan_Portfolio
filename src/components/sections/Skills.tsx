import { motion } from 'framer-motion';
import {
  Box,
  Brain,
  Code2,
  Code2Icon,
  CodeSquareIcon,
  Database,
  Layers,
  Link,
  LucideCode2,
  Network
} from 'lucide-react';

const skills = [
  { name: "Laravel", icon: Brain },
  { name: "Python", icon: CodeSquareIcon },
  { name: "Langchain", icon: Link },
  { name: "System Design", icon: Network },
  { name: "DataBase (MySQL)", icon: Database },
  { name: "Web Application Development", icon: Code2 },
  { name: "DSA & Oops", icon: Box },
  { name: "Full Stack AI Application", icon: Layers },
  { name: "Version Contril (GitHub)", icon: CodeSquareIcon },
  { name: "MERN Stack", icon: LucideCode2 },
  { name: "Tailwind CSS", icon: Code2Icon },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and frameworks I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-lg border border-[#FFD700]/10 hover:border-[#FFD700]/30 hover:bg-gray-900/70 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center space-y-3">
                  <Icon className="w-8 h-8 text-[#FFD700] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-300 font-medium text-center">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}