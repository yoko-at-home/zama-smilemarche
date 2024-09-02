import Link from "next/link";

type CustomLinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const CustomLink = ({ href, ...rest }: CustomLinkProps) => {
  const isInternalLink = href.startsWith("/");
  const isAnchorLink = href.startsWith("#");

  if (isInternalLink) {
    return <Link href={href} {...rest}></Link>;
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};
