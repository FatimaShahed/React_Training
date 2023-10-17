import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
      <li key={index}>index: {index} number: {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  export default NumberList;