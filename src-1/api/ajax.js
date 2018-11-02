/**
 * Created by zdy on 2018/10/31.
 */
import axios from 'axios'

import {stringify} from 'qs'


export default function ajax(url = '', data = {}, type = 'GET'){
  let val='';
  if(type==='GET'||type==='get'){
    if(data){
   
      Object.keys(data).forEach(key=>{
        val+=key+'='+data[key]+'&'
      })
      val=val.substring(0,val.length-1)
    }
    
    url=url+val;
    
    return axios.get(url)
    
    
  }else {
    return axios.post(url, stringify(data),{
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
  
}