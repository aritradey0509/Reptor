import React from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "w-full rounded-2xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-green-500 text-black hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98]",

    secondary:
      "bg-zinc-800 text-white border border-zinc-700 hover:bg-zinc-700",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}