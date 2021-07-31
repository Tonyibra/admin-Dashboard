import React from "react";
import "./app.css";
import TopBar from "./Component/Topbar/TopBar";
import SideBar from "./Component/Sidebar/SideBar";
import Home from "./Pages/home/Home.jsx";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/product/Product";
import NewProduct from "./Pages/newProduct/NewProduct";
import {Link} from "react-router-dom";
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={UserList} exact />
          <Route path="/user/:userId" component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/products" component={ProductList} />
          <Route path="/product/:productsId" component={Product} />
          <Route path="/products/newProducts" component={NewProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
