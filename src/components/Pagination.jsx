import React from 'react'
import _ from "lodash";
function Pagination(props) {
    const {pageSize,itemsCount,handlePageChange,currentPage} = props

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount == 1) return null;
    const pages = _.range(1,pagesCount+1)
    return ( 
        <nav>
            <ul className="pagination">
                {pages.map(page=>(
                <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
                     <a  className="page-link" onClick={()=>handlePageChange(page)}>{page}</a>
                 </li>
                ))}
               
            </ul>
        </nav>    
     );
}

export default Pagination
