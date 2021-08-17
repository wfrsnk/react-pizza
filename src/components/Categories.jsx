import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(0);

  console.log('items: ', items);
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            onClick={() => setActiveItem(index)}
            key={`${name}_${index}`}
            className={activeItem === index ? 'active' : ''}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
