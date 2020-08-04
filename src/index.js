import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const fName = "Michelle";
const lName = "Slee";
const year = new Date().getFullYear();

const date = new Date();
const hours = date.getHours();

const img = "https://images.freeimages.com/images/large-previews/b3d/flowers-1375316.jpg";
const customStyle = {
  color: "red",
  fontSize: "24px",
  border: "1px solid black",
}

//Default Greeting
let greeting;

const greetingStyle = {
  color: "red"
}

//Checks if afternoon or evening

if (hours < 12) {
  greeting = "Good Morning";
}else if (hours >= 12) {
  greetingStyle.color = "green";
  greeting = "Good Afternoon";
} else if (hours >= 18) {
  greetingStyle.color = "blue";
  greeting = "Good Evening";
}

customStyle.color = "pink";



ReactDOM.render(
  <div>
  <h1 className="header" style = {greetingStyle}>{greeting}</h1>




<h2>Heading to <span style={customStyle}>demo</span> in-line style </h2>
  <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Biscuits</li>
  </ul>
  <div>
    <img src={img} alt ="flower"/>
  </div>


  <p>Created by {`${fName} ${lName}`} </p>
  <p>Copyright {year}</p>
  </div>,
  document.getElementById('root')
);
