/**
 * Created by zdy on 2018/11/1.
 */
import React, {Component} from 'react';

import {NavBar,List, InputItem ,Button, WingBlank, WhiteSpace,Radio} from 'antd-mobile'



import Logo from '../logo'

import {Redirect} from 'react-router-dom'


const Item = List.Item;



class Register extends Component {
  state={
    username:' ',
    password:'',
    rePassword:'',
    type:'laoban'
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
    
  }
  
  onAjax=()=>{
    const {username,password,rePassword,type}=this.state
    

    const data={username,password,type,rePassword}
    
     this.props.register(data)
     
  }
  
  goLogin=()=>{
    this.props.history.replace('./login')
  }
  
  render () {

   const {type}=this.state
  
    const { msg,redirectTo} = this.props.user;
    
    if (redirectTo) {
      
      console.log(redirectTo)
      //编程式导航
      // this.props.history.replace(redirectTo);
      //路由链接跳转
      return <Redirect to={redirectTo} />
    }
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
                <InputItem  placeholder="请再次输入密码" type="password" onChange={val=>this.handleChange('rePassword',val)}>
                  确认密码:
                </InputItem>
                <WhiteSpace/>
                <Item>
                  用户类型: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Radio checked={type === 'dashen'} onClick={()=>this.handleChange('type','dashen')}>大神</Radio>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Radio checked={type === 'laoban'} onClick={()=>this.handleChange('type','laoban')} >老板</Radio>
                </Item>
                <WhiteSpace/>
                  <Button type="primary" onClick={this.onAjax}>注冊</Button>
                <WhiteSpace/>
                
                  <Button  onClick={this.goLogin}>已有账户</Button>
                
              </List>
            </form>
  
            </WingBlank>
          </div>
    )
  }
}

export default Register;