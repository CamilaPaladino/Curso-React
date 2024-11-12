import { Link } from "react-router-dom"

function Item({product}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 card-producto">
        <img src={product.img} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <Link to="/detail">Ver más</Link>
    </div>
  )
}

export default Item