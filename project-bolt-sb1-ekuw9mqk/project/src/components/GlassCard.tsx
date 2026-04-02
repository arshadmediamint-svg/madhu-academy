import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/70 rounded-2xl p-6 shadow-xl border border-white/20
        ${hover ? 'transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white/80' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
