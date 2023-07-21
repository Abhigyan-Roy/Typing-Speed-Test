import React, {useState,useEffect} from 'react';
import socket from '../socketConfig';

const CountDown = props =>{
    const [timer,setTimer] = useState({countDown : "",msg : ""});
    useEffect(()=>{
        socket.on('timer',(data)=>{
            setTimer(data);
        });
        socket.on('done',()=>{
            socket.removeListener('timer');
        });
    },[]);
    const {countDown,msg} = timer;
    return(
        <>
            <h3>{msg}</h3>
            <h1 className='text-2xl'>{countDown}</h1>
        </>
    )
}

export default CountDown;