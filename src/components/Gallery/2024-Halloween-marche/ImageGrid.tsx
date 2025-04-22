"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGridProps {
  images: { url: string }[]; // 画像オブジェクト配列からidを削除し、urlのみを保持
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {images.map((image, index) => (
          <FadeInImage
            key={image.url}
            src={image.url}
            alt={`Image ${image.url}`}
            index={images.indexOf(image)}
          />
        ))}
      </div>
    </div>
  );
};

// FadeInImage コンポーネントに index を渡す
const FadeInImage: React.FC<{ src: string; alt: string; index: number }> = ({
  src,
  alt,
  index,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`rounded-md transition-opacity duration-1000 ease-out transform ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onLoadingComplete={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageGrid;
