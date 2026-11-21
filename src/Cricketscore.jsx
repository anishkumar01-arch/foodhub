import React, { useState } from 'react'

function Crickerscore() {
   let [score,setScore] = useState(0);
   
   let oneLogics = () =>{
        setScore(score + 1);
   }

   let twoLogics = () =>{
    setScore(score + 2);
   }

  return (
    <>
        <h1>Cricket Score Apps</h1>      
        <h2>Your score: {score}</h2>
        <button onClick={oneLogics}>+1</button>
        <button onClick={twoLogics}>+2</button>
    </>
  )
}
export default Crickerscore;