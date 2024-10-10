import { ShopProps } from "@/types";
import { ShopDepartment } from "./ShopDepartment";

export const MassageDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="massage" />;
};
