/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import dashen from '../components/dashen-info'

import {uPdataDashenInfo} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {uPdataDashenInfo}

)(dashen)