import ShopListItem from "../ShopListItem";
import { Article, ShopProps, Tag } from "@/types";

type Props = {
  articles?: Article[];
};

export const WorkshopDept = ({ articles }: ShopProps) => {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>出店がありません。</p>;
  }

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 overflow-auto mx-auto">
      {articles.map((article) => {
        // category の型が配列でない場合に対処する

        let categoryId: string | undefined;

        if (Array.isArray(article.category)) {
          // categoryが配列の場合
          categoryId = article.category[0]?.id;
        } else if (
          typeof article.category === "object" &&
          article.category !== null
        ) {
          // categoryがオブジェクトの場合
          categoryId = (article.category as Tag).id; // 型アサーションを使用
        } else if (typeof article.category === "string") {
          // categoryが文字列の場合
          categoryId = article.category;
        }

        // 条件分岐の開始
        if (categoryId === "workshop") {
          return (
            <li key={article.id} className="category-craft">
              <ShopListItem article={article} />
            </li>
          );
        }
      })}
    </ul>
  );
};
