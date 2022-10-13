import {Link} from "react-router-dom"
const Header = ()=> {

    return <div>
        <Link to="inicio">Inicio </Link>
        <Link to="informacion">Informacion </Link>
        <Link to="sobremi">sobremi</Link>
        <Link to="camara">camara</Link>
    </div>

}


export default Header