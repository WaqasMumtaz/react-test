import { render } from "@testing-library/react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { createBrowserHistory as history} from 'history';
import Home from '../screens/home';
import Products from '../screens/products';
import ProductItems from '../screens/items';
import About from '../screens/about';
// import history from '../History';
const Main = ()=>{
  
        return(
            // <Router history={history}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/products" component={Products}/>
                    <Route  path="/products/:id" component={ProductItems}/>
                    <Route  path="/about" component={About}/>
                    <Route  path="*" component={()=><h2>404 Page Not Found</h2>}/>
                </Switch>
            </Router>
        )
    
}

export default Main;