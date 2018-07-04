import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashBoard from './../components/ExpenseDashBoard.js';
import AddExpenseDashBoard from './../components/AddExpenseDashBoard.js';
import EditExpenseDashBoard from './../components/EditExpenseDashBoard.js';
import HelpPage from './../components/HelpPage.js';
import MyHeader from './../components/myHeader.js';
import NotFoundPage from './../components/NotFoundPage.js';
import React from 'react';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <MyHeader />
            <Switch>
                <Route path="/" component={ExpenseDashBoard} exact={true} />
                <Route path="/create" component={AddExpenseDashBoard} />
                <Route path="/edit/:id" component={EditExpenseDashBoard} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

//<Route path="/edit/:id" component={EditExpenseDashBoard} /> = the ":id" is used to set the url dynamically the front wil not change 
//so the url localhost:8080/edit wont change 
//but the back will change dynamically