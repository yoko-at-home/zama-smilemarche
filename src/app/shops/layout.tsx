import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";

import { NavLink } from "./NaviLink";

const items = [
  { href: "/shops/kitchencar", label: "キッチンカー" },
  { href: "/shops/food", label: "食 品" },
  { href: "/shops/workshop", label: "ワークショップ" },
  { href: "/shops/craft", label: "クラフト" },
  { href: "/shops/other", label: "他" },
];
const NaviShops = () => {
  return (
    <nav className="flex justify-center place-items-center items-end mt-60  mx-3 sm:mx-auto font-semibold">
      {items.map(({ href, label }) => {
        return (
          <NavLink key={href} href={href} activeClassName="text-orange-500">
            <span className="rounded-tl-lg px-1 sm:px-3 pt-2 text-sm sm:text-lg md:text-2xl bg-gradient-radial from-[#f0f0f0] to-[#aaa4a4] text-center h-20 sm:mr-1">
              {label}
            </span>
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
    <div className="flex flex-col items-center">
      <SmileBlissImage />
      <div className="flex flex-col justify-center items-centerr">
        <NaviShops />
      </div>
      {children}
    </div>
  );
}
