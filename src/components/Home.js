import React, { useState } from 'react'

function Home() {

    const [score,setScore]=useState();
    const [number,setNumber]=useState();
    const [randNumber,setRandNumber]=useState();
    const guessNumber=()=>{
        
let score1=0;
        let generateNumber=Math.floor(Math.random()*10);
        setRandNumber(generateNumber)
        //console.log(generateNumber);
        if(number===generateNumber){

           score1=score1+1;
        }
        setScore(score1)
        
    }

   
  return (
    <div className='container'>
        <div>Random number generate is {randNumber}</div>
        <div>
        <input type="number" placeholder="Enter number to guess"  value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
        
        <button className='btn btn-primary' onClick={guessNumber}>Guess the number</button>
        </div>

        <div>Your score is {score}</div>
        
    </div>
  )
}

export default Home