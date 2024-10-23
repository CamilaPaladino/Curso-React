import cart from "../../../images/cart.png"

function CartWidget() {
  return (
    <a href="#" className="cart">
      <img src={cart} alt="" />
      <div className="buble">
        <span>3</span>
      </div>
    </a>
  )
}

export default CartWidget