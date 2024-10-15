import { SupporterProps } from "@/types";
import Supporters from "./Supporters";

export const SupportersComponent = ({ banners }: SupporterProps) => {
  if (!banners) {
    return null;
  }
  return (
    <ul className="mx-auto px-3 my-10">
      <Supporters banners={banners} />
    </ul>
  );
};
