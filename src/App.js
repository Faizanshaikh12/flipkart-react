import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Cart from "./components/cart/Cart"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TemplateProvider} from './templates/TemplateProvider';

function App() {
    return (<TemplateProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/cart' component={Cart}/>
                </Switch>
            </BrowserRouter>
        </TemplateProvider>);
}

export default App;
