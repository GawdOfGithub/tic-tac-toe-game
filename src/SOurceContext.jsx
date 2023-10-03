import { createContext,useContext,useState} from "react";

const MainContext = createContext(null)

export default function SOurceContext({children})
{
    const [arr,setArr] = useState(Array(9).fill(''))
    const [x,setX] = useState([])
    const [o,setO] = useState([])
    const [turn,setTurn] = useState(true)
    const [count,setCount] = useState("")
    const [winner,setWinner] = useState()
    const [gameOver,setgameOver] = useState(false)
    return(
        <MainContext.Provider value={{arr,setArr,turn,setTurn,count,setCount,x,setX,o,setO,winner,setWinner,gameOver,setgameOver}}>
        {children}
        </MainContext.Provider>
        )
}

export {MainContext}