/**
 * Created by zdy on 2018/11/1.
 */
import React, {Component} from 'react';

import {Route,Switch} from 'react-router-dom'

import Dasheninfo from '../../containers/dashen-info'

import Laobaninfo from '../../containers/laoban-info'

class Main extends Component {
  render () {
    return (
    <Switch>
      
      <Route path="/laobanInfo" component={Laobaninfo}/>
      
      <Route path="/dashenInfo" component={Dasheninfo}/>
    </Switch>
    
    )
  }
}



export default Main;