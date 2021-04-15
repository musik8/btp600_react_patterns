import React, {Component, useEffect, useRef, useState} from 'react';
import {ButtonIconUI, ButtonNoIconUI} from './BridgeImp/ButtonIMP.js'
import {Link, Button} from './BridgeAbs/ButtonABS.js'

import {Userblock} from './Mediator/Userblock.js'
import {ComsMediator} from './Mediator/ComsMediator.js'


import './style.scss';

const mediator = new ComsMediator();

const Examplethree = () => {

  const [display, setDisplay] = useState([]);
  const [amount, setAmount] = useState(0);


  const addContent = (e, param) => {

      e.preventDefault();

      let item = <Userblock mediator={mediator} id={amount} icon={param}/>
      setAmount((amount) => amount + 1);

      setDisplay( arr => [...arr, item]);

  }

  return(<div>

    <div className="display-content">
      {display.map(item => {
        return item;
      })}
    </div>

      <div className="client-menu">

      <Button
         UIdisplay={ButtonNoIconUI}
         classDisplay={"regular"}
         method={addContent}
         param={false}
       >
           No Icon
       </Button>

       <Button
          UIdisplay={ButtonIconUI}
          classDisplay={"regular"}
          method={addContent}
          param={true}
        >
           With Icon
        </Button>

      </div>

    </div>)
}

export default Examplethree;
