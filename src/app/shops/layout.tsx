import SmileBlissImage from "@/components/Layout/Header/SmileBlissImage";

import { NavLink } from "./NaviLink";

const items = [
  { href: "/shops/kitchencar", label: "Kitchen Car" },
  { href: "/shops/food", label: "Food" },
  { href: "/shops/workshop", label: "Workshop" },
  { href: "/shops/craft", label: "Craft" },
  { href: "/shops/other", label: "Others" },
];
const NaviShops = () => {
  return (
    <nav className="mt-60 text-slate-800">
      {items.map(({ href, label }) => {
        return (
          <NavLink
            key={href}
            href={href}
            activeClassName="hover:text-slate-400 font-bold"
          >
            <span className="rounded-t-lg px-1 sm:px-3 pt-2 sm:text-lg hover:text-slate-800 md:text-2xl bg-gradient-radial from-[#f0f0f0] to-[#aaa4a4] mr-1">
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
