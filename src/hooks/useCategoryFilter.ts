import { TypeShop, Tag } from "@/types";

export const useCategoryFilter = (
  shops: TypeShop[] | undefined,
  categoryIdToFilter: string
) => {
  if (!shops) return [];

  return shops.filter((shop) => {
    let categoryId: string | undefined;

    if (Array.isArray(shop.category)) {
      categoryId = shop.category[0]?.id;
    } else if (typeof shop.category === "object" && shop.category !== null) {
      categoryId = (shop.category as Tag).id;
    } else if (typeof shop.category === "string") {
      categoryId = shop.category;
    }

    return categoryId === categoryIdToFilter;
  });
};
