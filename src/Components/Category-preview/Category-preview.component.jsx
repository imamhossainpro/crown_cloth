import ProductCard from '../Product-card/Product-card.component'
import './Category-preview.styles.scss'
const CategoryPreview = ({ title, products }) => (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );

  export default CategoryPreview