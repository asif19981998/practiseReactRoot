import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../../src/components/OwlCarousel.css"
function OwlCarouselCmp() {
    return (
       <div className="sponser-area">
          <OwlCarousel items={5}  
          className="owl-theme"  
          loop ={false} 
          nav
        //   navText={['next','prev']}
          navClass
          margin={8}
          autoplay ={true}
          
          navText={ ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']}
         
         
        > 
         
        <div ><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
           <div ><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
           <div ><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
           <div><img  className="img" src= {'assets/img/img-1.jpg'}/></div>  
          
      </OwlCarousel>  
          
       </div>
    )
}

export default OwlCarouselCmp
