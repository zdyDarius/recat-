/**
 * Created by zdy on 2018/11/1.
 */
import React, {Component} from 'react';
import logo from './logo.png'
import './css.less'
class Logo extends Component {
  
  render () {
    
    return (
      <div className="M">
        <img className="MG"  src={logo} alt=""/>
      </div>
    )
  }
}

export default Logo;