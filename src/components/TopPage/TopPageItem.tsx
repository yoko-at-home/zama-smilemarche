import styles from "./index.module.css";
import { formatRichText } from "@/libs/utils";
import { ClipTextTitle, ClipTextTitleReversed } from "../Titles/ClipTextTitle";
import { TypeBanner } from "@/types";

type ToppageProps = {
  banner: TypeBanner;
};

export default function TopPageItem({ banner }: ToppageProps) {
  return (
    <div className="flex flex-col items-center justify-center leading-loose">
      <ClipTextTitle>{banner.title}</ClipTextTitle>
      <ClipTextTitleReversed>{banner.date}</ClipTextTitleReversed>
      <div className="flex flex-col items-center justify-center md:flex-row md:px-10 py-10">
        <div className="mb-5 mt-3 ">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${banner.image1?.url}?fm=webp&w=414 1x, ${banner.image1?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <img src={banner.image1?.url} alt="マルシェチラシ表" className="" />
          </picture>
          {/* <p className="text-right">表</p> */}
        </div>

        <div className="mb-5 mt-3 sm:ml-3">
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${banner.image2?.url}?fm=webp&w=414 1x, ${banner.image2?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <img
              src={banner.image2?.url}
              alt="マルシェチラシ裏"
              className="shadow-black rounded-sm"
            />
          </picture>
          {/* <p className="text-right">裏</p> */}
        </div>
      </div>
      <p className="font-semibold">{banner.description}</p>
      <p className="">{banner.description2}</p>
    </div>
  );
}
