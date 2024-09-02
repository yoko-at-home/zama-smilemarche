import { TitleH2 } from "../Titles/TitleH2";
import TimeLineItem from "./Item";

import { data } from "./data";
import styles from "./index.module.css";

const TimeLineHistory = () => {
  const reversedArr = [...data].reverse();
  return (
    <div className=" bg-white py-10 w-full overflow-auto px-16">
      <div className="flex justify-center mb-6">
        <TitleH2 text={"Smile bliss (スマイルブリス) 沿革"} />
      </div>
      <div className={styles.boxTimeLineHistory}>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 h-1/4 overflow-y-scroll py-20 mx-auto w-64 md:w-96">
          {reversedArr.map((reversedArr) => {
            return (
              <TimeLineItem
                key={reversedArr.time}
                time={reversedArr.time}
                title={reversedArr.title}
                text={reversedArr.text}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TimeLineHistory;
