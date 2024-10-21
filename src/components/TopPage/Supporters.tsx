import { SupporterProps } from "@/types";
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
        <li className="list-[square] flex flex-col md:flex-row justify-between items-center mb-3">
          {banners.supporter1 && (
            <p className="ml-3 whitespace-nowrap">{banners.supporter1}</p>
          )}
          {/* {banners.supporter1_image && (
            <div className="w-36">
              <Image
                src={banners.supporter1_image.url}
                height={banners.supporter1_image.height}
                width={banners.supporter1_image.width}
                alt={banners.supporter1}
              />
            </div>
          )} */}
        </li>
        <li className=" flex flex-col md:flex-row justify-between items-center">
          {banners.supporter2 && (
            <p className="ml-3 whitespace-nowrap mb-3">{banners.supporter2}</p>
          )}
          {/* {banners.supporter2_image && (
            <div className="w-36">
              <Image
                src={banners.supporter2_image.url}
                height={banners.supporter2_image.height}
                width={banners.supporter2_image.width}
                alt={banners.supporter2}
              />
            </div>
          )} */}
        </li>
        {/* ここから画像 */}
        <div>
          {banners.supporter1_image && (
            <div className="w-36 mt-20">
              <Image
                src={banners.supporter1_image.url}
                height={banners.supporter1_image.height}
                width={banners.supporter1_image.width}
                alt={banners.supporter1}
              />
            </div>
          )}
        </div>
        <div>
          {banners.supporter2_image && (
            <div className="w-36 mt-10">
              <Image
                src={banners.supporter2_image.url}
                height={banners.supporter2_image.height}
                width={banners.supporter2_image.width}
                alt={banners.supporter2}
              />
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}
