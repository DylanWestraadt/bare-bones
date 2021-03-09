import socketio from 'socket.io-client';
import React from 'react'
import ENDPOINT from './config'

export const socket = socketio.connect(ENDPOINT);
export const SocketContext = React.createContext();