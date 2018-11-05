/**
 * Created by zdy on 2018/11/1.
 */
import axios from 'axios'
import {stringify} from 'qs'
export default function ajax(url='',data={},type='GET') {
  let val = ''
  console.log(data)
  if (type === 'GET' || type === 'get') {
    if (data) {
      Object.keys(data).forEach((key) => {
        val += 'type'+'='+ data[key] + '&'
      })
      val = val.substring(0, val.length - 1)
    }
    url +='?'+ val;
    console.log(url)
    return axios.get(url)
  } else {
    return axios.post(url, stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}