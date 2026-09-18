import SectionHeader from "../components/SectionHeader";
import emptyImage from '../assets/images/empty-image.png'
import GalleryGrid from "../components/GalleryGrid";

const galleryColumns = [
  [emptyImage, emptyImage],
  [emptyImage, emptyImage, emptyImage],
  [emptyImage, emptyImage],
  [emptyImage, emptyImage, emptyImage],
]

function Gallery() {
  return (
    <>
      <SectionHeader title="Photo Gallery" subtitle="Camera Roll" />
      <GalleryGrid columns={galleryColumns} />
    </>
  );
}

export default Gallery;
