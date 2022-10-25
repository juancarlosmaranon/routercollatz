import React, { Component } from 'react'

export default class Collatz extends Component {
  
  constructor(props){
    super(props);
    console.log("Numero props: "+props.numero);
  }

  
  
  render() {

    return (
        <div>
            <h1>Collatz</h1>
            <div>
                
            </div>
        </div>
    )
  }
}
