import React, { useContext } from 'react';
import { MainContext } from './SOurceContext';

export default function Grid() {
  const {
    count, setCount, turn, setTurn, arr, setArr, x, setX, o, setO, winner, setWinner,gameOver,setgameOver
  } = useContext(MainContext);
  const WinCombo = [[1,2,3], [3,4,5],[6,7,8],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

  function handleClick(index) {
    setCount(count + 1);
    setTurn(!turn);

    const newArr = [...arr];
    newArr[index] = turn ? '0' : 'X';
    setArr(newArr); // Use setArr to update the 'arr' state variable

    if (turn) {
      setO([...o, index + 1]);
    } else {
      setX([...x, index + 1]);
    }

    for (const combo of WinCombo) {
      const [a, b, c] = combo;
      if (x.includes(a) && x.includes(b) && x.includes(c)) {
        setWinner("X");
        setgameOver(true)
      }
      if (o.includes(a) && o.includes(b) && o.includes(c)) {
        setWinner("O");
        setgameOver(true)
      }
    }
  }

  return (
    (!gameOver) ?
    (<div className="grid grid-cols-3 gap-0 font-bold text-7xl">
      {arr.map((item, index) => (
        <button className='border-4 p-10 border-slate-400 hover:border-black' key={index} onClick={() => handleClick(index)}>
          {item}
        </button>
      ))}
    </div>) :null
      
  );
}
