import React, {Component} from 'react';
import UserList from '../user-list'
class Dashen extends Component {
  componentDidMount(){
    this.props.GetUserList('laoban')
  }
  render () {
    const {userList}=this.props
    console.log(userList)
    return (
      <div>
        
        {
          userList.map((item, index) => <UserList key={index} item={item} />)
        }
      
      </div>
    
    
    )
  }
}

export default Dashen;