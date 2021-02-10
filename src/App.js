import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  var name= "Messi"

  var person={
    name :"Lionel Messi",
    status:"GOAT"
  }
  
  var colorText = {
    color: 'red'
  }

  var cricketers=["Tamim","Liton","Shakib","Mushfiq","Mahmudullah","Miraj"]

  
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h3> What is JSX?</h3>
        <p>JSX stands for JavaScript XML.</p>
        <p> JSX allows us to write HTML in React.</p>
        <p>JSX makes it easier to write and add HTML in React.</p>


        <h3> Coding JSX</h3>
        <p> JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.</p>
        <p>JSX converts HTML tags into react elements.</p> 

        <h3>Tanvir Ahmed Sarker</h3>
        <p>My First Paragraph</p>

        {/* automatically hoye jacche */}
        <p>What is 2+3? {2+3}</p> 
        
        
        {/* Calling variable */}
        <h1> {name} </h1>

        {/* Calling object */}
        <h1>{person.name + " : "+ person.status}</h1>
        <h1>{`${person.name} : ${person.status}`}</h1>

        {/* accessing array */}
        <h1> {cricketers[1]}</h1>
        
        {/* adding styles */}
        {/* Ekdom upore import kora hoyeche:way 1 */}
        {/* manually style set kora jay*/}
        {/* way no-1 */}
        <h1 style={colorText}> {name} </h1>
        {/* way no-2 */}
        <h1 style={{color:'yellow'}}> {name} </h1>


        {/* Creating components using function */} 
        {/* As it is component,that's why it is written as tag */}
        {/* way-1 */}
        <CalledFunction></CalledFunction>

        {/* way-2 */}
        <PropsFunction name="Rubel Hussain"></PropsFunction>
        <PropsFunction task="Goes for a hero! Full and straight! Bangladesh Tigers knocked out English Lions out of the world cup"></PropsFunction>
        {/* using two or more attributes as props */}
        <PropsFunction2 name="Tamim Iqbal" task="Show some respect to the veteran bowler! Oh Boy! What a shot!"></PropsFunction2>



        {/* Component je create kortesi,eksathe tader style pathay dile kemon hoy? Joss hoy! */}
        <ComponentWithStyles name="Mashrafe Mortaza" task="Captain Fantastic">
        </ComponentWithStyles>



        {/* Create multiple components at a time */}
        <ul>
          {cricketers.map(cricketer=>
                                    <li>{cricketer}</li>
                                    )}
        </ul>
{/* The above example is obviously better than the below. Naile ar react-e ba kn! */}
        <ul>
          <li>{cricketers[0]}</li>
          <li>{cricketers[1]}</li>
          <li>{cricketers[2]}</li>
          <li>{cricketers[3]}</li>
          <li>{cricketers[4]}</li>
          <li>{cricketers[5]}</li>
        </ul>



        {/* Component-state hook */}
        <Counter></Counter>


        {/* Fetching API in React  */}
        <Users></Users>
        
      </header>
    </div>
  );
}




//Create component
// function name should start with capital letter
function CalledFunction(props){

  // If you want to return more than one thing,then use a div before and after to send it as a package. If it is a single thing, no need to use div
  return <div> 
    <h1>Shakib Al Hasan</h1>
    <h3>GOAT of Bangladesh Cricket and world's best all-rounder</h3>
  </div>
}

function PropsFunction(props){
  return <div> 
    <h1>{props.name}</h1>
    <h3>{props.task}</h3>
  </div>
}

function PropsFunction2(props){
  return <div>
    <h1>{props.name}</h1>
    <h3>{props.task}</h3>
  </div>
}

function ComponentWithStyles(props){
  var colorfulCaptain={
    backgroundColor:'green',
    color:'red'
  }
 
  return <div style={colorfulCaptain}>
    <h1>{props.name}</h1>
    <h3>Known as {props.task}</h3>
  </div>
}
//IMPORTANT THING TO LEARN: props VS state: https://reactjs.org/docs/faq-state.html
//component-state-hook
function Counter(){
  const [count ,setCount]= useState(10)//initially 10 set kore dilam
  function increasingButton(){
    setCount(count+1);
  };
  function decreasingButton(){
    setCount(count-1);
  };
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={increasingButton}>Increase</button>
      <button onClick={decreasingButton}>Decrease</button>
    </div>
  )
}
//There are other event handlers apart from "onClick" in React too!


//Fetching api
function Users(){
  const [users, setUsers]= useState([]);

   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=> setUsers(data))
   })
    
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>{
       users.map(user => <li>{user.name}</li>)
          }
      </ul>
    </div>
  )
}


export default App;
