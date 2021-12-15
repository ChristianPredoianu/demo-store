const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.image} alt="" className="product-img" />
      <div className="product-details">
        <p className="product-details__title">{props.title}</p>
        <p className="product-details__price">{props.price}</p>
        <p className="product-details__amount">{props.amount}</p>
      </div>
      <p className="remove-product"></p>
    </div>
  );
};

export default CartItem;
