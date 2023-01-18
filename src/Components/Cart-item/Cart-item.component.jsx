import {CartItemContainer, ItemDetails, Item} from './Cart-item.styles.jsx';
const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Item as='span'>{name}</Item>
        <Item as='span'>{quantity} x ${price}</Item>
      </ItemDetails>
    </CartItemContainer>
  );
  };
  
  export default CartItem;