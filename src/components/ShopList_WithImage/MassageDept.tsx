import { Shop, ShopProps } from "@/types";
import ShopListItem from "../ShopListItem";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

type Props = {
  articles?: Shop[];
};

export const MassageDept = ({ articles }: ShopProps) => {
  // articles が存在しない場合は空配列を渡す
  const filteredArticles = useCategoryFilter(articles ?? [], "massage");

  if (filteredArticles.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-auto mx-auto">
      {filteredArticles.map((article) => (
        <ShopListItem shop={article} key={article.id} />
      ))}
    </ul>
  );
};
