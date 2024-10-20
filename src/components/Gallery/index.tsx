import { ClipTextTitleReversed } from "../Titles/ClipTextTitle";
import ImageGrid from "./ImageGrid";
import ImageGridPortrait from "./ImageGridPortrait";
import { imagesLandscape, imagesPortrait } from "./images";

const GalleryComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-orange-600 to-gray-900  py-20">
      <div className="flex justify-center">
        <ClipTextTitleReversed>
          暑かったけど、最高の笑顔に出会えました
        </ClipTextTitleReversed>
      </div>
      {/* ImageGridコンポーネントに画像オブジェクト配列を渡す */}
      <ImageGrid images={imagesLandscape} />
      <ImageGridPortrait images={imagesPortrait} />
    </div>
  );
};

export default GalleryComponent;
