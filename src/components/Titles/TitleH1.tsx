import { TitleProps } from "@/types";
import { FC } from "react";

export const TitleH1: FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="mt-10 md:mt-16 mb-3 font-black capitalize text-gray-500 text-left text-2xl md:text-3xl lg:text-5xl">
      {text}
    </h2>
  );
};
