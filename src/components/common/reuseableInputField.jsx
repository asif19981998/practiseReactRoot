


// const ReuseAbleInput=React.forwardRef((props,ref)=>{
//     <Input ref={ref} >
//     {props.children}
//     </Input>
// })

import React from 'react'





const InputComponent=React.forwardRef((props,ref)=>{
      return(
        <input ref={ref}/>
      )
})

export default InputComponent









