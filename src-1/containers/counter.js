/**
 * Created by zdy on 2018/10/30.
 */
import {connect} from 'react-redux';

import App from '../components/App'

import {increment,decrement,incrementAcyn} from '../redux/action'

export default connect(
  
  state=>({count:state}),
  
  {increment,decrement,incrementAcyn}
  
)(App)