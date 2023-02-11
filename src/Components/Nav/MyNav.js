import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';
function MyNav(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between ps-5 pe-5" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active"><a href="#" className="nav-item nav-link active">HOME</a></Link>
                            <Link to="Shop" className="nav-item nav-link "><a href="#" className="nav-item nav-link">SHOP</a></Link>
                            <Link to="About" className="nav-item nav-link"><a href="#" className="nav-item nav-link">ABOUT US</a></Link>
                            <Link to="Contact" className="nav-item nav-link"><a href="#" className="nav-item nav-link">CONTACT US</a></Link>
                        </div>
                        <div>
                            <img src={require('../../Images/nlogo.jpg')} />
                        </div>
                        <div className="navbar-nav">
                            <div>
                                <img src={require('../../Images/s.jpg')} />
                            </div>
                            <div className='ps-3 pe-3'>
                                <Link to="Login"> <img src={require('../../Images/l.jpg')} /></Link>
                            </div>
                            <div>
                                <img src={require('../../Images/c.jpg')} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MyNav;