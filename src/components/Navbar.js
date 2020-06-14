import React from "react";
import {Link,withRouter} from 'react-router-dom'

const Navbar = (props) => {
    //setTimeout(()=>{
      //  props.history.push('/contact');
    //},2000)
  return (
    <nav className="nav-wrapper red darken-3">
    <div className="container"> 
        <a className="brand-logo">Poke Items</a>
        <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact </Link></li>
        </ul>
    </div>
    </nav>
  );
};
export default withRouter(Navbar)