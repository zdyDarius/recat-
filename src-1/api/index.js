/**
 * Created by zdy on 2018/10/31.
 */
import ajax from '../api/ajax'
export const reqRegister=(data)=>ajax('/register',data,'POST')


export const reqLogin=(data)=>ajax('/login',data,'POST')