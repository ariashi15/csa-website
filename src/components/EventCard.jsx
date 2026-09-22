import "./EventCard.css"
import emptyImage from "../assets/images/empty-image.png";

function EventCard({ tag, title, date, imgUrl }) {
    const handleImgError = (e) => {
        e.target.onerror = null; // prevent infinite loop if emptyImage also fails
        e.target.src = emptyImage;
    };

  return (
    <div className="card">
        <img
            src={imgUrl || emptyImage}
            alt={title}
            onError={handleImgError}
        />
        <div className="card__footer">
            <div className="card__tag">{tag}</div>
            <div className="card__title">{title}</div>
            <div className="card__date">{date}</div>
        </div>
    </div>
    );
}

export default EventCard;


