import { ShopProps } from "@/types";
import { ShopDepartment } from "./ShopDepartment";

export const EnterpriseDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="enterprise" />;
};
