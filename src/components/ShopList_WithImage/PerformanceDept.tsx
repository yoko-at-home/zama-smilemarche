import { ShopProps } from "@/types";
import { ShopDepartment } from "./ShopDepartment";

export const PerformanceDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="performance" />;
};
