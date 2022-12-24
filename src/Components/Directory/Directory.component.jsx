import './Directory.style.scss'
import CategoryItem from '../Category-item/category-items.components';
const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory