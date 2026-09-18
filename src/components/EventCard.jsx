import "./EventCard.css"

function EventCard({ tag, title, date }){
    return (
        <div className="card">
            <img src="src/assets/images/empty-image.png" />
            <div className="card__footer">
                <div className="card__tag">{tag}</div>
                <div className="card__title">{title}</div>
                <div className="card__date">{date}</div>
            </div>
        </div>
    );
}

export default EventCard;


