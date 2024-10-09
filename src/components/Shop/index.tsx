"use client";
import { formatRichText } from "@/libs/utils";
import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";
import Lottie from "lottie-react";
import Instagram from "../icons/instagram.json";
import { Shop } from "@/types";

type Props = {
  data: Shop;
};

// ショップ個別ページ
export const ShopPageComponent: FC<Props> = ({ data }) => {
  return (
    <main className={styles.main}>
      <div className=" mt-16">
        <div className={styles.card}>
          <div className="absolute inset-0 pointer-events-none bg-gray-[#93a1a1]/20 rounded-t-md p-1"></div>
          <h1 className="pt-2 flex flex-col justify-center text-center bg-[#93a1a1]/20 rounded-t-[30px] overflow-x-scroll h-16 text-[#aeaaaa] font-mono mb-3 font-semibold text-xl shadow-sm">
            {data.title}
          </h1>
          <p className={styles.card_inner2}>{data.taste}</p>
        </div>
        <div>
          <div className={styles.card2}>
            <div className="absolute inset-3 pointer-events-none">
              <div className="flex flex-col">
                {!data.thumbnail?.url ? (
                  <p className="flex justify-center items-center font-black  capitalize text-gray-400 h-36">
                    no image
                  </p>
                ) : (
                  <picture>
                    <source
                      type="image/webp"
                      media="(max-width: 640px)"
                      srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
                    />
                    <img
                      src={data.thumbnail?.url}
                      alt=""
                      className={styles.thumbnail}
                    />
                  </picture>
                )}
              </div>
              <div
                className="p-3 bg-[#c9c7c7/10]"
                dangerouslySetInnerHTML={{
                  __html: `${formatRichText(data.content)}`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <Link href={data.ingtagram} target="_blank">
            <span className="flex justify-center px-5 py-3 items-center bg-gray-50 m-5 rounded-full drop-shadow-sm">
              <Lottie
                animationData={Instagram}
                className="h-12 w-12"
                loop={true}
              />
              <span className="flex justify-start h-6 overflow-x-scroll w-[200px]">
                {data.ingtagram.replace("https://www.instagram.com/", "")}
              </span>
            </span>
          </Link>
          {!data.ingtagram2 ? null : (
            <Link href={data.ingtagram2} target="_blank">
              <span className="flex justify-center px-5 py-3 items-center bg-gray-50 m-5 rounded-full drop-shadow-sm">
                <Lottie
                  animationData={Instagram}
                  className="h-12 w-12"
                  loop={true}
                />
                <span className="flex justify-start h-6 overflow-x-scroll w-[200px]">
                  {data.ingtagram2.replace("https://www.instagram.com/", "")}
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row md:justify-around">
        <div className="flex flex-col md:pr-3">
          {!data.picture1?.url ? null : (
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${data.picture1?.url}?fm=webp&w=414 1x, ${data.picture1?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <img
                src={data.picture1?.url}
                alt=""
                className={styles.thumbnail}
              />
            </picture>
          )}
        </div>
        <div className="flex flex-col">
          {!data.picture2?.url ? null : (
            <picture>
              <source
                type="image/webp"
                media="(max-width: 640px)"
                srcSet={`${data.picture2?.url}?fm=webp&w=414 1x, ${data.picture2?.url}?fm=webp&w=414&dpr=2 2x`}
              />
              <img
                src={data.picture2?.url}
                alt=""
                className={styles.thumbnail}
              />
            </picture>
          )}
        </div>
      </div>
    </main>
  );
};
