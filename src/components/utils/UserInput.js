//user input that gets pushed to socket 
import React, { useContext , useRef } from 'react'
import {SocketContext} from '../config/socket'
import PropTypes from 'prop-types';

function UserInput({username }) {
   
    const socket = useContext(SocketContext);
    const inputRef = useRef('');
    const sendMessage =(e)=>{
        e.preventDefault();
        const value = inputRef.current.value;
     
        
        socket.emit("sendMessage",username, value)
        
        
    }
   
    
    
    
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="input"
                    ref={inputRef}
                   
                    />

                <input 
                    type="submit"
                    value="Submit"
                    target="input"
                    onClick={sendMessage}/> 
            </form>
        </div>
    )
}

UserInput.propTypes = {
    username: PropTypes.string,

}
export default UserInput
