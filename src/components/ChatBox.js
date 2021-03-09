import React from 'react'
import ChatDisplay from './ChatDisplay/ChatDisplay'
import UserDisplay from './UserDisplay/UserDisplay'
import Header from './utils/Header'
import Footer from './utils/Footer'
import { SocketContext , socket }  from '../components/config/socket'

function ChatBox() {
    return (
        <div>
        <SocketContext.Provider value={socket}>
            <Header></Header>
            <ChatDisplay></ChatDisplay>
            <UserDisplay></UserDisplay>
            <Footer></Footer>
            
        </SocketContext.Provider>
           
        </div>
    )
};

export default ChatBox;
