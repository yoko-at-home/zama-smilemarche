"use client";
import Link from "next/link";
import { CustomLink } from "./CustomLink";
import { useState } from "react";

const items = [
  { href: "/", label: "ホーム" },
  { href: "/overview", label: "概要" },
  { href: "/shops", label: "出店者一覧" },
];

type Props = {
  className?: string;
  type?: "entrance" | "main";
};

export const NavBarDesktop: React.FC = () => {
  return (
    <nav className="hidden min-h-screen flex-col justify-start text-left sm:flex pl-3">
      <div className="mt-6 flex flex-col sm:mt-12">
        {items.map(({ href, label }) => {
          return (
            <Link
              key={href}
              href={href}
              className="mb-2 whitespace-nowrap text-2xl font-medium text-gray-400 hover:text-gray-600 lg:text-3xl"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
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
          className="mx-1 h-16 w-16 rounded"
          aria-label="Toggle Menu"
          onClick={handleNavBarOpen}
        >
          <img
            alt="navigation icon"
            src="/static/favicon_io/android-chrome-512x512.webp"
            className="z-50 w-16 rounded-full md:w-24 bg-white border-2 border-sky-200 animate-pulse"
            width="22px"
            height="22px"
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
          </nav>
        </div>
      </div>
    </>
  );
};
