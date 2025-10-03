import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  link?: string;
  iconSize?: number;
}

export default function InfoCard({ label, value, icon: Icon, link }: InfoCardProps) {
  const content = link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#FFD700]"
    >
      {value}
    </a>
  ) : (
    <span className="text-gray-300">{value}</span>
  );

  return (
    <div className="bg-gray-900/50 p-4 rounded-lg border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300 flex items-center space-x-4">
      <Icon className="w-5 h-5 text-[#FFD700]" />
      <div>
        <span className="text-[#FFD700] font-medium">{label}: </span>
        {content}
      </div>
    </div>
  );
}