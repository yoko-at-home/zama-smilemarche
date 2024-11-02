import BackGround from "@/components/Background/";
import { MetaHeader } from "@/components/Layout/Header/MetaHeader";
import { siteMetadata } from "@/data/siteMetadata";
import { Metadata } from "next";

export const revalidate = 60;
// ISRの再生成時間を設定

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `お問い合わせ | ${siteMetadata.title}`,
    description: "フッターのSNSからお問い合わせください",
    openGraph: {
      title: `お問い合わせ | ${siteMetadata.title}`,
      description: "フッターのSNSからお問い合わせください",
      images: siteMetadata.image,
    },
  };
}

const ContactPage = () => {
  return (
    <div className="relative">
      <MetaHeader
        title="お問い合わせ"
        description="お気軽にSNSからお声がけください！"
      />
      <div className="absolute top-1/2 right-1/2 pl-10 dark:text-white">
        お問い合わせは、ページ下のSNSまたはメールにて承ります
      </div>
      <BackGround />
    </div>
  );
};

export default ContactPage;
