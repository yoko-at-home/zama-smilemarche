import type { Banner, Shop } from "@/types";
import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Shop>({
      endpoint: "shops",
      queries,
    })
    .catch(notFound);

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client
    .getListDetail<Shop>({
      endpoint: "shops",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};

// 一覧を取得
export const getBannerList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Banner>({
      endpoint: "banner",
      queries,
    })
    .catch(notFound);
  return listData;
};
