import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95';

  const variants = {
    primary: 'bg-gradient-to-r from-[#2563EB] to-[#38BDF8] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
