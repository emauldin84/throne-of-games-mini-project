import React, { Component } from 'react'

const coinXpos = -100;
    let coinStyle = {left:coinXpos}

export default class DropArea extends Component {

    


  render() {
    return (
      <div className="dropArea" data-droparea
                onMouseMove={(e) => {
                    console.log("on mouse over: ", e.screenX);
                    coinStyle ={left:e.screenX}
                }}
                
                > 
                <div className="coinToDrop" style={coinStyle}>

                </div>
                </div>

    )
  }
}
