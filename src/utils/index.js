/**
 * Created by zdy on 2018/11/2.
 */
export function getRedirectPath(type,header) {
  let path=''
if(type==='laoban'){
  path = '/laoban'
}else {
  path = '/dashen'
}
  if (!header) {
    path += 'Info';
  }
  return path
}