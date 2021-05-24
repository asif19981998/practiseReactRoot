import React, { Component,useReducer } from 'react';
import Hero from './components/common/hero';
import Movies from './components/movies'
import Practise from './components/practise';
import ErrorBoundary from './components/common/ErrorBoundary';
import Movie from './components/common/HOC/Movie';
import OwlCarouselCmp from './components/OwlCarousel';
import ElasticClousera from './components/React-Elastic-Clousera';
import CoverImage from './components/CoverImage';
import Navbar from './components/navbar';
import DoctorDetials from './components/DoctorCard';
import CreateDoctor from './components/CreateDoctor';
import DoctorModal from './components/Modal';
import DragAndDrop from './components/DragAndDrop';
import Doctorlist from './components/Doctorlist';

class App extends Component {
  state = { 
   
   }
   constructor(props){
     super(props)
    this.inputRef=React.createRef();
   }
   componentDidMount(){
    
   }
  
  render() { 
    



    return ( 
      <main >
         {/* <Movies/>
         <Practise/> */}
         {/* <ErrorBoundary>
         <Hero name="Asif"/>
         </ErrorBoundary>
         <ErrorBoundary>
         <Hero name ="Sakib"/>
         </ErrorBoundary> */}
        {/* <ErrorBoundary>
        <Hero name="Joker"/>
          </ErrorBoundary>    */}
        {/* <Movie id="1"></Movie>
        <OwlCarouselCmp/>
        <ElasticClousera/> 
         <Navbar/>
        <CoverImage/>
        <div className="container">
          <DoctorDetials/> 
          <DoctorDetials/> 
          <DoctorDetials/> 
        </div> */}
        
         {/* <CreateDoctor/> */}
         {/* <DoctorModal/> */}
       <DragAndDrop/>
      <Doctorlist/>

      </main>
     );
  }
}
 
export default App;
