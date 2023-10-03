// App.js
import React from 'react';
import Grid from './Grid';
import { useContext } from 'react';
import { MainContext } from './SOurceContext';
export default function App() {
  const {count,x,o,winner,gameOver} = useContext(MainContext)
  return (
    
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
       
        <div>
         {!gameOver &&<Grid/>}
        </div>
        {winner=="O"&& (<div className='text-red-950 font-bold text-3xl mt-10'>Player playing with O wins</div>)}
         
          {count==9 && (<div className='text-red-950 font-bold text-3xl mt-10'>The game is a draw</div>)}
        
        {winner=="X" && (<div className='text-red-950 font-bold text-3xl mt-10'>Player playing with X wins </div>)}
      </div>
    
  );
}

