import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import { Button } from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropDownContainer, CartItems } from './cart-dropdown.styles';


const CartDropdown = () => {
  
   const { cartItems, setIsCartOpen } = useContext(CartContext);
   
   const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((item) => {
         return <CartItem key={item.id} cartItem={item} /> 
        })}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button> 
    </CartDropDownContainer>
  );
}

export default CartDropdown; 