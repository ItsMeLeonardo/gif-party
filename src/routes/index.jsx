import { Route, Switch } from "wouter";
import Details from "../views/Details";
import Home from "../views/Home";
import SearchResults from "../views/SearchResults";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home}>
      </Route>
      
      <Route path="/search/:name" component={SearchResults}>
      </Route>
      
      <Route path="/random" component={SearchResults}>
      </Route>
      
      <Route path="/byCategory/:name" component={SearchResults}>
      </Route>
      
      <Route path="/detail/:id" component={Details}>
      </Route>
      
    </Switch>
  );
}
