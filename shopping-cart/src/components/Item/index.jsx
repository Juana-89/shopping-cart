import React from 'react'

export const Item = (props) => {
    const { item } = props;
  return (
    <div>
        <img src={item.image} alt={item.name}/>
        <h2>{item.name}</h2>
        <span>{item.price}</span>
    </div>
  )
}
