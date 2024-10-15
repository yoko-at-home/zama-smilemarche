import { SupporterProps } from "@/types";

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
      <ul className="mx-auto px-3 my-10">
        {banners.supporter1 && (
          <li className="list-[square] ml-3">{banners.supporter1}</li>
        )}
        {banners.supporter2 && (
          <li className="list-[square] ml-3">{banners.supporter2}</li>
        )}
        {banners.supporter3 && (
          <li className="list-[square] ml-3">{banners.supporter3}</li>
        )}
        {banners.supporter4 && (
          <li className="list-[square] ml-3">{banners.supporter4}</li>
        )}
        {banners.supporter5 && (
          <li className="list-[square] ml-3">{banners.supporter5}</li>
        )}
      </ul>
    </div>
  );
}
