import React, {Component, useEffect, useRef, useState} from 'react';

import './style.scss';


const Examplethree = () => {

  const [display, setDisplay] = useState([]);

  const addContent = (e) => {
      e.preventDefault();
      console.log("added");

  }



  return(<div>

    <div className="display-content">

    </div>


      <div className="dashboard">
          <button onClick={e => addContent(e)}>
            Add Button
          </button>

      </div>


    </div>)
}

export default Examplethree;
