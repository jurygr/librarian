import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { GiBookshelf} from "react-icons/gi";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <Link to="/">
            <GiBookshelf className="navbar-brand" style={{fontSize:'40px'}} />
              <h1 className="navbar-brand">Librarian</h1>
            </Link>
            </nav>
        )
    }
}