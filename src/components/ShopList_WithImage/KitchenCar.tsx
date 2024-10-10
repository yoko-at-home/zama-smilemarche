import { ShopProps } from "@/types";
import { ShopDepartment } from "./ShopDepartment";

export const KitchenCar = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="kitchen-car" />;
};
