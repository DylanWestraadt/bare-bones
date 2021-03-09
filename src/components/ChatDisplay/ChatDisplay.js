import React from 'react'
import Screen from '../utils/Screen'
import UserInput from '../utils/UserInput'


function ChatDisplay() {
    return (
        <div>
            <Screen></Screen>
            <UserInput username='john'></UserInput>
        </div>
    )
}

export default ChatDisplay
