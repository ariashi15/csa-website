import SectionHeader from "../components/SectionHeader";
import GalleryGrid from "../components/GalleryGrid";
import galleryData from "../data/galleryData.json";

function Gallery() {
  return (
    <section style={{ marginTop: 30 }}>
      <SectionHeader title="Photo Gallery" subtitle="Camera Roll" />
      <GalleryGrid columns={galleryData.gallery} />
    </section>
  );
}

export default Gallery;
