import React from 'react'
import UserContext from './UserContext'

export default function GrandChild() {
  const user = UserContext(UserContext);
  console.log('결과: ', user);
  return (
    <>
      GrandChild
      {/* <h4>여기까지 전달받은 user값: {user}</h4> */}
    </>
  )
}
