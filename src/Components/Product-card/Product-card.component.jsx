import { useContext } from 'react';
import Button from '../Button/Button.component'
import { CartContext } from '../../Contexts/Cart.context';
import './Product-card.styles.scss'
const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} /> 
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <Button  buttonType='inverted' onClick={addProductToCart}>Add To Card</Button>
    </div>
  )
}

export default ProductCard