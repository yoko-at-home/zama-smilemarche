import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";
import { notFound } from "next/navigation";

// タグの型定義
type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ブログの型定義
export type Blog = {
  title: string;
  ingtagram: string;
  taste: string;
  category: Tag[];
  content: string;
  thumbnail?: MicroCMSImage;
};

export type Article = Blog & MicroCMSContentId & MicroCMSDate;

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
    .getList<Blog>({
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
    .getListDetail<Blog>({
      endpoint: "shops",
      contentId,
      queries,
    })
    .catch(notFound);

  return detailData;
};
