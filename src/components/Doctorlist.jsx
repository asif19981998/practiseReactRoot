import React, { useState,useEffect } from 'react'
import Pagination from "./Pagination"
import { paginate } from './../utils/paginate';



function Doctorlist() {
    const [test,setText]=useState([1,2,3,4,5,67,8,9])
    const [doctorList,setDoctorList] = useState(["Asif","Tamim","Musfiq","Javed","Mosaraf","Jabbar","Salman","Morafat","Gamilei"])
    const [currentPage,setCurrentPage]=useState(1)
    const [size,setSize]=useState(4)
    const [doctors,setDoctors]=useState([])
    const [totalCount,setTotalCount]=useState(doctorList.length);
    const handlePageChange=(page)=>{
        
        setCurrentPage(page);
       
    }
    const getPageData=()=>{
        console.log("getPagecalled")
        const data = paginate(doctorList,currentPage,size)
       
        // setTotalCount(doctors.length)
        setDoctors(data)
    }
    useEffect(() => {
        getPageData()
         
    },[currentPage])
    return (
        
        <>
            
           
            {doctors.map(e=>(
            <div key={e}>{e}</div>
          
          
           
            ))} 
           
       
        <Pagination
        itemsCount={totalCount}
        pageSize={size}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
       
       />
       
        </>
    )
}

export default Doctorlist
