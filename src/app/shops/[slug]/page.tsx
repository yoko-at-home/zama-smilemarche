import { ShopPageComponent } from "@/components/Shop";
import SmileMarcheImage from "@/components/Layout/Header/SmileMarchImage";
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
    title: data.title,
    description: data.taste,
    openGraph: {
      title: data.title,
      description: data.taste,
      images: [data?.thumbnail?.url || ""],
    },
  };
}

export default async function Page({ params }: Props) {
  const data = await getDetail(params.slug);

  return (
    <div className="relative">
      <div className="absolute top-0 p-4 shadow-sm rounded-sm dro p-shadow-sm w-screen h-1/2 bg-opacity-20 bg-cover bg-left-top z-10">
        <SmileMarcheImage />
      </div>
      <div className="box-content bg-gradient-radial from-orange-500/40 from-30% via-[crimson]/70 via-50% to-[skyblue]/70 pt-20">
        <ShopPageComponent data={data} />
      </div>
    </div>
  );
}
