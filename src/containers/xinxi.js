/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import Xiaoxi from '../components/xiaoxi'

import {uPdataDashenInfo} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {uPdataDashenInfo}

)(Xiaoxi)