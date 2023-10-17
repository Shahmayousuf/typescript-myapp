import React from 'react'
type greetProps={
  name:string
  count:number
  loggedIn:boolean
}

const Greet = (props:greetProps) => {
  return (
    <div>
      <h2>
        {props.loggedIn? `welcome ${props.name}!You have ${props.count} unread messages`:
        'welcome'
}</h2>
    </div>
  )
}

export default Greet
