import React, {Component} from 'react';

import { NavBar,List,InputItem ,Button,WingBlank, WhiteSpace,Radio} from 'antd-mobile'
import Logo from '../logo'
import {reqLogin} from '../../api'
const Item = List.Item;


class Login extends Component {
  state = {
    username: '',
    password: ''
 
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  register=()=>{
    const {username,password}=this.state
  
    if(!username||!password){
    
      alert('信息不能为空')
    
      return
    }
    
    
    const data={username,password}
    console.log(data)
    
    
    
    reqLogin(data)
      .then(function (response) {
        console.log(response);
      })
  }
  goRegister = () => {
    //跳转到登录路由，编程式导航
    this.props.history.replace('/register');  //替换浏览历史记录
  }
  
  render () {
    return (
      <div>
        <NavBar>尚 硅 谷</NavBar>
        
        <Logo/>
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={(val)=>{this.handleChange('username',val)}}>用户名:</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入密码" type="password" onChange={(val)=>{this.handleChange('password',val)}}>密码:</InputItem>
              <WhiteSpace />
              <Button type="primary" onClick={this.register} >登录</Button>
              <WhiteSpace />
              <Button onClick={this.goRegister} >还没有账户</Button>
            </List>
          
          </form>
        </WingBlank>
      
      </div>
    )
  }
}

export default Login;