
import React, { useEffect, useRef } from 'react'
import MemoComp from './common/memoComponent';
import InputComponent from './common/reuseableInputField';



// class Practise extends React.Component {
//     constructor(props) {
//         super(props);
//         this.inputRef = React.createRef();
//         this.state = { 
//             name:"Sadia"
//          }
//     }
//      handleFoucs =()=>{
//         this.inputRef.current.focus();
//     }
//     componentDidMount(){
//         setInterval(() => {
//           this.setState({
//               name:"Sadia"
//           })   
//         }, 2000);
//     }
//     render() { 
//         console.log("Ami baba Component")
//         return ( 
            
//             <div>
//             {/* <InputComponent ref={this.inputRef}/>
//             <button onClick={this.handleFoucs}>Click Me</button> */}
//             <MemoComp name={this.state.name}/>
//             </div>
//          );
//     }
// }
 function Practise() {
    const inputRef = React.createRef();
    useEffect(()=>{
       
    })
    const handleAlert=()=>{
        alert(inputRef.current.value)
    }
    return (
        <div>
            <InputComponent ref={inputRef}/>
            <input ref={inputRef}/>
            <button onClick={handleAlert}>Click Me</button>
        </div>
    )
}



export default Practise
