import logo from "../../../images/logoWhite.png"
import CartWidget from "../CartWidget/CartWidget"
import Item from "../Item/Item"

function NavBar() {
  return (
    <nav>
        <img src={logo} alt="Estilo Hogar" />
        <ul>
          <li className="itemNavBar"><Item nombre="Electro" link="#1" /></li>          
          <li className="itemNavBar"><Item nombre="Muebles" link="#2" /></li>         
          <li className="itemNavBar"><Item nombre="Blanquería" link="#3" /></li>          
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar