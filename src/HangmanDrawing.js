import React from 'react';

const HEAD = (
  <div style={{
      width:"50px",
      height:"50px",
      borderRadius:"100%",
      border:"10px solid black",
      position:"absolute",
      top:"50px",
      right:"-30px"
  }}>

  </div>
);
const RIGHTARM = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:"-100px",
        rotate:"-30deg",
        transformOrigin:"left bottom"
    }}>

    </div>
);
const LEFTARM = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"100px",
        right:"-5px",
        rotate:"30deg",
        transformOrigin:"left bottom"
    }}>

    </div>
);
const RIGHTLEG = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"210px",
        right:"-90px",
        rotate:"30deg",
        transformOrigin:"left bottom"
    }}>

    </div>
);
const LEFTLEG = (
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"210px",
        right:"0px",
        rotate:"-30deg",
        transformOrigin:"right bottom"
    }}>

    </div>
);
const BODY = (
    <div style={{
        width:"10px",
        height:"100px",
        background:"black",
        position:"absolute",
        top:"120px",
        right:"0px",
    }}>

    </div>
);

const Person = [HEAD, BODY, RIGHTARM, LEFTARM,RIGHTLEG,LEFTLEG]

function HangmanDrawing({incorrectguesses}) {
    return (
        <div style={{position:"relative"}}>
            {Person.slice(0,incorrectguesses)}
            <div style={{
            height: "50px",
            width: "10px",
            background: "black",
            position:"absolute",
                top:"0",
                right:"0"
             }}/>
            <div style={{
                height: "10px",
                width: "200px",
                background: "black",
                marginLeft:"120px"
            }}/>
            <div style={{
                background:"black",
                height:"400px",
                width:"10px",
                marginLeft:"120px"
            }}></div>
            <div style={{
                height: "10px",
                width: "250px",
                background: "black"
            }}/>
        </div>

    );
}

export default HangmanDrawing;