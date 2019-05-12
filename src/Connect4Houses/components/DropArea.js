import React, { Component } from 'react'

// const coinXpos = -100;
    // let coinStyle = {left:coinXpos}

export default class DropArea extends Component {
    constructor(props) {
        super(props) ;
            this.state={
                style:{left:-500}
            }
            this.dropAreaRef = React.createRef();

    }
    


  render() {
    return (
      <div className="dropArea" data-droparea
            ref={this.dropAreaRef}

                onMouseMove={(e) => {
                    // console.log("on mouse over: ", e.clientX);
                    // console.log("my new ref width", this.dropAreaRef.current.offsetWidth)
                    // console.log("better left is ", this.dropAreaRef.current.offsetLeft)
                    // let coinStyle ={left:this.state.xpos}

                    //this updates the icon position on screen
                    this.setState({
                        // style:{left: e.clientX - e.nativeEvent.srcElement.offsetLeft}
                        style:{left: e.clientX - this.dropAreaRef.current.offsetLeft}
                    })
                }}
                onClick={(e) => {

                    //this starts the game play...

                    //a ref to the element works SO MUCH BETTER.  otherwise, you
                    //could be clickin in the drop area, or on the icon and the widths got confused.

                    // console.log("on mouse over: ", e.clientX);
                    // console.log("e.natvieEvent", e.nativeEvent);
                    // console.log("native event", e.nativeEvent.srcElement.offsetLeft);
                    // console.log("scroll width is ", e.nativeEvent.srcElement.scrollWidth);

                    // split the width into 7 rows.
                    // const dropColumn = parseInt((e.clientX - e.nativeEvent.srcElement.offsetLeft) / (e.nativeEvent.srcElement.scrollWidth / 7)) + 1
                    const dropColumn = parseInt((e.clientX - this.dropAreaRef.current.offsetLeft) / (this.dropAreaRef.current.offsetWidth / 7)) + 1
                    // console.log("The column to drop in is " ,dropColumn);
                    //don't drop unless this a number between 1 and 7!!
                    if ([1,2,3,4,5,6,7].indexOf(dropColumn) !== -1) {

                        this.props.getDropColumnFun(dropColumn);
                    }
                }}
                
                > 
                <div >             
                      <p>CLICK TO DROP HERE</p>

                <img className="coinToDrop" style={this.state.style} 
                src= {this.props.player ? "./imgs/fire-ball.png" : "./imgs/ice-ball.png" } 
                alt={this.props.player ? "fire token" : "ice token" } />
                </div>
                </div>

    )
  }

}
