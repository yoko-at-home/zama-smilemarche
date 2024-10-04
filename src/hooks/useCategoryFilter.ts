import { Article, Tag } from "@/types";

export const useCategoryFilter = (
  articles: Article[] | undefined,
  categoryIdToFilter: string
) => {
  if (!articles) return [];

  return articles.filter((article) => {
    let categoryId: string | undefined;

    if (Array.isArray(article.category)) {
      categoryId = article.category[0]?.id;
    } else if (
      typeof article.category === "object" &&
      article.category !== null
    ) {
      categoryId = (article.category as Tag).id;
    } else if (typeof article.category === "string") {
      categoryId = article.category;
    }

    return categoryId === categoryIdToFilter;
  });
};
