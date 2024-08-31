import Link from "next/link";
import { Article } from "@/libs/microcms";
import styles from "./index.module.css";

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.card}>
      <div className={styles.card_overlay}></div>
      <Link href={`/shops/${article.id}`}>
        <p className={styles.card_inner}>{article.title}</p>
      </Link>
      <Link href={`/shops/${article.id}`}>
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          <img
            src={article.thumbnail?.url}
            alt=""
            className={styles.thumbnail}
          />
        </picture>
      </Link>
    </li>
  );
}
