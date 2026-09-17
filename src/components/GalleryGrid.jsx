import GalleryColumn from './GalleryColumn'
import './GalleryGrid.css'

function GalleryGrid({ columns }) {
    return (
        <div className="gallery-grid">
            {columns.map((imagePaths, index) => (
                <GalleryColumn key={index} imagePaths={imagePaths} />
            ))}
        </div>
    )
}

export default GalleryGrid
