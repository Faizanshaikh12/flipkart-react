import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Cart from "./components/cart/Cart"
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
