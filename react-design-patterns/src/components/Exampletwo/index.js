import React, { Fragment, Component, useEffect, useRef, useState } from 'react';
import './style.scss';


const FormElement = ({ fname }) => {
  return <div>
    <h1>Hello, {fname}</h1>
    <input type="text" placeholder="Wrapped input field" width="250px"/>
  </div>
}

const ExpandedForm = (form_) => {
  return ({ fname, ...props }) => {
    return (
      <div>
        {/* function hook to the base component */}
        {form_({ fname, ...props })}

        {/* New behaviour */}
        <p>This text shows the wrapped component's props are passed to the HOC component: {fname}</p>
        <input type="radio" id="on" name="switch"/>
        <label for="on">On</label>
        <input type="radio" id="off" name="switch"/>
        <label for="off">Off</label>
      </div>
    )
  }
}

const ExpandedForm2 = (form_) => {
  return ({ fname }) => {
    return (
      <div>
        {/* function hook to the base component */}
        {form_({ fname })}

        {/* New behaviour */}
        <p>Again, the HOC component receives the wrapped component's props: {fname}</p>
        <input type="number" id="quantity" name="quantity" min="1" max="5" />
      </div>
    )
  }
}

const DecoratedForm = ExpandedForm(FormElement)
const DecoratedForm2 = ExpandedForm2(FormElement)
const DecoratedForm3 = ExpandedForm(ExpandedForm2(FormElement))

const Exampletwo = () => {
  return (
    <div>
      <FormElement fname={"John"} />
      <div>&nbsp;</div>
      <hr />
      <DecoratedForm fname={"Dave"}/>
      <div>&nbsp;</div>
      <hr />
      <DecoratedForm2 fname={"Bob"}/>
      <div>&nbsp;</div>
      <hr />
      <DecoratedForm3 fname={"Jim"}/>
    </div>
    )
}

export default Exampletwo;
