import React, { Component } from "react";
import "./Lifecycle.css"


class LifecycleB extends Component{

  constructor(props){
      console.log("LifecycleB constructor")
      super(props)
      this.state={
        name: "ACHU"
      }
  }

  static getDerivedStateFromProps(preProps,preState){
      console.log("LifecycleB getDerivedStateFormProps")
      return null
  }

  componentDidMount(){
      console.log("LifecycleB componentDidMount")
  }

  shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
  }

  componentDidUpdate(preProps,preState){
         console.log("LifecycleB componentDidUpdate")
  }

  changeState=()=>{
      this.setState({
          name : "AJITH"
      })
  }


  render(){
      console.log("LifecycleB render")
      return(
          <div>
              <h2> Message :{this.state.name}</h2>
              <button className="update-btn" onClick={this.changeState}>Update</button>
              
          </div>
      )
  }
}
export default LifecycleB;