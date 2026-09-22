import './GalleryColumn.css'
import emptyImage from '../assets/images/empty-image.png'

function GalleryColumn({ images }) {
    const handleImgError = (e) => {
            e.target.onerror = null; // prevent infinite loop if emptyImage also fails
            e.target.src = emptyImage;
    };

    return (
        <div className="gallery-column">
            {images.map(({ title, imageUrl }, index) => (
                <img
                    key={`${imageUrl}-${index}`}
                    src={imageUrl || emptyImage}
                    alt={title}
                    onError={handleImgError}
                />
            ))}
        </div>
    )
}

export default GalleryColumn
