import React, {Component} from 'react';
import {TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom';


const Item = TabBar.Item;
class Footer extends Component {
  
  
  render () {
    const {pathname}=this.props.location;

    const navList = this.props.navlist.filter(nav => !nav.hiden);
    console.log(navList)
    return (
      <TabBar>
        {navList.map((item,index)=><Item
        key={index}
        title={item.text}
        icon={{uri: require(`./images/${item.icon}.png`)}}
        selectedIcon={{uri: require(`./images/${item.icon}-selected.png`)}}
        selected={pathname === item.path}
        onPress={() => this.props.history.replace(item.path)}
        />)}
      </TabBar>
    )
  }
}

export default withRouter(Footer) ;