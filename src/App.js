import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
const products = [
  {name: 'Photoshop', price:"$99.99"},
  {name: 'Illustator', price:"$80.99"},
  {name: '3D Printing', price:"$65.99"}
]
const friends=[
  'Rony', 'Ovi','Arosh','Saiful'
]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <p>My first react paragraph</p>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
          
        </ul>
          {
            products.map(product =><Product name={products[0].name}></Product>)
          }
        <Counter></Counter>
        <Users></Users>
        <FriendsName></FriendsName>
       
        <Person name=" Habib khan" Job=" Writer"></Person>
        <Person name="AR Bijoy" Job=" Student"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Users(){
  const [user,setUser] = useState([])
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>setUser(data))
  },[])
  return(
    <div>
      <h1>Dynamic Users:{user.length}</h1>
      <ul>
        {
          user.map(user =><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}



function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function FriendsName(props) {
  const friendStyle ={
    border: '2px solid red',
    backgroundColor: 'gray',
    height:"200px",
    width:"400px",
    float: "left",
    padding: "2px",
    margin: "20px"

  }
  return <div style={friendStyle}>
    <h1>Name:{props.name}</h1>
    <h3>Job:{props.job}</h3>
  </div>
}
function Product(props){
  const productStyle = {
    border: "1px solid orange",
    borderRadius: "5px",
    backgroundColor:"green",
    height:"200px",
    width:"400px",
    float: "left",
    padding: "2px",
    margin: "20px"
  }
  return <div style={productStyle}>
    <h2>Name:{props.name}</h2>
    <h4>Price:{props.price}</h4>
    <button>Buy Now</button>
  </div>
}

function Person(props){
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
    return <div style={personStyle}>
      <h1>Name:{props.name}{props.Job}</h1>
      <h1>lats do something for you.</h1>
      <h2>We are proud because we are Muslim</h2>
    </div> 
}

export default App;
