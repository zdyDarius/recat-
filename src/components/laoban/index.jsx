import React, {Component} from 'react';
import UserList from '../user-list'
class Laoban extends Component {
  componentDidMount(){
    this.props.GetUserList('dashen')
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

export default Laoban;