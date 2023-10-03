import React from 'react'
import { useContext } from 'react'
import { MainContext } from './SOurceContext'

export default function WinLogic() {
    const {winner,setWinner} = useContext(MainContext)

   
    for(const combo of WinCombo)
    {
     const[a,b,c] = WinCombo
     if(winner[a] && winner[a]==arr[b] && winner[a]==arr[c])
     {
      return true 
     }

    return false 
  
}
}
