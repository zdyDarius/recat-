import React, {Component} from 'react';
import logo from './logo.png'
import './logo.less'
class Logo extends Component {
  render () {
    return (
         <div className="img-cotent">
           <img src={logo} alt="" className="logo"/>
         </div>
    )
  }
}

export default Logo;