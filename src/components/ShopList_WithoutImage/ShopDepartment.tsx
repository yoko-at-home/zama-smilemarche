import { ShopProps } from "@/types";
import ShopListItem from "../ShopListItem";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

type ShopDepartmentProps = {
  shops: ShopProps["shops"];
  category: string;
};

export const ShopDepartment = ({ shops, category }: ShopDepartmentProps) => {
  // shops が存在しない場合は空配列を渡す
  const filteredShops = useCategoryFilter(shops ?? [], category);

  if (filteredShops.length === 0) {
    return <p>項目がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 overflow-auto mx-auto">
      {filteredShops.map((shop) => (
        <ShopListItem shop={shop} key={shop.id} />
      ))}
    </ul>
  );
};

export const CraftDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="craft" />;
};
export const EnterpriseDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="enterprise" />;
};

export const FoodDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="food" />;
};

export const KitchenCar = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="kitchen-car" />;
};

export const MassageDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="massage" />;
};

export const PerformanceDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="performance" />;
};
export const WorkshopDept = ({ shops }: ShopProps) => {
  return <ShopDepartment shops={shops} category="workshop" />;
};
