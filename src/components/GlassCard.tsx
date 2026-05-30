import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

export function GlassCard({ children, hover = false, className = '', onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={`glass-card p-6 ${hover ? 'glass-card-hover cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
