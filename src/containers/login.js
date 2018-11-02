 /**
 * Created by zdy on 2018/11/2.
 */
 import {connect} from 'react-redux';

 import Login from '../components/login'

 import {login} from '../redux/action'

 export default connect(
  
   state=>({user:state.user}),
  
   {login}

 )(Login)