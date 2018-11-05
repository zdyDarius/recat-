/**
 * Created by zdy on 2018/11/2.
 */
import {connect} from 'react-redux';

import Laoban from '../components/laoban'

import {GetUserList} from '../redux/action'

export default connect(
  
  state=>({userList:state.userList}),
  
  {GetUserList}

)(Laoban)