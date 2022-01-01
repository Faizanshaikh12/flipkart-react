import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Cart from "./components/cart/Cart"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TemplateProvider} from './templates/TemplateProvider';
import ContextProvider from "./context/ContextProvider";

function App() {
    return (<TemplateProvider>
        <ContextProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/cart' component={Cart}/>
                </Switch>
            </BrowserRouter>
        </ContextProvider>
    </TemplateProvider>);
}

export default App;
