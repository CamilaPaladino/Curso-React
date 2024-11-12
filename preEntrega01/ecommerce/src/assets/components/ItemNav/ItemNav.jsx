import { Link } from "react-router-dom"

export const ItemNav = ({nombre, to}) => {
    
        return(
            <Link to={to}>{nombre}</Link>
        )
    }
    
    export default ItemNav