import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CartContext } from '../../contexts/cart.context';
import { CheckOutContainer, CheckOutHeader, CheckOutHeaderBlock, CheckOutTotal } from './checkout.styles';

const Checkout = () => {

  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <CheckOutHeaderBlock>
          <span>Product</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Description</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Quantity</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Price</span>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock>
          <span>Remove</span>
        </CheckOutHeaderBlock>
      </CheckOutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
      ))}
      <CheckOutTotal>Total ${cartTotal}</CheckOutTotal>
    </CheckOutContainer>
  );
}

export default Checkout;