/**
 * Created by zdy on 2018/10/30.
 */
import {combineReducers} from 'redux';

import {getRedirectPath} from '../utils';


const initUserState={
  username:'',
  type:'',
  msg:'',
  redirectTo:''
}
function user(preState=initUserState,action){
 
  switch (action.type){
    case 'AUTH_SUCCESS':
      return {...action.data,msg:'',redirectTo: getRedirectPath(action.data.type, action.data.header)}
    case 'ERR_MSG':
      return {...action.data}
    case 'UPDATA_SUCCESS':
      return  action.data
    case 'UPDATA_MSG':
      return action.data
    default:
      return preState
  }
}
const initUserListState=[]
function userList(preState=initUserListState,action){

switch (action.type){
  case 'UPDATA-USER-LIST':
    return action.data
  case 'RESET-USER-LIST':
    return action.data
  default:return preState
}

}


export default combineReducers({
  user,
  userList
});