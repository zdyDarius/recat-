import React, {Component} from 'react';

import {Grid,List} from 'antd-mobile'

class HeaderSelector extends Component {
  
  state={
    icon:''
  }
  
  
  setHeader=({icon,text})=>{
   this.props.add(text)
    this.setState({
       icon
    })
  }
  
  render () {
  
    const {icon} = this.state;
  
    const headerUI = icon ? <div>请选择头像<img src={icon}/></div> : '请选择头像';
    
      const data = Array.from(new Array(20)).map((item, index) => ({
        //通过require将图片资源动态加载进来
        icon: require(`./avatars/头像${index + 1}.png`),
        text: `头像${index + 1}`,
      }));
    
    
    return (
      <List renderHeader={() => headerUI} >
        <Grid data={data} columnNum={5} onClick={this.setHeader}/>
      </List>
    )
  }
}

export default  HeaderSelector;