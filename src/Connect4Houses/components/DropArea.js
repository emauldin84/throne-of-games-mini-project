import React, { Component } from 'react'

const coinXpos = -100;
    let coinStyle = {left:coinXpos}

export default class DropArea extends Component {
    constructor(props) {
        super(props) ;
            this.state={
                style:{left:-500}
            }
        
    }
    


  render() {
    return (
      <div className="dropArea" data-droparea
                onMouseMove={(e) => {

                    
                    coinStyle ={left:this.state.xpos}
                    this.setState({
                        style:{left:e.screenX-e.nativeEvent.srcElement.offsetLeft}
                    })
                }}
                onClick={(e) => {
                    // console.log("on mouse over: ", e.screenX);
                    // console.log("native event", e.nativeEvent.srcElement.offsetLeft);
                    // console.log(e.nativeEvent.srcElement.scrollWidth);

                    // split the width into 7 rows.
                    const dropColumn = parseInt((e.screenX - e.nativeEvent.srcElement.offsetLeft) / (e.nativeEvent.srcElement.scrollWidth / 7)) + 1
                    // console.log("The column to drop in is " ,dropColumn);
                    this.props.getDropColumnFun(dropColumn);
                }}
                
                > 
                <div className="coinToDrop" style={this.state.style}>

                </div>
                </div>

    )
  }

}
