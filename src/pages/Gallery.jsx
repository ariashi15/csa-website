import SectionHeader from "../components/SectionHeader";
import GalleryGrid from "../components/GalleryGrid";
import galleryData from "../data/galleryData.json";

function Gallery() {
  return (
    <>
      <SectionHeader title="Photo Gallery" subtitle="Camera Roll" />
      <GalleryGrid columns={galleryData.gallery} />
    </>
  );
}

export default Gallery;
