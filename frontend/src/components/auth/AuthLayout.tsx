import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: Props) {
  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e20,transparent_55%)]" />

      <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 backdrop-blur-xl">

        {children}

      </div>

    </div>
  );
}