import React from "react";
import { NavLink } from 'react-router-dom'
function Nav() {
    const activeClassName = "border-b-2 border-white";
    return (
        <nav className="bg-purple-600 text-white p-4">
            <ul className="flex space-x-6 justify-end">
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    } >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive ? activeClassName : undefined
                    }>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;