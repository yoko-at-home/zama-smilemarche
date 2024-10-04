import { FC, ReactNode } from "react";

type FontProps = {
  fontWeight?: "ordinary" | "bold";
  Color?: "green" | "violet";
  children: ReactNode;
};
export const ClipTextTitle: FC<FontProps> = (props) => {
  return (
    <h2 className="mb-5 text-3xl font-black md:text-5xl">
      <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent drop-shadow-lg">
        {props.children}
      </span>
    </h2>
  );
};
