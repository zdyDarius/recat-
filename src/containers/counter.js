/**
 * Created by zdy on 2018/10/30.
 */
import {connect} from 'react-redux';

import Register from '../components/register'

import {register} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {register}
  
)(Register)