import type {
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

// タグの型定義
export type Tag = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// ブログの型定義
export type Shop = {
  title: string;
  ingtagram: string;
  taste?: string;
  category: Tag[];
  content: string;
  thumbnail?: MicroCMSImage;
  picture1?: MicroCMSImage;
  picture2?: MicroCMSImage;
};
// ブログの型定義
export type Banner = {
  title: string;
  description: string;
  description2?: string;
  image1?: MicroCMSImage;
  image2?: MicroCMSImage;
};

export type TypeShop = Shop & MicroCMSContentId & MicroCMSDate;

export type TypeBanner = Banner & MicroCMSContentId & MicroCMSDate;

export type ToppageProps = {
  banners?: TypeBanner[];
};

export type ShopProps = {
  articles?: TypeShop[];
};
export type TitleProps = {
  text: string;
};
