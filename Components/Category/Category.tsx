// @ts-nocheck
import { useState } from 'react';

const CategorySelect = ({ categories, onSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event:any) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <select className='border-none ring-offset-0 outline-none bg-transparent text-sm text-gray-600' value={selectedCategory} onChange={handleChange}>
      <option value="">All Catagories</option>
      {categories.map((category:any) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;