import React, {useState} from 'react'
import PropTypes from 'prop-types'


function Message({chat}) {
  const [message, setMessage] = useState([]);
  console.log(chat)
  
  return (
    <div>
      <div>
        <h3>{chat.username}</h3><p>{chat.message}</p></div>
    </div>
  )
}
Message.propTypes={
  message:PropTypes.arrayOf(PropTypes.object)
}

export default Message

