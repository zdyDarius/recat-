import React, {Component} from 'react';

import {NavBar,List, InputItem ,Button, WingBlank, WhiteSpace} from 'antd-mobile'

import {reqLogin} from '../../api'

import Logo from '../logo'


class Login extends Component {
  state={
    username:' ',
    password:'',

  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
    
  }
  
  onAjax=()=>{
  this.props.login(this.state)
  
  }
  
  
  goRegister=()=>{
    this.props.history.replace('./register')
  }
  
  render () {
    const { msg} = this.props.user;
    return (
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        
        <Logo/>
        
        <WingBlank>
          {msg?<p className="err">{msg}</p>:''}
          <WhiteSpace/>
          <form>
            <List>
              <InputItem  placeholder="请输入用户名" type="text" onChange={val=>this.handleChange('username',val)}>用户名:</InputItem>
              <WhiteSpace/>
              <InputItem  placeholder="请输入密码" type="password" onChange={val=>this.handleChange('password',val)}>
                密码:
              </InputItem>
              <WhiteSpace/>
              <Button type="primary" onClick={this.onAjax}>登录</Button>
              <WhiteSpace/>
              <Button  onClick={this.goRegister}>还没有账户</Button>
            
            </List>
          </form>
        
        </WingBlank>
      </div>
    )
  }
}

export default Login;