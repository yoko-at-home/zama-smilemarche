import ShopListItem from "../ShopListItem";
import { Props } from "../ShopListCategory/types";

export default function ShopList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-auto mx-auto">
      {articles.map((article) => (
        <ShopListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
