import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand logo">
                <img className="logo" src={Logo} alt="logo" />
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/profile">
                            <p>Profile</p>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/upload">
                            <p>Upload Video</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;