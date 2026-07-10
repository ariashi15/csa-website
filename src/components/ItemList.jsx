import React from 'react';
import ItemCard from './ItemCard';
import { sampleData } from '../data/sampleData';

function ItemList() {
  return (
    <div data-testid="item-list" className="item-list">
      {sampleData.map((item) => (
         <ItemCard
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
         />
       ))}
    </div>
  );
}

export default ItemList;