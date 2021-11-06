import { Route, Switch } from 'wouter'
import Details from '../views/Details'
import Home from '../views/Home'
import SearchResults from '../views/SearchResults'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Home} />

      <Route path='/search/:name/:rating?' component={SearchResults} />

      <Route path='/detail/:id' component={Details} />
    </Switch>
  )
}
