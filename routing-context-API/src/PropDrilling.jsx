// // Prop driiling way

// import { useState } from "react";


// function PropDrilling(){
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <Count count={count} setCount={setCount}/>
//         </div>
//     );

// }

// function Count({count,setCount}){
//     return <div>
//         <CountRender count={count}/>
//         <Buttons count={count} setCount = {setCount}/>
//     </div>
// }
// function CountRender({count}){
//     return <div>
//         {count}
//     </div>
// }

// function Buttons({count,setCount}){
//     return <div>
//         <button onClick={()=>{setCount(count+1)}}>Increase</button>
//         <button onClick={()=>{setCount(count-1)}}>Decrease</button>
//     </div>
// }


// export default PropDrilling;


// Context API  way

import { useState,useContext } from "react";
import { CountContext } from "./conextAPI";

function PropDrilling(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountContext.Provider value={{count,setCount}}>
                <Count/>          
            </CountContext.Provider>
            
        </div>
    );

}

function Count(){
    return <div>
        <CountRender/>
        <Buttons/>
    </div>
}
function CountRender(){
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons(){
    const {count,setCount} = useContext(CountContext);
    return <div>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
    </div>
}


export default PropDrilling;