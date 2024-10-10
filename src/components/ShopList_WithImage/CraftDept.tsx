import { ShopProps } from "@/types";
import ShopListItem from "../ShopListItem";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

export const CraftDept = ({ shops }: ShopProps) => {
  // shops が存在しない場合は空配列を渡す
  const filteredShops = useCategoryFilter(shops ?? [], "craft");

  if (filteredShops.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 overflow-auto mx-auto">
      {filteredShops.map((shop) => (
        <ShopListItem shop={shop} key={shop.id} />
      ))}
    </ul>
  );
};
