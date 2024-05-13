import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){
  function onclickHandler(){
    // count  = count+1; //this is not the right way to update the state
    props.setCount(props.count+1);
  }

  return (
    <div>
      <button onClick={onclickHandler}>Counter {props.count}</button>
    </div>
  )
}

export default App;
