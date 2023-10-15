import React from 'react'
import { useState, useEffect } from 'react';

const Filter = ({ name, setFilter, index }) => {

  const [ clickedID, setClickedID ] = useState(0);

  const handleFilterClick = (name, index) => {
    setClickedID(index);
    setFilter(name);
  }

  return (
    <button className={ `filter ${ index === clickedID ? 'active' : '' }` } onClick={() => handleFilterClick(name, index) }>{ name }</button>
  )
}

export default Filter