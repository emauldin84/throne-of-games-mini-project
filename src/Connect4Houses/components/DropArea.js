import React, { Component } from 'react'

const coinXpos = -100;
    // let coinStyle = {left:coinXpos}

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
                    console.log("on mouse over: ", e.clientX);

                    
                    let coinStyle ={left:this.state.xpos}
                    this.setState({
                        style:{left: e.clientX - e.nativeEvent.srcElement.offsetLeft}
                    })
                }}
                onClick={(e) => {
                    console.log("on mouse over: ", e.clientX);
                    console.log(e.nativeEvent);
                    console.log("native event", e.nativeEvent.srcElement.offsetLeft);
                    console.log("scroll width is ", e.nativeEvent.srcElement.scrollWidth);

                    // split the width into 7 rows.
                    const dropColumn = parseInt((e.clientX - e.nativeEvent.srcElement.offsetLeft) / (e.nativeEvent.srcElement.scrollWidth / 7)) + 1
                    console.log("The column to drop in is " ,dropColumn);
                    this.props.getDropColumnFun(dropColumn);
                }}
                
                > 
                <div >
                <img className="coinToDrop" style={this.state.style} 
                src= {this.props.player ? "./imgs/fire-ball.png" : "./imgs/ice-ball.png" } alt="player token image" />
                </div>
                </div>

    )
  }

}
