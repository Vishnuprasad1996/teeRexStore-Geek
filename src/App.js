import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";

import "./App.css";

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </>
);

export default App;
