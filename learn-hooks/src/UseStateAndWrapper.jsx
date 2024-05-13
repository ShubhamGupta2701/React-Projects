// HArd coded minimal re rendering

// import {useState} from 'react';
// import React from 'react';

// function App(){
//   return <>   
//     <FirstHeader />
//     <Header title="Her name is : Riya"></Header>
//   </>
// }

// function FirstHeader(){
//   const [title,setTitle] = useState("My name is : Shubham");
//   // Either we can use empty div or react.fragment div
//   function updateTitle(){
//     setTitle("My name is : "+Math.random());
//   }
  
//   return <div>
//     <button onClick={updateTitle}>Click here to change the name</button>    
//     <Header title={title}></Header>
//   </div>
// }

// function Header({title}){
//   return <div>
//       {title}
//     </div>
// }

// export default App;

// using memo

// import {useState} from 'react';
// import React,{memo} from 'react';

// function App(){
//   const [title,setTitle] = useState("My name is : Shubham");
//   function updateTitle(){
//     setTitle("My name is : "+Math.random());
//   }
  
//   return <div>   
//     <button onClick={updateTitle}>Click here to change the name</button>    
//     <Header title={title}></Header>
//     <Header title="Her name is : Riya"></Header>
//     <Header title="Her name is : Saurabh"></Header>
//     <Header title="Her name is : nona"></Header>
//   </div>
// }

// const Header = memo(({title})=>{
//   return <div>
//     {title}
//   </div>
// })

// export default App;


// wrapper Component brute force method or we can say ugly

// function App(){
//   return <div>
//     <CardWrapper innerComponent={<TextComponent/>}/>
//     <CardWrapper innerComponent={<h1>Hi there</h1>}/>
//   </div>
// }

// function TextComponent(){
//   return <>
//     Hello there, Shubham this side!
//   </>
// }

// function CardWrapper({innerComponent}){
//   return <div style={{border:"2px solid black",padding:"20px",margin:"15px"}}>
//     {innerComponent}
//   </div>
// }

// export default App;


// wrapper component correct and clean way
function App(){
  return <div>
    {/*  this is how a wrapper should be */}
    <CardWrapper>
      <TextComponent/>   
    </CardWrapper>
    <CardWrapper>
      Hi, mza toh aa rha h seekhne mai ye sb
    </CardWrapper>
  </div>
}

function TextComponent(){
  return <>
    Hello there, Shubham this side!
  </>
}

function CardWrapper({children}){
  return <div style={{border:"2px solid black",padding:"20px",margin:"15px"}}>
    {children}
  </div>
}

export default App;