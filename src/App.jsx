import Index from "pages";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import EditSale from "pages/EditSale";
function App () {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/index">
                        <Index/>
                    </Route>
                    <Route path="/editsale"> <EditSale/> </Route>
                </Switch>
            </Router>
           
        </div>
    );
}

export default App;