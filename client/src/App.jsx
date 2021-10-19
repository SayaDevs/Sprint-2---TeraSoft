import Index from "pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import EditSale from "pages/EditSale";
import AddSale from "pages/AddSale";
import ForgotPassword from "pages/forgotPassword";
import Register from "pages/Register";
import Login from "pages/Login";
import ProductList from "pages/productsList";
import AddProduct from "pages/addProduct";
function App () {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/index">
                        <Index/>
                    </Route>
                    <Route path="/editsale"> 
                        <EditSale/> 
                    </Route>
                    <Route path="/addsale"> 
                        <AddSale/> 
                    </Route>
                    <Route path="/forgotpassword"> 
                        <ForgotPassword/> 
                    </Route>
                    <Route path="/register"> 
                        <Register/> 
                    </Route>
                    <Route path="/login"> 
                        <Login/> 
                    </Route>
                    <Route path="/productList"> 
                        <ProductList/> 
                    </Route>
                    <Route path="/addProduct"> 
                        <AddProduct/> 
                    </Route>
                    
                </Switch>
            </Router>
           
        </div>
    );
}

export default App;