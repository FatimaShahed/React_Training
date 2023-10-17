import React from 'react';
import ReactDOM from 'react-dom/client';
 
class C extends React.Component { 

render() { 
	return ( 
		<h3>Output: {this.props.text}</h3> 
	); 
} 
} 
	
export default C;
