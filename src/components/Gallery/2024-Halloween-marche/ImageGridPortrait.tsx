"use client";
import Image from "next/image";
import { useState } from "react";

interface ImageGridProps {
  images: { url: string }[]; // 画像オブジェクト配列からidを削除し、urlのみを保持
}

const ImageGridPortrait: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-11 gap-4">
        {images.map((image, index) => (
          <FadeInImage
            key={index}
            src={image.url}
            alt={`Image ${index + 1}`}
            index={index}
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
    <div className={`relative aspect-w-9 aspect-h-16 overflow-hidden`}>
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

export default ImageGridPortrait;
