/**
 * Created by zdy on 2018/10/30.
 */
import {reqLogin,reqRegister,UpData,reqGetUserInfo,reqGetUserList} from '../api'


//重置信息
export const  authSuccess=(user)=>({type:'AUTH_SUCCESS',data:user})

export const  errMsg=(msg)=>({type:'ERR_MSG',data:msg})

export const  updataSuccess=(user)=>({type:'UPDATA_SUCCESS',data:user})

export const  updataMsg=(user)=>({type:'UPDATA_MSG',data:user})


export const  updateUserLiat=userlist=>({type:'UPDATA-USER-LIST',data:userlist})
export const  resetUserLiat=msg=>({type:'RESET-USER-LIST',data:msg})

export const  register=(data)=>{
  
  const {username, password, rePassword, type} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  } else if (password !== rePassword) {
    return errMsg({username, password, msg: '两次密码输入不一致，请重新输入'});
  } else if (!type) {
    return errMsg({username, password, msg: '请选择账号类型'});
  }
  
  return dispatch=>{
    console.log(8888)
    reqRegister(data)
      .then(res=>{
          console.log(res)
         if(res.data.code===0){
           
           dispatch(authSuccess( res.data.data))
         }else {
           dispatch(errMsg({username:data.username,type:data.type,msg:res.data.msg}))
           
         }
     })
      .catch(err=>{
           dispatch(errMsg('网络不稳定，请重新试试~'))
      })
   
      
  }
}

export const  login=(data)=>{
  const {username, password} = data;
  if (!username) {
    return errMsg({username, password, msg: '请输入用户名'});
  } else if (!password) {
    return errMsg({username, password, msg: '请输入密码'});
  }
  
  return dispatch=>{

    reqLogin(data)
      .then(res=>{
        console.log(res)
        if(res.data.code===0){
          
          dispatch(authSuccess( res.data.data))
        }else {
          dispatch(errMsg({username:data.username,type:data.type,msg:res.data.msg}))
          
        }
      })
      .catch(err=>{
        dispatch(errMsg('网络不稳定，请重新试试~'))
      })
    
    
  }
}



export const  uPdataInfo=(data)=>{
  const {header, info, post,  salary,company} = data;
  if (!header) {
    return errMsg({ msg: '请选择头像'});
  } else if (!info) {
    return errMsg({ msg: '请输入职位要求'});
  } else if (!post) {
    return errMsg({ msg: '招聘职位'});
  } else if (!salary) {
    return errMsg({ msg: '请输入职位薪资'});
  }else if (!company) {
    return errMsg({ msg: '请输入公司名称'});
  }
  
  return dispatch=>{
    UpData(data)
      .then(res=>{
        console.log(res)
        if(res.data.code===0){
          
          dispatch(updataSuccess( res.data.data))
          
        }else {
          
          dispatch(updataMsg({username:data.username,type:data.type,msg:res.data.msg}))
          
        }
      })
      .catch(err=>{
        dispatch(updataMsg({msg:'网络不稳定，请重新试试~'}))
      })
    
    
  }
}






export const  uPdataDashenInfo=(data)=>{
  const {header, info, post} = data;
  if (!header) {
    return errMsg({ msg: '请选择头像'});
  } else if (!info) {
    return errMsg({ msg: '请输入职位要求'});
  } else if (!post) {
    return errMsg({ msg: '招聘职位'});
  }
  
  return dispatch=>{
    UpData(data)
      .then(res=>{
        console.log(res)
        if(res.data.code===0){
          
          dispatch(updataSuccess( res.data.data))
          
        }else {
          
          dispatch(updataMsg({username:data.username,type:data.type,msg:res.data.msg}))
          
        }
      })
      .catch(err=>{
        dispatch(updataMsg({msg:'网络不稳定，请重新试试~'}))
      })
    
    
  }
}

export const  getUserInfo=()=>{
  return dispatch=>{
     reqGetUserInfo()
       .then(res=>{
         const  result=res.data
         if(result.code===0){
           dispatch(updataSuccess(result.data))
         }else {
         dispatch(updataMsg({msg:result.msg}))
         }
       })
       .catch(err=>{
         dispatch(updataMsg({msg:'网络不稳定，请重新试试~'}))
       })
  }
}
export const  GetUserList=(type)=>{
  return dispatch=>{
    reqGetUserList(type)
      .then(res=>{
        const  result=res.data
        if(result.code===0){
          dispatch(updateUserLiat(result.data))
        }else {
          dispatch(resetUserLiat({msg:result.msg}))
        }
      })
      .catch(err=>{
        dispatch(resetUserLiat({msg:'网络不稳定，请重新试试~'}))
      })
  }
}