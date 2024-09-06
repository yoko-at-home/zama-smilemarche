import ShopNameListItem from "../ShopNameListItem";
import { Props } from "./types";

export default function ShopNameList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="flex flex-row overflow-auto mx-auto">
      {articles.map((article) => (
        <ShopNameListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
