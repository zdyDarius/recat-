import React, {Component} from 'react';

import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'

import HeaderSelector from  '../heaser-selector'

class Dasheninfo extends Component {
  
  state = {
    header:'',
    info: '',
    post: '',
  
  }
  add=(h)=>{
    this.setState({
      header:h
    })
  }
  
  sendInfo=()=>{
  this.props.uPdataDashenInfo(this.state)
  }
  handlechange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  
  
  render () {
    const {msg} = this.props.user;
    return (
      <div>
        <NavBar>老板信息完善</NavBar>
        {msg?<p className="err">{msg}</p>:''}
        <HeaderSelector add={this.add}/>
        <InputItem onChange={val=>this.handlechange('post',val)}>求职职位:</InputItem>
        <TextareaItem onChange={val=>this.handlechange('info',val)} title="个人介绍:" rows={3} />
        <Button type="primary" onClick={this.sendInfo}>保 存</Button>
      </div>
    )
  }
}

export default Dasheninfo;