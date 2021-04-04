import React, {Component, useEffect, useRef, useState} from 'react';

import './style.scss';


const ButtonUI = ({
  theme,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color,
      }}
    />
  )
}

const Link = ({
  url,
  uiComponent,
  uiProps,
  children,
}) => {
  const bridgeProps = {
    ...uiProps,
    onClick: () => window.open(url, '_blank')
  }

  return React.createElement(uiComponent, bridgeProps, children)
}

const Client = () => {
  const theme = { backgroundColor: 'blue', color: 'white' }
  return (

    <Link
      url="http://github.com/themithy/react-design-patterns"
      uiComponent={ButtonUI}
      uiProps={{ theme }}
    >
      See other patterns
    </Link>
  )
}

















const Examplethree = () => {

  const [display, setDisplay] = useState([]);

  const addContent = (e) => {
      e.preventDefault();
      console.log("added");




  }



  return(<div>

    <div className="display-content">

    </div>


      <div className="client-menu">
          <button onClick={e => addContent(e)}>
            Add Button
          </button>

      </div>


    </div>)
}

export default Examplethree;
