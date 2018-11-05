
import React from 'react'
import {Card, WingBlank, WhiteSpace} from 'antd-mobile'

const Header = Card.Header
const Body = Card.Body

class UserList extends React.Component {
  
  render() {
    
    const {username,header='头像1',post,info,salary,company}=this.props.item
   
    return (
      <WingBlank>
        <div>
          <WhiteSpace/>
          <Card>
            <Header
              thumb={require(`../../assets/avatars/${header}.png`)}
              extra={username}
            />
            <Body>
            
            <div>职位:{post}</div>
            
            {company?<div>公司: {company}</div>:''}
            
            {salary? <div>月薪: {salary}</div>:''}
            
            <div>描述:{info}</div>
            </Body>
          </Card>
        </div>
      </WingBlank>
    )
  }
}

export default UserList