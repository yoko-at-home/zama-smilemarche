/* eslint-disable @next/next/no-img-element */
"use client";
import { siteMetadata } from "@/data/siteMetadata";
import Lottie from "lottie-react";
import Facebook from "@/components/icons/facebook.json";
import Instagram from "@/components/icons/instagram.json";
import Mail from "@/components/icons/mail.json";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { CustomLink } from "../Navigation/CustomLink";
import { labels } from "../Navigation";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {labels.map(({ href, label }) => {
          return (
            <CustomLink
              key={href}
              href={href}
              // onClick={handleNavBarOpen}
              className="hover:text-gray-900"
            >
              {label}
            </CustomLink>
          );
        })}
      </nav>

      <div className="flex justify-center space-x-5">
        <Link
          href={siteMetadata.HP}
          target="_blank"
          className="bg-amber-50 flex flex-col items-center w-12 justify-center rounded-full text-emerald-800 animate-pulse shadow-sm"
        >
          <FaHome />
          <span className="text-[1px] font-thin">Home</span>
        </Link>
        <Link href={siteMetadata.facebook} target="_blank">
          <Lottie animationData={Facebook} className="h-12 w-12" loop={true} />
        </Link>
        <a href={`mailto:${siteMetadata.email}`} title="Email">
          <Lottie animationData={Mail} className="h-12 w-12" loop />
        </a>
        <Link href={siteMetadata.instagram} target="_blank">
          <Lottie animationData={Instagram} className="h-12 w-12" loop={true} />
        </Link>
      </div>

      <div className="flex justify-center flex-col md:flex-row text-sm text-gray-500">
        <div className="pt-10 flex justify-center items-center mb-3  md:mb-0 md:mr-3">
          お客様専用公式LINE：
          <a href="https://lin.ee/ebfIoUC" target="_blank">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              width="80"
              height="80"
            />
          </a>
        </div>
        <div className="pb-10 flex justify-center items-center md:pt-10 md:pb-0">
          出店者専用公式LINE：
          <a href="https://lin.ee/u0Ir6bv" target="_blank">
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              width="80"
              height="80"
            />
          </a>
        </div>
      </div>
      <div className="mb-2 flex items-center justify-center align-middle space-x-2 text-sm text-gray-700 hover:text-red-400">
        <Link href={siteMetadata.HP} target="_blank">
          {siteMetadata.author}&nbsp;&copy;
          {`${new Date().getFullYear()}`}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
