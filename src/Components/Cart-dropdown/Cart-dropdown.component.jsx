import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Contexts/Cart.context';
import Button from '../Button/Button.component';
import CartItem from '../Cart-item/Cart-item.component';
import {CartDropDownContainer, EmptyMessage, CartItems} from  './Cart-dropdown.styles.jsx'
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;