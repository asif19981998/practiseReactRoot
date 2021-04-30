import React,{style} from 'react'

import Carousel,{ consts }   from 'react-elastic-carousel';
import "../../src/components/React-Elastic-Clousera.css";
function ElasticClousera() {
    
//   const myArrow=({type, onClick, isEdge })=>{
//         const pointer = type === consts.PREV ? '<i class="fa fa-angle-left" aria-hidden="true"></i>' : '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//         return (
//           <button onClick={onClick} disabled={isEdge}>
//             {pointer}
//           </button>
//         )
//     }
    return (
        <div>
           <Carousel itemsToShow={4} >
                <Item >1</Item>
                <Item >2</Item>
                <Item>3</Item>
                <Item>4</Item>
                <Item>5</Item>
                <Item>6</Item>
                <Item>7</Item>
                <Item>8</Item>
                <Item>9</Item>
        </Carousel> 
        </div>
    )
}

function Item(){
    return(
        <div style={{height:"70px",width:"180px"}}><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
    )
}

export default ElasticClousera
