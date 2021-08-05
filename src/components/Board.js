import React,{useState,useEffect} from "react";
import CreateBoard from '../utils/CreateBoard';
function Board() {
    const [grid,setGrid]=useState([]);

    const style={
        display : 'flex',
        flexDirection : 'row',

    }
    useEffect(()=>{
        function freshBoard(){
            const newBoard=CreateBoard(10,10,20);
            setGrid(newBoard);
        }
        freshBoard();
    },[]);

    return (
        <div className="parent">
            {grid.map(singlerow=>{
                return (
                    <div style={style}>
                        {singlerow.map(singlecol=>{
                                return <div 
                                style={{ 
                                    width : 30,
                                    height : 30,  
                                    padding : '5px' ,
                                    border : '3px solid red'}}
                                    >
                                    {JSON.stringify(singlecol.value)}
                                    </div>
                        })}
                    </div>
                )
            })}
        </div>
    ) 

}
export default Board; 

}