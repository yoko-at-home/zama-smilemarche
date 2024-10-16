/* eslint-disable @next/next/no-img-element */
"use client";
import { CustomLink } from "./CustomLink";
import { useState } from "react";
import { siteMetadata } from "@/data/siteMetadata";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Smile Marche" },
  { href: "/shops", label: "All Shops" },
  { href: "/service", label: "Service" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  className?: string;
  type?: "entrance" | "main";
};

export const NavBarMobile: React.FC<Props> = () => {
  const handleNavBarOpen = () => {
    return setIsNavbarOpen(!isNavbarOpen);
  };
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <>
      <div className="fixed right-10 bottom-28 z-50 rounded pt-1 xl:right-96">
        <button
          type="button"
          className="mx-1 h-20 w-20 rounded"
          aria-label="Toggle Menu"
          onClick={handleNavBarOpen}
        >
          <img
            alt="navigation icon"
            src="/static/favicon_io/android-chrome-512x512.webp"
            className="z-50 w-20 rounded-full md:w-24 bg-white border-2 border-sky-200 hover:animate-bounce"
            width="30px"
            height="30px"
            loading="lazy"
          />
        </button>
        <div
          className={`fixed top-0 right-0 z-10 h-full w-full overflow-auto bg-sky-50 duration-300 ease-in-out ${
            isNavbarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            aria-label="toggle modal"
            className="fixed -top-7 h-4/5 w-full cursor-auto focus:outline-none"
            onClick={handleNavBarOpen}
          ></button>
          <nav className="z-0 py-8 text-center md:mt-40">
            {items.map(({ href, label }) => {
              return (
                <CustomLink
                  key={href}
                  href={href}
                  onClick={handleNavBarOpen}
                  className="mx-auto flex flex-col p-2 text-right text-2xl font-medium tracking-widest text-gray-400 opacity-90 hover:text-gray-600 sm:p-3 sm:tracking-widest"
                >
                  {label}
                </CustomLink>
              );
            })}
            <CustomLink
              href={siteMetadata.HP}
              target="_blank"
              className="mx-auto flex flex-col p-2 text-right text-xl font-medium tracking-widest text-gray-400 opacity-90 hover:text-orange-300 sm:p-3 sm:tracking-widest"
            >
              スマイルブリスHP（外部リンク）
            </CustomLink>
          </nav>
        </div>
      </div>
    </>
  );
};
