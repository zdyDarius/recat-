
import React from 'react'
import {Result, List, WhiteSpace, Button} from 'antd-mobile'
import {Modal} from 'antd-mobile'
import Cookies from 'js-cookie'
import {Redirect} from'react-router-dom'
const Item = List.Item
const Brief = Item.Brief

const alert=Modal.alert
export default class Personal extends React.Component {

  logout=()=>{
   alert('退出登录', '你确定???', [
     { text: '取消', onPress: () =>{} },
     { text: '确定', onPress: () => {
  
       Cookies.remove('userid');
       
   
       this.props.history.replace('/login')
       this.props.updataMsg(this.props.user.username)
       
     } },
   ]);
  }
  render() {
 
    
    
    const {user}=this.props
    console.log(user)
    
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/avatars/${user.header}.png`)} style={{width: 50}} alt="header"/>}
          title={user.username}
          message={user.company}
        />
        
        <List renderHeader={() => '相关信息'}>
          <Item multipleLine>
            <Brief>职位: {user.post}</Brief>
            <Brief>简介:{user.info}</Brief>
            {user.salary?<Brief>薪资:{user.salary}</Brief>:' '}
          </Item>
        </List>
        <WhiteSpace/>
        <List>
          <Button type='warning' onClick={this.logout}>退出登录</Button>
        </List>
      </div>
    )
  }
} ;