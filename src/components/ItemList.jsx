import { useState } from "react";
import ItemCard from "./ItemCard";
import { sampleData } from "../data/sampleData";

const CATEGORY_ACCENTS = {
  Culture: "#C8102E", // chinese red
  Social: "#4E2A84", // northwestern purple
  Service: "#F2994A",
  Sports: "#1F8A70",
};

const VARIANTS = [
  /*{ value: "standard", label: "Standard" }, */
  { value: "photo", label: "Photo" },
  /*{ value: "compact", label: "Compact" }, */
];

function ItemList() {
  const [variant, setVariant] = useState("photo");

  return (
    <div className="item-list-wrap">
      <div className="item-list-controls">
        <span className="item-list-controls-label">Card style</span>
        <div className="variant-switcher" role="group" aria-label="Card display style">
          {VARIANTS.map((v) => (
            <button
              key={v.value}
              type="button"
              className={variant === v.value ? "active" : ""}
              onClick={() => setVariant(v.value)}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div data-testid="item-list" className={`item-list item-list--${variant}`}>
        {sampleData.map((item) => (
          <ItemCard
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            image={item.image}
            variant={variant}
            accent={CATEGORY_ACCENTS[item.category] ?? "#C8102E"}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemList;