import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUserContext } from '../../context/UserProvider'

const Navbar = () => {

    const { loggedIn, setLoggedIn, logout } = useUserContext();

    const showLogOut = () => {
        if (loggedIn) {
            return (
                <>
                    <button className="btn btn-danger" onClick={logout}>LogOut</button>
                </>
            )
        }
    }







    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#000289' }}>
                {/* Container wrapper */}
                <div className="container">
                    {/* Toggle button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        {/* <a className="navbar-brand mt-2 mt-lg-0" href="#"> */}
                        <img
                            src="/logo.png"
                            height={55}
                            alt="MDB Logo"
                            loading="lazy"
                        />
                        {/* </a> */}
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/main/home">
                                    Home
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/user/userProfile">
                                    Profile
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/main/signup">
                                    SignUp
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/main/login">
                                    Login
                                </NavLink>
                            </li> */}
                            {showLogOut()}
                        </ul>

                    </div>



                </div>

            </nav>

        </div>
    )
}

export default Navbar