import React, {Component, useEffect, useRef, useState} from 'react';


export const Link = ({
  url,
  UIdisplay,
  classDisplay,
  method,
  children,
}) => {
  const bridgeProps = {
    classDisplay,
    children,
    onClick: () => window.open(url, '_blank')
  }
  return(<UIdisplay {...bridgeProps} />)

}

export const Button = ({
  UIdisplay,
  classDisplay,
  method,
  children,
  param
}) => {
  const bridgeProps = {
    classDisplay,
    children,
    onClick: (e) => method(e, param)
  }
  return(<UIdisplay {...bridgeProps} />)
}
