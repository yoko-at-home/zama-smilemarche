import type { TypeShop, Tag } from "@/types";

export const useCategoryFilter = (
  shops: TypeShop[] | undefined,
  categoryIdToFilter: string
) => {
  if (!shops) return [];

  const filteredShops = shops.filter((shop) => {
    const categoryId = shop.category?.id;

    return categoryId === categoryIdToFilter;
  });

  return filteredShops;
};
