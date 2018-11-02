/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import Laoban from '../components/laoban-info'

import {uPdataInfo} from '../redux/action'

export default connect(
  
  state=>({user:state.user}),
  
  {uPdataInfo}

)(Laoban)