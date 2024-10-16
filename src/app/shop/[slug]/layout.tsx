import SmileMarcheImage from "@/components/Layout/Header/SmileMarchImage";
import { ReactNode } from "react";

export default function SlugLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute top-0 p-4 shadow-sm rounded-sm dro p-shadow-sm w-screen h-1/2 bg-opacity-20 bg-cover bg-left-top z-10">
        <SmileMarcheImage />
      </div>
      <div className="box-content bg-gradient-radial from-orange-500/40 from-30% via-[crimson]/70 via-50% to-[skyblue]/70 pt-20">
        <main>{children}</main>
      </div>
    </div>
  );
}
