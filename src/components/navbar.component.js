import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{

    render() {
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Dorayaki Shop Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar=item">
                            <Link to="/" className="nav-link">Stok List</Link>
                        </li>
                        <li className="navbar=item">
                            <Link to="/new-toko" className="nav-link">Create New Toko</Link>
                        </li>
                        <li className="navbar=item">
                            <Link to="/new-dorayaki" className="nav-link">Create New Dorayaki</Link>
                        </li>
                        <li className="navbar=item">
                            <Link to="/new-stok" className="nav-link">Create New Stok</Link>
                        </li>
                        <li className="navbar=item">
                            <Link to="/findtoko" className="nav-link">Find Toko</Link>
                        </li>                                                 
                    </ul>
                </div>
            </nav>
        );
    }   
}