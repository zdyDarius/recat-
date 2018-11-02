/**
 * Created by zdy on 2018/10/30.
 */

function count(preState=0,action){
  console.log(action,preState)
  switch (action.type){
    case 'INCREMENT':
      return preState+(+action.data)
    case 'DECREMENT':
      return preState-action.data
    default:
      return preState
  }
}
export default count;