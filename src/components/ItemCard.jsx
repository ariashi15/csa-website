/**
 * ItemCard
 *
 * "variant" and "accent" let each card be restyled without touching CSS:
 *   variant: "standard" | "photo" | "compact"
 *   accent:  any CSS color, tints the category tag
 */
function ItemCard({
  title,
  category,
  description,
  image,
  accent = "#C8102E",
  variant = "photo",
}) {
  return (
    <div
      className={`item-card item-card--${variant}`}
      style={{ "--card-accent": accent }}
      data-testid="item-card"
    >
      {variant === "photo" && image && (
        <div className="item-card-media">
          <img src={image} alt="" />
        </div>
      )}

      <div className="item-card-body">
        {category && <span className="item-card-tag">{category}</span>}

        <h2>{title}</h2>
        {variant !== "compact" && <p className="item-card-desc">{description}</p>}
      </div>
    </div>
  );
}

export default ItemCard;