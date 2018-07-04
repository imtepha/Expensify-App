import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';

//navlink is the same as link but it has a much more att

/*const ExpenseDashBoard = () => {
    return (
        <div>
    hey this is my dashboard
    </div>
    );
};*/

const ExpenseDashBoard = () => (
    <div>
        hey this is my dashboard
    </div>
);

const CreateDashBoard = () => (
    <div>
        hey this is my create dashboard page
    </div>
);

const EditDashBoard = () => (
    <div>
        hey this is my edit dashboard page
    </div>
);

const HelpPage = () => (
    <div>
        hey this is my help page
    </div>
);

//link in the here serve a client side routing for faster performance see:https://reacttraining.com/react-router/web/api/Link
//(the server side method is by using href attributes),
// we use client side routing because we have the address internal , but if we want to route to google we wont have any adv from client side routing
//in here we used link rather than nav link beacuse in here we want it simple
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

//while in here we used nav link beacuse we want to highlight page we are on (the text)
//activeClassName -> The class to give the element when it is active. The default given class is active. This will be joined with the className prop
//with this we are able to customize the text link
//we put the exact in the very first to fixed the double highlight
const Header = () => (
    <header>
        <h3>Expensify</h3>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br></br>
        <NavLink to="/create" activeClassName="is-active"> Create </NavLink><br></br>
        <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink><br></br>
        <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
    </header>
);

//approuter act as react component (stateless functional component) 
const AppRouter = () =>(
//<Route path="/" component={ExpenseDashBoard} exact={true}/> the exact serve so that when we access the create,edit,and help it wont show 
    //the first expense component
    //Route without a path will always see as a match
    //<Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively
    //we we go to url localhost:8080/testing the switch will check each one by one and ended up in the last beacuse the last will always be a match
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashBoard} exact={true} />
                <Route path="/create" component={CreateDashBoard} />
                <Route path="/edit" component={EditDashBoard} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

    </BrowserRouter>
);
 export default AppRouter;