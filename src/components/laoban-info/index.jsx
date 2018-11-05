import React, {Component} from 'react';

import {Redirect} from 'react-router-dom'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'

import HeaderSelector from  '../heaser-selector'

class Laobaninfo extends Component {
  
  state = {
    header: '',
    info: '',
    post: '',
    salary: '',
    company: ''
  }
  add=(h)=>{
    this.setState({
      header:h
    })
  }
  
  sendInfo=()=>{
  
    this.props.uPdataInfo(this.state)
  }
  handlechange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  
  render () {
    const {msg,header} = this.props.user;
    console.log(header)
    if(header){
      
      return <Redirect to="/laoban"/>
    }
    return (
           <div>
             <NavBar>老板信息完善</NavBar>
             {msg?<p className="err">{msg}</p>:''}
             <HeaderSelector add={this.add}/>
             <InputItem onChange={val=>this.handlechange('post',val)}>招聘职位:</InputItem>
             <InputItem onChange={val=>this.handlechange('company',val)}>公司名称:</InputItem>
             <InputItem onChange={val=>this.handlechange('salary',val)}>职位薪资:</InputItem>
             <TextareaItem onChange={val=>this.handlechange('info',val)} title="职位要求" rows={3} />
             <Button type="primary" onClick={this.sendInfo}>保 存</Button>
           </div>
    )
  }
}

export default Laobaninfo;