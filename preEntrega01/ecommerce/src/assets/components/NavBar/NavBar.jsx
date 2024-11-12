import logo from "../../../images/logoWhite.png"
import CartWidget from "../CartWidget/CartWidget"
import Item from "../ItemNav/ItemNav"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <img src={logo} alt="Estilo Hogar" />
        <ul>
          <li className="itemNavBar"><Item nombre="Phones" to="/category/phones" /></li>          
          <li className="itemNavBar"><Item nombre="Tablets" to="/category/tablets" /></li>         
          <li className="itemNavBar"><Item nombre="Notebooks" to="/category/notebooks" /></li>          
          <li>
            <CartWidget></CartWidget>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar