import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";

import { NavLink } from "./NaviLink";

const items = [
  { href: "/shops/kitchencar", label: "Kitchen Car" },
  { href: "/shops/food", label: "F o o d" },
  { href: "/shops/workshop", label: "W o r k s h o p" },
  { href: "/shops/craft", label: "C r a f t" },
  { href: "/shops/entertainment", label: "エンタメ" },
  { href: "/shops/other", label: "O t h e r" },
];
const NaviShops = () => {
  return (
    <nav className="flex flex-row place-items-end mt-40 mx-3 rotate-280 text-center mb-1">
      {items.map(({ href, label }) => {
        return (
          <NavLink key={href} href={href} activeClassName="text-orange-500">
            <p className="rounded-tl-lg bg-gradient-radial from-[#cacaca] to-[#aaa4a4] px-1 sm:px-3 pt-2 ml-1">
              <span className="sm:text-lg md:text-xl ml-1 uppercase tracking-tighter font-extrabold">
                {label}
              </span>
            </p>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col antialiased">
      <SmileBlissImage />
      <div className="flex flex-col items-center">
        <NaviShops />
      </div>
      {children}
    </div>
  );
}
