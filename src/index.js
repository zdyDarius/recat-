/**
 * Created by zdy on 2018/10/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Route,HashRouter,Switch,} from 'react-router-dom'

import Login from './components/login'
import Main from './components/main'
import Register from './components/register'


import store from './redux/store'



import {Provider} from 'react-redux'


ReactDOM.render(<Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}/>
     
      <Route path="/register" component={Register}/>
  
      <Route  component={Main}/>
    </Switch>
  </HashRouter>
</Provider>,document.getElementById('root'))





