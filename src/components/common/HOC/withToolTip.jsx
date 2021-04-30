
import React from "react"


 function withToolTip(Component){
  return class WithToolTip extends React.Component{
        state = {showToolTip:false}
        handleMouseOver=()=>{
            this.setState({showToolTip:true})
        }
        handleMouseDown=()=>{
            this.setState({showToolTip:false})
        }
          render(){
              return (
                  <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseDown}>
                     <Component {...this.props} showToolTip={this.state.showToolTip}/>
                  </div>
                  
                  )
          }
  }
}

export default withToolTip;