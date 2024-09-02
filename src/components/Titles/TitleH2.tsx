import { FC } from "react";
import { TitleProps } from "../ArticleList/types";

export const TitleH2: FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="mt-10 md:mt-16 font-black font-serif capitalize text-gray-500 text-left text-2xl lg:text-4xl">
      {text}
    </h2>
  );
};
