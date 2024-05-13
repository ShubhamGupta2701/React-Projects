import {useState, useMemo} from 'react';


function App(){
    const [counter,setCounter] = useState(0);
    const [inputValue,setInputValue] = useState(1);
    let count = useMemo(()=>{
        let finalCount = 0;
        for(let i=1;i<=inputValue;i++){
            finalCount = finalCount + i;
        }
        return finalCount;
    },[inputValue]);
    return (
        <div>
            <h1>
                Hi, this is memo
            </h1>
            <input onChange={(e)=>{
                setInputValue(e.target.value);
            }} placeholder={'Find sum from 1 to n'}></input><br/>
            Sum from 1 to {inputValue} is : {count}
            <br/>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Counter ({counter})</button> 
        </div>
    );
}

export default App;