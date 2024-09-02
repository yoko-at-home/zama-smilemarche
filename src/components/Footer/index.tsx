"use client";
import { siteMetadata } from "@/data/siteMetadata";
import Lottie from "lottie-react";
import Facebook from "../icons/facebook.json";
import Instagram from "../icons/instagram.json";

import Link from "next/link";

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
        <Link href={siteMetadata.facebook} target="_blank">
          <Lottie animationData={Facebook} className="h-12 w-12" loop={true} />
        </Link>
        <Link href={siteMetadata.instagram} target="_blank">
          <Lottie animationData={Instagram} className="h-12 w-12" loop={true} />
        </Link>
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-gray-700">
        <p>
          {siteMetadata.author}&nbsp;&copy;
          {`${new Date().getFullYear()}`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
