import React, {Component, useEffect, useRef, useState} from 'react';



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
