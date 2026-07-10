function ItemCard({ title, category, description }) {
  return (
    <div data-testid="item-card">
      <h2>{title}</h2>
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
}

export default ItemCard;
