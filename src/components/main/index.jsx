/**
 * Created by zdy on 2018/11/1.
 */
import React, {Component} from 'react';

import {Route,Switch,Redirect} from 'react-router-dom'

import {NavBar} from 'antd-mobile'

import Cookies from  'js-cookie'

import './index.less'

import Dasheninfo from '../../containers/dashen-info'

import Laobaninfo from '../../containers/laoban-info'

import Laoban from '../../containers/laoban'

import Dashen from '../../containers/dashen'


import Xiaoxi from '../../containers/xinxi'

import Personal from '../../containers/geren'

import  Footer from '../nav-footer'

import {getRedirectPath} from'../../utils/'


class Main extends Component {
  
  navList = [
    {
      path: '/laoban', // 路由路径
      component: Laoban,
      title: '大神列表',
      icon: 'dashen',
      text: '大神',
      hiden:true
    },
    {
      path: '/dashen', // 路由路径
      component: Dashen,
      title: '老板列表',
      icon: 'laoban',
      text: '老板',
    },
    {
      path: '/message', // 路由路径
      component:Xiaoxi,
      title: '消息列表',
      icon: 'message',
      text: '消息',
    },
    {
      path: '/personal', // 路由路径
      component: Personal,
      title: '用户中心',
      icon: 'personal',
      text: '个人',
    }
  ]
  

  
  
  render () {
  
    const userid = Cookies.get('userid')

    if(!userid){

      return <Redirect to="/login"/>

    }
   const {user} = this.props
    if(!user._id){
      this.props.getUserInfo()
      return <div>loding...</div>
    }
    const {pathname}=this.props.location
    
    if(pathname==='/'){
      return <Redirect to={getRedirectPath(user.type,user.header)}/>
    }
    const {navList} = this;
    if(user.type==='dashen'){
      navList[0].hiden=true;
  
      navList[1].hiden=false;
    }else {
      
      navList[1].hiden=true;
  
      navList[0].hiden=false;
    }
   
    
    const currentNav=navList.find(nav=>nav.path===pathname)
    return (
      <div>
        {currentNav?<NavBar>{currentNav.title} </NavBar>:''}
        <Switch>
    
          <Route path="/laobanInfo" component={Laobaninfo}/>
    
          <Route path="/dashenInfo" component={Dasheninfo}/>
    
          <Route path="/laoban" component={Laoban}/>
    
          <Route path="/Dashen" component={Dashen}/>
    
          <Route path="/message" component={Xiaoxi}/>
    
          <Route path="/personal" component={Personal}/>
  
  
        </Switch>
        {currentNav?<Footer navlist={navList}/>:''}
       
      
      

      </div>
    
    )
  }
}



export default Main;