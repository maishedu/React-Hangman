import React from 'react';

function HangmanWord({word,guessed,reveal}) {
    return (
        <div style={{
            display:"flex",
            gap:".25em",
            fontWeight:"bold",
            fontSize:"6rem",
            fontFamily:"monospace",
            textTransform:"uppercase",

        }}>
            {word.split("").map((letter,index)=>{
                return(
                    <span style={{borderBottom:".1em solid black"}} key={index}>
                        <span style={{visibility:
                                guessed.includes(letter)||reveal?"visible":"hidden",
                        color:!guessed.includes(letter) && reveal ? "red" : "black"
                        }}>
                        {letter}
                            </span>
                    </span>
                )
            })}

        </div>
    );
}

export default HangmanWord;