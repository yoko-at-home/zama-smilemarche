"use client";
import type { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname をインポート
import type { ReactElement } from "react";
import { cloneElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClassName: string };

/**
 * @package
 */
export const NavLink = (props: Props) => {
  const { activeClassName, children, ...linkProps } = props;
  const pathname = usePathname(); // useRouter ではなく usePathname を使用

  // ルートパスを"/"に正規化
  const currentPath = pathname === "/root" ? "/" : pathname;

  const className =
    currentPath === linkProps.href
      ? `${activeClassName} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
