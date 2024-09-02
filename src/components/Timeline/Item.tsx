import React, { FC } from "react";

export type Props = {
  time: string;
  title: string;
  text: string;
};

const TimeLineItem: FC<Props> = ({ time, title, text }) => {
  return (
    <li className="mb-6 ms-4 list-none">
      <div className="absolute w-3 h-3 mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {time}
      </time>
      <h3 className="text text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </li>
  );
};

export default TimeLineItem;
