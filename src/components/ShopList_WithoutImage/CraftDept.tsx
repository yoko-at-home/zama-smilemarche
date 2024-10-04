import { Shop, ShopProps } from "@/types";
import ShopNameListItem from "../ShopNameListItem";
import { useCategoryFilter } from "@/hooks/useCategoryFilter";

type Props = {
  articles?: Shop[];
};

export const CraftDept = ({ articles }: ShopProps) => {
  // articles が存在しない場合は空配列を渡す
  const filteredArticles = useCategoryFilter(articles ?? [], "craft");

  if (filteredArticles.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-auto mx-auto">
      {filteredArticles.map((article) => (
        <ShopNameListItem shop={article} key={article.id} />
      ))}
    </ul>
  );
};
