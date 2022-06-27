import {CartItemContainer, ItemDetails} from './cart-item.styles'

const CartItem = ({cartItem}) => {

  const { id, name, imageUrl, quantity, price } = cartItem
  return (
    <CartItemContainer key={id}>
      <img src={imageUrl} alt={`${name}`}/>
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem