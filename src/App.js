import './App.css';
import React from 'react'
import SearchInput from './components/SearchInput/SearchInput'
import PopularUsers from './components/PopularUsers/PopularUsers'
import UserDetails from './components/UserDetails/UserDetails'
import {Route, Switch} from 'react-router-dom'


function App() {
  return(
    <>
    <Route path="/" render={(props) => <SearchInput {...props} />}/>
    <Switch>
      <Route path="/" exact component={PopularUsers} />
      <Route path="/:id" component={UserDetails} />
    </Switch>
    </>
  )
}

export default App;
