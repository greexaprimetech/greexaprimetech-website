import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  isNav?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export function GlowButton({
  children,
  href,
  isNav = false,
  disabled = false,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  type = "button",
}: GlowButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 overflow-hidden group";
  const marginClass = isNav ? "" : "mt-4";
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-3.5 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "text-[#ffffff] shadow-lg shadow-slate-900/10 hover:-translate-y-0.5",
    secondary:
      "text-[#ffffff] shadow-lg shadow-slate-900/10 hover:-translate-y-0.5",
    outline:
      "text-[#0f172a] border border-slate-300 bg-white hover:border-[#14b8a6] hover:text-[#0f766e]",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const className = `${baseClasses}     ${marginClass} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} `;

  const content = (
    <>
      {/* Glow effect background */}
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 bg-[#0f172a] opacity-100"></div>
          <div className="absolute inset-0 bg-[#1e293b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {variant === "secondary" && (
        <>
          <div className="absolute inset-0 bg-[#14b8a6] opacity-100"></div>
          <div className="absolute inset-0 bg-[#0f766e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
      {variant === "outline" && (
        <div className="absolute inset-0 bg-[#f0fdfa] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      )}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} type={type}>
      {content}
    </button>
  );
}
