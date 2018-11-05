/**
 * Created by zdy on 2018/10/30.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Route,HashRouter,Switch} from 'react-router-dom'

import Login from './containers/login'
import Main from './containers/main'
import Register from './containers/counter'
import './assets/less/index.less'

import store from './redux/store'



import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login}/>
     
      <Route path="/register" component={Register}/>
  
      <Route path=""  component={Main}/>
    </Switch>
  </HashRouter>
</Provider>,
  document.getElementById('root'))





