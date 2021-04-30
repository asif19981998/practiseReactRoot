import React from 'react';

const Listgroup = (props) => {
    const {items,textProperty,valueProperty,selectedGenre}=props;
    return ( 
        <ul className="list-group">
            {items.map(item=>(
                <li
                  key={item[textProperty]}
                  className={item === selectedGenre ? "list-group-item active":"list-group-item"} 
                  onClick={()=>props.onItemSelected(item)}>
                     {item[valueProperty]}
                     
                </li>
            ))}
            
        </ul>
     );
}

Listgroup.defaultProps={
    textProperty:"_id",
    valueProperty:"name"
}
 
export default Listgroup;