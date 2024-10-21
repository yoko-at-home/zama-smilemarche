import { formatRichText } from "@/libs/utils";
import { ClipTextTitle, ClipTextTitleReversed } from "../Titles/ClipTextTitle";
import { TypeBanner } from "@/types";

type ToppageProps = {
  banner: TypeBanner;
};

export default function TopPageItem({ banner }: ToppageProps) {
  return (
    <div className="flex flex-col items-center justify-center leading-loose">
      <ClipTextTitleReversed>{banner.title}</ClipTextTitleReversed>
      <ClipTextTitle>{banner.date}</ClipTextTitle>
      <div className="flex flex-col items-center justify-center md:px-10 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="mb-5 mt-3 ">
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${banner.image1?.url}?fm=webp&w=414 1x, ${banner.image1?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <img
                src={banner.image1?.url}
                alt="マルシェチラシ表"
                className=""
              />
            </picture>
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
          </div>
        </div>
        <div className="w-80 sm:w-96 md:w-2/3 overflow-hidden">
          <div
            className="p-3 bg-[#c9c7c7/10] text-gray-600"
            dangerouslySetInnerHTML={{
              __html: banner.content ? formatRichText(banner.content) : "",
            }}
          />
        </div>
      </div>
      <div className="mb-5 mt-3 sm:ml-3">
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${banner.areamap?.url}?fm=webp&w=414 1x, ${banner.areamap?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          {!banner.areamap ? null : (
            <img
              src={banner.areamap.url}
              alt="エリアマップ"
              className="shadow-black rounded-sm"
            />
          )}
        </picture>
      </div>
    </div>
  );
}
