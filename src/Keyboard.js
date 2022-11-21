import React from 'react';
import Keys from './keys.json';
import styles from './Keyboard.module.css';

function Keyboard({incorrectletters,correctletters,addguessedletter,disable}) {
    return (
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(75px,1fr))",
            gap:".5rem"
        }}>
            {Keys.map((key,index)=>{
                let active = correctletters.includes(key);
                let inactive = incorrectletters.includes(key);
               return (<button
                   onClick={()=>addguessedletter(key)}
                   className={`${styles.btn} ${active?styles.active:''} ${inactive?styles.inactive:''}`  }
                   key={index}
                   disabled = {active || inactive || disable}>
                   {key}</button>);
            })}

        </div>
    );
}

export default Keyboard;