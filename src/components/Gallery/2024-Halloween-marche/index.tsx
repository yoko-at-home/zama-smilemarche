import Link from "next/link";
import { ClipTextTitleReversed } from "../../Titles/ClipTextTitle";
import ImageGrid from "./ImageGrid";
import ImageGridPortrait from "./ImageGridPortrait";
import { imagesLandscape, imagesPortrait } from "./images";

const GalleryComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-orange-600 to-gray-900  py-20">
      <div className="flex flex-col items-center justify-center">
        <ClipTextTitleReversed>Halloween Magic!!</ClipTextTitleReversed>
        <ClipTextTitleReversed>❤️ 見よ、最高の笑顔 ❤️</ClipTextTitleReversed>
      </div>
      {/* ImageGridコンポーネントに画像オブジェクト配列を渡す */}
      <ImageGrid images={imagesLandscape} />
      <ClipTextTitleReversed>
        動画も見てね → <Link href="/about">Smile Marche</Link>
      </ClipTextTitleReversed>

      <ImageGridPortrait images={imagesPortrait} />
    </div>
  );
};

export default GalleryComponent;
