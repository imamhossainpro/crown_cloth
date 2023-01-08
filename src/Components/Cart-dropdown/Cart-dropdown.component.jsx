import { useContext } from 'react';
import { CartContext } from '../../Contexts/Cart.context';
import Button from '../Button/Button.component';
import CartItem from '../Cart-item/Cart-item.component';
import './Cart-dropdown.styles.scss'
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;