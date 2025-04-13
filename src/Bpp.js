import {useState} from 'react';
function Square({value, onSquareclick}) {
    return(    <button classname='square' onclick={onSquareclick}>
        {value}
    </button>)
}
export default function board() {
    const [square,setSquares] = useState(Array(9).fill(null))
    const [isNextX,setisNextX] = useState(true)
    function handleClick(i) {
        if(isNextX){
            setSquares[i]('X')
        }else{
            setSquares[i]('Y')
        }
        setisNextX(!isNextX)
    }
    return(
    <div>
        <div>
            <Square value={square[1]} onSquareclick = {() => {handleClick(1)}} /> 
            <Square value={square[2]} onSquareclick = {() => {handleClick(2)}} />
            <Square value={square[3]} onSquareclick = {() => {handleClick(3)}} />
        </div>
        <div>
            <Square value={square[4]} onSquareclick = {() => {handleClick(4)}} />
            <Square value={square[5]} onSquareclick = {() => {handleClick(5)}} />
            <Square value={square[6]} onSquareclick = {() => {handleClick(6)}} />
        </div>
        <div>
            <Square value={square[7]} onSquareclick = {() => {handleClick(7)}} />
            <Square value={square[8]} onSquareclick = {() => {handleClick(8)}} />
            <Square value={square[9]} onSquareclick = {() => {handleClick(9)}} />
        </div>
    </div>        
    )
    
}