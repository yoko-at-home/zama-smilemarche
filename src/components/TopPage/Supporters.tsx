import type { SupporterProps } from "@/types";
import Image from "next/image";

export default function Supporters({ banners }: SupporterProps) {
  const supporters = [
    {
      name: banners.supporter1,
      image: banners.supporter1_image,
    },
    {
      name: banners.supporter2,
      image: banners.supporter2_image,
    },
    {
      name: banners.supporter3,
      image: banners.supporter3_image,
    },
    {
      name: banners.supporter4,
      image: banners.supporter4_image,
    },
    {
      name: banners.supporter5,
      image: banners.supporter5_image,
    },
  ].filter((supporter) => supporter.name || supporter.image);

  if (supporters.length === 0) {
    return null;
  }

  return (
    <div>
      <p>{banners.description}</p>
      <ul className="mx-auto px-3 my-10 text-lg">
        {supporters.map((supporter, index) => (
          <li
            key={`${supporter.name}-${supporter.image?.url || ""}`}
            className="flex flex-col md:flex-row justify-between items-center mt-6"
          >
            {supporter.name && (
              <p className="ml-3 whitespace-nowrap mb-3">{supporter.name}</p>
            )}
            {supporter.image && (
              <div className="w-36">
                <Image
                  src={supporter.image.url}
                  height={supporter.image.height}
                  width={supporter.image.width}
                  alt={supporter.name || `Supporter ${index + 1}`}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
