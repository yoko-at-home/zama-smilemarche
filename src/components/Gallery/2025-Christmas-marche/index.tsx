import Link from "next/link";
import { ClipTextTitleReversed } from "../../Titles/ClipTextTitle";
import ImageGrid from "../2024-Halloween-marche/ImageGrid";
import ImageGridPortrait from "../2024-Halloween-marche/ImageGridPortrait";
import { imagesLandscape, imagesPortrait } from "./images";

const ChristmasGalleryComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-red-600 to-gray-900 py-20">
      <div className="flex flex-col items-center justify-center">
        <ClipTextTitleReversed>Merry Christmas!!</ClipTextTitleReversed>
        <ClipTextTitleReversed>❤️ 素敵なクリスマスを ❤️</ClipTextTitleReversed>
      </div>
      {/* ImageGridコンポーネントに画像オブジェクト配列を渡す */}
      <ImageGrid images={imagesLandscape} />
      {/* <ClipTextTitleReversed>
        動画も見てね → <Link href="/about">Smile marche Zama</Link>
      </ClipTextTitleReversed> */}

      <ImageGridPortrait images={imagesPortrait} />
    </div>
  );
};

export default ChristmasGalleryComponent;
