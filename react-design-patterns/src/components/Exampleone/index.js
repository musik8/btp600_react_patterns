import React, {Component, useEffect, useRef, useState} from 'react';
import {useInput} from './useInput.js';

import './style.scss';

var savedState = []

const createMemento = (e, userIn) => {
  savedState.push(userIn)
  alert("Creating Memento with state: " + savedState[savedState.length - 1])
  e.preventDefault()
}

const restoreMemento = (e) => {
  alert("Restoring from Memento: " + savedState[savedState.length - 1])
  e.preventDefault()
}

const Exampleone = () => {

  const { value:userIn, bind:bindUserIn, reset:resetUserIn } = useInput('')

  return(<div>

    <div>
      <h1>Memento Example:</h1>
      &nbsp;
    </div>
    
    <form>
      <label>
        Enter Text Here:&nbsp;
        <textarea type="text" name="userIn" {...bindUserIn} required/>
      </label>
      &nbsp;
      <button className="btn" onClick={e => createMemento(e, userIn)}>
        Create Memento
      </button>
      &nbsp;
      <button className="btn" onClick={e => {restoreMemento(e); resetUserIn(savedState.pop());}}>
        Restore Memento
      </button>
    </form>

    </div>)
}

export default Exampleone;
