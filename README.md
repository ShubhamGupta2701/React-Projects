# React-Projects

- In this Repo, I am sharing some React Projects( basic to Advance)
- These Projects help me to learn react so i hope it'll help others as well

## To create a New React App
- `npm create vite@latest`

# About React
- ## CreateTodo Components 
```
    - Simply just create a funcion and then return a div inside it.
    - We can do some other stuff if its necessary but right now its not needed that why we didn't do it
    - After that we have to export that Component and right now we are in CreateTodo Component and a Component is just a function so to export it we can do it after creating the function or we can just export it firstly
    - like : 
            export function CreateTodo(){
                return 
                    <div>
                        Some stuff
                    </div>
            }
```   

- ## Props
```
    - parameters
    
        - They are simply just the parameters which take by functions to perform some operations on it or use them in our frontend
        - We can share anything as props even functions itself can work as Props
        - Primarly props are passes from parent to child but some times it may passes from child to parent which is a bad and ugly approach
        - To avoid it, we use hocks
```
                 

- ## Hocks
  - Hooks are functions with starting from 'use' and they let us to perform some functionality or operations on the react state
  - Some Common and most used Hooks in React are :
    - useState() - to create states which help us to understand the flow of the components and react
    - useEffect() - to perform some operation when a spefic condition or state variable change
    - useCallback() - when we want our callback run for once only when a spectified condition meets(state variable)
    - useMemo() - to store the preivous value of the state or component and use it whenever a particular state variable change
    - useReduce() - to handle the state management in react - old way - if not using redux toolkit or recoil then use this
    - useRef()
    - useContext()
    - Custom Hooks - when we want to move or use our hook states outside any component and hooks them we create custom hooks and assign the same value of hooks to it and use it for the same purpose.
    ```
    - useEffect()
        - React provide use multiple hocks to enable us to perform some particular operations optimally
        - useEffect() hock is one of them, using this we can set the effect upon which some particular operations can work
        - useState()  
            - This hock is one of the most used hocks
            - it used to change or update the state of my component 
            - const [_state_name_ , _setState_name] = useState("either it can be empty", or_we can initialize it by something);
            - we use this to update the state and go to previous state
    ```

## Minimize Re-Rendering

- In React, Even if a small component Re-Renders whole app re-renders and create problems in large scale applications
- To overcome it we have 2 solutions
    - Make the lowest component re-render itself by providing it, seperate updating state
      ```
      import {useState} from 'react';
        import React from 'react';
        
        function App(){
          return <>   
            <FirstHeader />
            <Header title="Her name is : Riya"></Header>
          </>
        }
        
        function FirstHeader(){
          const [title,setTitle] = useState("My name is : Shubham");
          // Either we can use empty div or react.fragment div
          function updateTitle(){
            setTitle("My name is : "+Math.random());
          }
          
          return <div>
            <button onClick={updateTitle}>Click here to change the name</button>    
            <Header title={title}></Header>
          </div>
        }
        
        function Header({title}){
          return <div>
              {title}
            </div>
        }
        
        export default App;
      ```
    - By using Memo
      ```
        import {useState} from 'react';
        import React,{memo} from 'react';
        
        function App(){
          const [title,setTitle] = useState("My name is : Shubham");
          function updateTitle(){
            setTitle("My name is : "+Math.random());
          }
          
          return <div>   
            <button onClick={updateTitle}>Click here to change the name</button>    
            <Header title={title}></Header>
            <Header title="Her name is : Riya"></Header>
            <Header title="Her name is : Saurabh"></Header>
            <Header title="Her name is : nona"></Header>
          </div>
        }
        
        const Header = memo(({title})=>{
          return <div>
            {title}
          </div>
        })
        
        export default App;
      ```

## Wrapper Component 
  - These are the components that takes children and renders them inside 
  - These can used to give the basic overview of the components and render data which we pass through them 

  - ugly way and not so good way to create a wrapper is :
    ```
    function App(){
      return <div>
        <CardWrapper innerComponent={<TextComponent/>}/>
        <CardWrapper innerComponent={<h1>Hi there</h1>}/>
      </div>
    }

    function TextComponent(){
      return <>
        Hello there, Shubham this side!
      </>
    }

    function CardWrapper({innerComponent}){
      return <div style={{border:"2px solid black",padding:"20px",margin:"15px"}}>
        {innerComponent}
      </div>
    }

    export default App;

    ```

  - Actual way and clean way to create a wrapper component is :
    ```
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
    ```


## React Routing
- use library `react-router-dom`
- to creates routes 
- Routes are the bridges between different components
- usually use when we want to go to some other page by clicking on something
- It tells the behaviour of our app by letting us go from one component to another
