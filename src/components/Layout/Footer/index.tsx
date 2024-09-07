"use client";
import { siteMetadata } from "@/data/siteMetadata";
import Lottie from "lottie-react";
import Facebook from "@/components/icons/facebook.json";
import Instagram from "@/components/icons/instagram.json";
import Mail from "@/components/icons/mail.json";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="/">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="/about">
          About
        </Link>
        <Link className="hover:text-gray-900" href="/service">
          Services
        </Link>
        <Link className="hover:text-gray-900" href="/shops">
          Shops
        </Link>
        <Link className="hover:text-gray-900" href="/gallery">
          Gallery
        </Link>
        <Link className="hover:text-gray-900" href="/contact">
          Contact
        </Link>
      </nav>

      <div className="flex justify-center space-x-5">
        <Link
          href={siteMetadata.HP}
          target="_blank"
          className="bg-amber-50 flex flex-col items-center w-12 justify-center rounded-full text-emerald-800 animate-pulse shadow-sm"
        >
          <FaHome />
          <span className="text-[1px] font-thin font-mono">Home</span>
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
