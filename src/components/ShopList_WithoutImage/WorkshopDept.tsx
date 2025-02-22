import type { Shop, ShopProps } from "@/types";
import ShopNameListItem from "../ShopNameListItem";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

type Props = {
  shops?: Shop[];
};

export const WorkshopDept = ({ shops }: ShopProps) => {
  // shops が存在しない場合は空配列を渡す
  const filteredShops = useCategoryFilter(shops ?? [], "workshop");

  if (filteredShops.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 overflow-auto mx-auto">
      {filteredShops.map((shop) => (
        <ShopNameListItem shop={shop} key={shop.id} />
      ))}
    </ul>
  );
};
