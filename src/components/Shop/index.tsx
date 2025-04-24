"use client";
import { formatRichText } from "@/libs/utils";
import Link from "next/link";
import type { FC } from "react";
import Lottie from "lottie-react";
import Instagram from "../icons/instagram.json";
import type { Shop } from "@/types";
import parse from "html-react-parser";

type Props = {
  data: Shop;
};

const getInstagramUrl = (username: string) => {
  if (username.startsWith("http")) {
    return username;
  }
  return `https://www.instagram.com/${username.replace("@", "")}`;
};

// ショップ個別ページ
export const ShopPageComponent: FC<Props> = ({ data }) => {
  return (
    <main className="flex flex-col items-center">
      <div className="mt-16">
        <div className="relative pt-[9px] px-[9px] mt-4 rounded-t-[35px] shadow-lg w-[350px] h-40 bg-[#e8e8e8] text-gray-700 inset-0 drop-shadow-lg">
          <div className="absolute inset-0 pointer-events-none bg-gray-[#93a1a1]/20 rounded-t-md p-1" />
          <h1 className="flex flex-col justify-center text-center bg-black rounded-t-[30px] overflow-clip h-16 text-[#aeaaaa] mb-3 font-semibold text-xl shadow-sm">
            {data.title}
          </h1>
          <p className="flex flex-col justify-center text-center font-semibold text-md h-14 drop-shadow-md items-center  mt-3 text-gray-600  bg-[#93a1a1]/20">
            {data.taste}
          </p>
        </div>
        <div>
          <div className="relative pt-[9px] px-[9px] shadow-lg w-[350px] h-[800px] bg-[#e8e8e8] inset-0 drop-shadow-lg overflow-clip">
            <div className="absolute inset-3 pointer-events-none">
              <div className="flex flex-col">
                {!data.thumbnail?.url ? (
                  <p className="flex justify-center items-center font-black  capitalize text-gray-400 h-36">
                    no image
                  </p>
                ) : (
                  <div
                    className="relative flex h-80 w-full items-end justify-start rounded bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${data.thumbnail?.url})`,
                    }}
                  />
                )}
              </div>
              <div className="p-3 bg-[#c9c7c7/10] text-gray-600">
                {parse(data.content)}
              </div>
            </div>
          </div>
        </div>
        {/* Instagram starts */}
        {!data.ingtagram ? null : (
          <div className="flex flex-row">
            <Link
              href={getInstagramUrl(data.ingtagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex justify-center px-5 py-3 items-center bg-gray-50 m-5 rounded-full drop-shadow-sm">
                <Lottie
                  animationData={Instagram}
                  className="h-12 w-12"
                  loop={true}
                />
                <span className="flex justify-start h-6 overflow-clip w-[200px]">
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
                  <span className="flex justify-start h-6 overflow-hidden w-[200px]">
                    {data.ingtagram2.replace("https://www.instagram.com/", "")}
                  </span>
                </span>
              </Link>
            )}
          </div>
        )}
        {/* Instagram ends */}
      </div>

      <div className="flex flex-col justify-between md:flex-row md:justify-around mb-6">
        <div className="flex flex-col md:pr-3">
          {!data.picture1?.url ? null : (
            <div
              className="flex h-60 w-60 items-end justify-start rounded bg-cover bg-center mb-3 border-2 border-white shadow-emerald-100"
              style={{
                backgroundImage: `url(${data.picture1?.url})`,
              }}
            />
          )}
        </div>
        <div className="flex flex-col">
          {!data.picture2?.url ? null : (
            <div
              className="flex h-60 w-60 items-end justify-start rounded bg-cover bg-center text-left border-2 border-white shadow-emerald-100"
              style={{
                backgroundImage: `url(${data.picture2?.url})`,
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
};
