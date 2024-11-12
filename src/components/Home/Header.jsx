import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min"

export default function Header() {

    return(
        <header className="-fixed -z-10 md:-block -w-screen -py-2 -px-4 lg:-px-0 -bg-[hsl(0,100%,0%,0.2)] -backdrop-blur-[2px]">
            <div className="-container -max-w-5xl -mx-auto">
                <nav className="navbar navbar-dark navbar-expand-md">
                    <NavLink to="/" className={ ({isActive}) => { return isActive ? "active" : ""} }>Inicio</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#listContainer">
                        <i className="navbar-toggler-icon"></i>
                    </button>
                    <div id="listContainer" className="navbar-collapse collapse -text-center md:flex md:-justify-end">
                        <ul className="navbar-nav -flex -py-1 -gap-5 -text-[1.25rem]">
                            <li className="nav-item">
                                <NavLink to="/culinaria">Culinária</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/turismo">Turismo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cultura-pop">Cultura Pop</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}