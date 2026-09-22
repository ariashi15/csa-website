import GalleryColumn from './GalleryColumn'
import './GalleryGrid.css'

function GalleryGrid({ columns }) {
    return (
        <div className="gallery-grid">
            {columns.map((images, index) => (
                <GalleryColumn key={index} images={images} />
            ))}
        </div>
    )
}

export default GalleryGrid
