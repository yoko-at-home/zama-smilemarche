import type { SupporterProps } from "@/types";
import Image from "next/image";

export default function Supporters({ banners }: SupporterProps) {
  if (
    !banners.supporter1 &&
    !banners.supporter2 &&
    !banners.supporter3 &&
    !banners.supporter4 &&
    !banners.supporter5
  ) {
    return null;
  }

  return (
    <div>
      <p>{banners.description}</p>
      <ul className="mx-auto px-3 my-10 text-lg">
        <li className="list-[square] flex flex-col md:flex-row justify-between items-center mt-6">
          {banners.supporter1 && (
            <p className="ml-3 whitespace-nowrap mb-3">{banners.supporter1}</p>
          )}
          {banners.supporter1_image && (
            <div className="w-36">
              <Image
                src={banners.supporter1_image.url}
                height={banners.supporter1_image.height}
                width={banners.supporter1_image.width}
                alt={banners.supporter1}
              />
            </div>
          )}
        </li>
        <li className="flex flex-col md:flex-row justify-between items-center mt-6">
          {banners.supporter2 && (
            <p className="ml-3 whitespace-nowrap mb-3 mt-6">
              {banners.supporter2}
            </p>
          )}
          {banners.supporter2_image && (
            <div className="w-36">
              <Image
                src={banners.supporter2_image.url}
                height={banners.supporter2_image.height}
                width={banners.supporter2_image.width}
                alt={banners.supporter2}
              />
            </div>
          )}
        </li>
        <li className="flex flex-col md:flex-row justify-between items-center mt-6">
          {banners.supporter3 && (
            <p className="ml-3 whitespace-nowrap my-3">{banners.supporter3}</p>
          )}
          {banners.supporter3_image && (
            <div className="w-36">
              <Image
                src={banners.supporter3_image.url}
                height={banners.supporter3_image.height}
                width={banners.supporter3_image.width}
                alt={banners.supporter3 || "Supporter 3"}
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
