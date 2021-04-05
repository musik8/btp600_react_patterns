import React, {Component, useEffect, useRef, useState} from 'react';
import {ButtonIconUI, ButtonNoIconUI} from '../BridgeImp/ButtonIMP.js'
import {Link, Button} from '../BridgeAbs/ButtonABS.js'

import {useInput} from './useInput.js'
import './style.scss'



export const Userblock = ({
  mediator,
  id,
  icon
}) => {
  const [ message, setMessage ] = useState([])
  const [ list, setList ] = useState([])

  const {value: msgValue, bind: msgBind, reset: msgReset} = useInput('');
  const {value: sendValue, bind: sendBind, reset: sendReset} = useInput('');

  let btnUI = ButtonIconUI;

  if(icon === false)
  btnUI = ButtonNoIconUI;

  useEffect(() => {

    const handle = {
        inbox: (msg) => setMessage(arr => [...arr, msg]),
        contacts: (list) => setList(list),
   }

   mediator.register(handle)

  }, [ mediator ])


  const sendContactMessage = (e) => {
    console.log(e);
    e.preventDefault();
    mediator.sendMessage(id, msgValue, sendValue);
  }


  return (
  <div className="user-box">

    <div className="left-block">
      <h1>User: {id}</h1>

      <h3>Enter Contact Number </h3>
      <input
        name="content"
        {...sendBind}
      />

      <h3>Enter Message</h3>
      <input
        name="content"
        {...msgBind}
      />

      <Button
         UIdisplay={btnUI}
         classDisplay={"regular"}
         method={sendContactMessage}
       >
          Send
       </Button>
     </div>
     <div className="right-block">


     <div className="contact-list">
             <h3>Contact List</h3>
        <div className="list">
         {list.map((item) => {
           if(item !== id) {
             return <h3> {item} </h3>
           }
         })}
        </div>

     </div>


       <div className="message-area">
         <h3>Message</h3>
         {message.map((msg) => {
          return(<p>{msg}</p>)
         })}

       </div>
     </div>

   </div>);
}
