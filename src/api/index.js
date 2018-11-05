/**
 * Created by zdy on 2018/11/1.
 */
import ajax from '../api/ajax';

export const reqRegister=(data)=>ajax('./register',data,'POST')

export const reqLogin=(data)=>ajax('./login',data,'POST')

export const  UpData=(data)=>ajax('./updata',data,'POST')

export const reqGetUserInfo=(data)=>ajax('./user')


export const reqGetUserList=(type)=>ajax('./userlist',{type})