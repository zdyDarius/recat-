/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import Personal from '../components/gerenzhongxin'

import {uPdataDashenInfo,updataMsg} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {uPdataDashenInfo,updataMsg}

)(Personal)