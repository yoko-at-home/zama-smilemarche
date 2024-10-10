import { ShopProps } from "@/types";
import { ShopDepartment } from "./ShopDepartment";

export const FoodDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="food" />;
};
