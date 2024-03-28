# React-Projects

- In this Repo, I am sharing some React Projects( basic to Advance)
- These Projects help me to learn react so i hope it'll help others as well

## To create a New React App
- `npm create vite@latest`

# React
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
                 

- ##Hocks
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
