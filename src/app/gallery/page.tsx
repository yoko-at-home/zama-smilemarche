import GalleryComponent from "@/components/Gallery";
import { siteMetadata } from "@/data/siteMetadata";
import type { Metadata } from "next";

export const revalidate = 60;
// ISRの再生成時間を設定

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Gallery | ${siteMetadata.title}`,
    description: "イベント風景",
    openGraph: {
      title: `Gallery | ${siteMetadata.title}`,
      description: "イベント風景",
      images: siteMetadata.image,
    },
  };
}

const GalleryPage = () => {
  return (
    <div>
      <GalleryComponent />
    </div>
  );
};

export default GalleryPage;
