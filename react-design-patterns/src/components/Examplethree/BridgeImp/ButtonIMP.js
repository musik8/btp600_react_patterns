import React, {Component, useEffect, useRef, useState} from 'react';

import './style.scss'


export const ButtonIconUI = ({

  classDisplay,
  children,
  ...props

}) => {
  return (

    <button
      {...props}
      className={` ${classDisplay} reg-btn sub-btn`}
    >

        <div className="reg-text">
            {children}
        </div>

        <div className="reg-icon">
        <div className="svg-plus">
          <svg  data-name="bar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
              <title></title>
              <polygon  points="25 11.43 13.57 11.43 13.57 0 11.43 0 11.43 11.43 0 11.43 0 13.57 11.43 13.57 11.43 25 13.57 25 13.57 13.57 25 13.57 25 11.43"/></svg>
          </div>
        </div>

    </button>
  )
}

export const ButtonNoIconUI = ({

  classDisplay,
  children,
  ...props

}) => {
  return (

    <button
      {...props}
      className={` ${classDisplay} reg-btn sub-btn`}
    >
        <div className="reg-text">
            {children}
        </div>
    </button>
  )
}
