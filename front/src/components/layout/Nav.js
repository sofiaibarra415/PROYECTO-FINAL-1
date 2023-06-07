import '../../style/nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}>Inicio</NavLink>;</li>
                    <li><NavLink to="/recetas" className={({ isActive }) => isActive ? "activo" : undefined}>Recetas</NavLink>;</li>
                    <li><NavLink to="/sugerencias" className={({ isActive }) => isActive ? "activo" : undefined}>Sugerencias</NavLink>;</li>
                    <li><NavLink to="/Tips" className={({ isActive }) => isActive ? "activo" : undefined}>Tips</NavLink>;</li>
                    <li><NavLink to="/novedades" className={({ isActive }) => isActive ? "activo" : undefined}>Novedades</NavLink>;</li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined}>Contacto</NavLink>;</li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;