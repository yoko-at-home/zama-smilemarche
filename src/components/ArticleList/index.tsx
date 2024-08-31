import { Article } from "@/libs/microcms";
import ArticleListItem from "../ArticleListItem";

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul
      className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
 gap-4 z-50"
    >
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
}
