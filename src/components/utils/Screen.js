import React , { useState, useEffect, useContext }from 'react'
import Message from './Message'
import {SocketContext} from '../config/socket'

function Screen() {
    const socket = useContext(SocketContext)
    
   const db =(err ,data)=>{
    console.log(data);
    if(data === undefined){
        console.log('Sorry..Undefinded')
    }
    
    if(err){
        return err
    }
   }
    useEffect(()=>{
        socket.on('listen',({time, username , message})=>{
            const chat =[{
                id:time,
                username:username,
                message:message,
            }]
            setState(chat)
           
            
        })
    },[socket])
    const [state , setState] = useState([{
        id:'1',
        username:'john ',
        message:'sup'
      },{
          id:'2',
          username:'steve',
          message:'hi boss'
      }])
    

    return (
        <div className="messages">
    
            
         
         
   
           
           {state.map((state, i)=> <div key={i}> 
            
        </div>
    )
}

export default Screen
