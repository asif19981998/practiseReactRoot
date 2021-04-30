import React from 'react'

function Hero({name}) {
    if (name=="Joker"){
        throw new Error("Not a Hero")
    }
    return (
        <div>
           <div>{name}</div> 
        </div>
    )
}

export default Hero
