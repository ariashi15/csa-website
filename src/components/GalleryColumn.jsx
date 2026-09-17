import './GalleryColumn.css'

function GalleryColumn({ imagePaths }) {
    return (
        <div className="gallery-column">
            {imagePaths.map((imagePath, index) => (
                <img key={`${imagePath}-${index}`} src={imagePath} alt="" />
            ))}
        </div>
    )
}

export default GalleryColumn
