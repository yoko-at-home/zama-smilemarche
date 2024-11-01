import GalleryComponent from "@/components/Gallery/2024-Halloween-marche";
import { MetaHeader } from "@/components/Layout/Header/MetaHeader";

const GalleryPage = () => {
  return (
    <div>
      <MetaHeader title="Gallery" description="Halloween回のイベント風景" />
      <GalleryComponent />
    </div>
  );
};

export default GalleryPage;
