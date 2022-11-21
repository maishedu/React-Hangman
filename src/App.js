import React,{useState,useEffect,useCallback} from "react";
import randomword from './wordList.json';
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";


function App() {

    const [word,setWord]= useState(randomword[(Math.floor(Math.random()*randomword.length))]);
    // const [word,setWord]= useState("preact");
    const [guessed,setGuessed]= useState([]);

    useEffect(()=>{
        const handler = (e)=>{
            const key = e.key;
            if(!key.match(/^[a-z]$/))return
            e.preventDefault();
            addguessedletter(key);
        }
        document.addEventListener("keypress", handler);
        return ()=>{
            document.removeEventListener("keypress", handler);
        }

    },[guessed]);
    const addguessedletter = useCallback((letter)=>{
        if(guessed.includes(letter)|| Win || Lose)return;
        setGuessed([...guessed,letter]);
        console.log(guessed);
    },[guessed]);
    const incorrectletters =  guessed.filter(letter=>!word.includes(letter));
    const Lose = incorrectletters.length >=6;
    const Win = word.split("").every(letter=>guessed.includes(letter));

    return (
    <div style={{
        maxWidth:"900px",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        margin:"0,auto",
        gap:"2rem"
    }}>
      <div style={{
          fontSize:"40px",
          textAlign:"center"
      }}>
          {Lose && "You Loose Refresh Page & Try Again"}
          {Win && "Congratulations you won"}
      </div>
        <HangmanDrawing incorrectguesses={incorrectletters.length}/>
        <HangmanWord word={word} guessed={guessed} reveal={Lose}/>
        <div style={{alignSelf:"stretch"}}>
            <Keyboard
                disable={Win || Lose}
                correctletters={guessed.filter(letter=>word.includes(letter))}
                incorrectletters={incorrectletters}
                addguessedletter={addguessedletter}
            />
        </div>

    </div>
  );
}

export default App;
