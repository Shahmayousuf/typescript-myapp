import { type } from 'os'
import React from 'react'
 type personProps={
    name:{
        first:string
        last:string
    }
 }
const person = (props:personProps) => {
  return (
    <div>
      {props.name.first}{props.name.last}
    </div>
  )
}

export default person
