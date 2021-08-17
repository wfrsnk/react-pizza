import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  return (
    <div className="categories">
      <ul>
        <li onClick={() => setActiveItem(null)} className={activeItem === null ? 'active' : ''}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
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
