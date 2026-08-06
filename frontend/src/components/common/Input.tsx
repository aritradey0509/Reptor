import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-zinc-400">
        {label}
      </label>

      <input
        className={`
          w-full
          rounded-2xl
          border
          border-zinc-700
          bg-zinc-900
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-green-500
          ${className}
        `}
        {...props}
      />
    </div>
  );
}