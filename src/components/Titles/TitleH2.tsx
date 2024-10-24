import { TitleProps } from "@/types";
import { FC } from "react";

export const TitleH2: FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="mt-16 mb-6 font-black capitalize text-gray-500 text-left text-2xl lg:text-4xl">
      {text}
    </h2>
  );
};
