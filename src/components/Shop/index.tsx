"use client";
import { Article } from "@/libs/microcms";
import { formatRichText } from "@/libs/utils";
import Link from "next/link";
import { FC } from "react";
import styles from "./index.module.css";
import Lottie from "lottie-react";
import Instagram from "../icons/instagram.json";

type Props = {
  data: Article;
};

export const Shop: FC<Props> = ({ data }) => {
  return (
    <main className={styles.main}>
      <div className=" mt-16">
        <div className={styles.card}>
          <div className={styles.card_overlay}></div>
          <h1 className={styles.card_inner}>{data.title}</h1>
          <p className={styles.card_inner2}>{data.taste}</p>
        </div>
        <div>
          <div className={styles.card2}>
            <div className={styles.card_overlay2}>
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
        <Link href={data.ingtagram} target="_blank">
          <span className="flex justify-center px-5 py-3 items-center bg-gray-50 m-5 rounded-full drop-shadow-sm">
            <Lottie
              animationData={Instagram}
              className="h-12 w-12"
              loop={true}
            />
            <span className="h-6 break-words">
              {data.ingtagram.replace("https://www.instagram.com/", "")}
            </span>
          </span>
        </Link>
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
