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

// Shopの型定義
export type Shop = {
  title: string;
  ingtagram: string;
  ingtagram2?: string;
  taste?: string;
  category: Tag[];
  content: string;
  join: boolean;
  thumbnail?: MicroCMSImage;
  picture1?: MicroCMSImage;
  picture2?: MicroCMSImage;
};
export type TypeShop = Shop & MicroCMSContentId & MicroCMSDate;

// Toppageの型定義
export type Banner = {
  title: string;
  date: string;
  content?: string;
  image1?: MicroCMSImage;
  image2?: MicroCMSImage;
  description: string;
  supporter1: string;
  supporter2: string;
  supporter3?: string;
  supporter4?: string;
  supporter5?: string;
};

export type TypeBanner = Banner & MicroCMSContentId & MicroCMSDate;


export type ToppageProps = {
  banners: TypeBanner[];
};
export type SupporterProps = {
  banners: TypeBanner;
};

export type ShopProps = {
  shops?: TypeShop[];
};
export type TitleProps = {
  text: string;
};
