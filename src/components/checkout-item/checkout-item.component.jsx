import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { ArrowContianer, CheckoutContianer, ImageContianer, LayoutSpanItem, RemoveContianer } from './checkout-item.styles';


const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart 
  } = useContext(CartContext);

  const addItemHandler  = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <CheckoutContianer> 
      <ImageContianer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContianer>
      <LayoutSpanItem>{name}</LayoutSpanItem>
      <LayoutSpanItem>
        <ArrowContianer onClick={() => addItemHandler(cartItem)}>&#10094;</ArrowContianer>
        <LayoutSpanItem>{quantity}</LayoutSpanItem>  
        <ArrowContianer onClick={() => removeItemHandler(cartItem)}>&#10095;</ArrowContianer>
      </LayoutSpanItem>
      <LayoutSpanItem>{price}</LayoutSpanItem>
      <RemoveContianer onClick={() => clearItemHandler(cartItem)} >&#10005;</RemoveContianer>
    </CheckoutContianer>
  );
}

export default CheckoutItem;