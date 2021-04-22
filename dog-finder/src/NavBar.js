import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="NavBar">
        {props.dogs.map(dog => <NavLink exact to={`/dogs/${dog.name}`}>{dog.name}</NavLink>)}
        <NavLink exact to='/'>Home</NavLink>
    </nav>
  );
}

export default NavBar;