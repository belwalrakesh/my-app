import React from 'react'
// import { Link } from "react-router-dom";


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <img className="" src="favicon.ico" alt="" height="35" width="35"/>


            <div className="container">
                <a className="navbar-brand" href="/">{props.title}</a>



                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                          

                                <a className={`link-${props.mode === 'light' ? 'success' : 'light nav-item'}`} href="/">Home</a>
                           
                        </li>
                        {/* <li className="nav-item mx-4">
                            
                                <Link className={`link-${props.mode === 'light' ? 'success' : 'light nav-item '}`} to="about">{props.About}</Link>
                           
                        </li> */}

                    </ul>
                </div>
            </div>


            <div className={`form-check mx-4 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} Mode</label>
            </div>





        </nav>

    )
}
