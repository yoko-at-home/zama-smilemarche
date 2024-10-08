import { ToppageProps } from "@/types";
import TopPageItem from "./TopPageItem";

export const ToppageComponent = ({ banners }: ToppageProps) => {
  if (!banners) {
    return null;
  }
  if (banners.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="mx-auto px-3 my-10">
      {banners.map((banner) => {
        return <TopPageItem banner={banner} key={banner.id} />;
      })}
    </ul>
  );
};
