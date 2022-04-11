import React from 'react';
import CategoryItem from './CategoryItem';
import './categories.scss';

export default function CategoryList({category = []}) {
  return (
    <div className='category__list'>
        {category.map(item => (
            <CategoryItem key={item.idCategory} {...item} />
        )) }
    </div>
  )
}
