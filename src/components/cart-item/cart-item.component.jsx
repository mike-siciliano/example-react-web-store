import { CartItemContainer, CartItemDetails, CartItemName } from "./cart-item.styles";


const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem; 

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName className='name'>{name}</CartItemName>
        <span>{quantity} x {price}</span>
      </CartItemDetails>
    </CartItemContainer>
  );
  
}

export default CartItem;