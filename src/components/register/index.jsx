import React, {Component} from 'react';

import { NavBar,List,InputItem ,Button,WingBlank, WhiteSpace,Radio} from 'antd-mobile'
import Logo from '../logo'
import {reqRegister} from '../../api'
const Item = List.Item;


class Register extends Component {
  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'laoban'
  }
  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  register=()=>{
    
    const {username,password,rePassword,type}=this.state
    
    console.log(password,rePassword)
    
    if(!username||!password||!rePassword||!type){
      
       alert('信息不能为空')
      
        return
    }
    
    if(password!==rePassword){
      
      alert('两次密码不一致,请重新输入')
    
         return
    }
    
    const data={username,password,type}
    
    reqRegister(data)
      .then( (response)=> {
        alert('注册状态')
        console.log(response);
        this.setState({
          password: '',
          rePassword: '',
        })
      })
  }
  goLogin = () => {
    
    this.props.history.replace('/login');  //替换浏览历史记录
  
  }
  
  render () {
    const {type} = this.state;
    return (
        <div>
          <NavBar>尚 硅 谷</NavBar>
          
          <Logo/>
          <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名"  onChange={(val)=>{this.handleChange('username',val)}}>用户名:</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入密码" value={this.state.password} type="password" onChange={(val)=>{this.handleChange('password',val)}}>密码:</InputItem>
              <WhiteSpace />
              <InputItem  placeholder="请输入确认密码" value={this.state.rePassword} type="password" onChange={(val)=>{this.handleChange('rePassword',val)}}>确认密码:</InputItem>
              <Item>
                用户类型： &nbsp;&nbsp;
                <Radio   className="my-radio" checked={type === 'dashen'}   onClick={( )=>{this.handleChange('type','dashen')}} >
                  大神
                </Radio>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio  className="my-radio" checked={type === 'laoban'} onClick={( )=>{this.handleChange('type','laoban')}}>
                  老板
                </Radio>
              </Item>
              <WhiteSpace />
                <Button type="primary" onClick={this.register} >注册</Button>
              <WhiteSpace />
                <Button onClick={this.goLogin} >已有账户</Button>
            </List>
            
          </form>
          </WingBlank>
          
        </div>
    )
  }
}

export default Register;