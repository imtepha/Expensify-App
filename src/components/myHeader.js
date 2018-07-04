import React from 'react';
import { NavLink } from 'react-router-dom';

const MyHeader = () => (
    <header>
        <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br></br>
        <NavLink to="/create" activeClassName="is-active"> Create </NavLink><br></br>
        <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
    </header>
);

export default MyHeader;

//<NavLink to="/edit" activeClassName="is-active"> Edit </NavLink><br></br> 
// we remove this page because we dont have to create a static page in it , this page will be dynamic one so no need to make it static