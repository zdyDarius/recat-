/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import Main from '../components/main'

import {getUserInfo} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {getUserInfo}

)(Main)