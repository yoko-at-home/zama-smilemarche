import { ShopPageComponent } from "@/components/Shop";
import { getDetail } from "@/libs/microcms";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getDetail(params.slug);

  return {
    title: `${data.title} | Smile marche Zama`,
    description: data.taste,
    openGraph: {
      title: `${data.title} | Smile marche Zama`,
      description: data.taste,
      images: [data?.thumbnail?.url || ""],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug);

  return <ShopPageComponent data={data} />;
}
