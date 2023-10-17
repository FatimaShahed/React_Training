import React from 'react';
import ReactDOM from 'react-dom/client';
 
 
class B extends React.Component { 

constructor(props) { 
	super(props); 
	this.handleTextChange = this.handleTextChange.bind(this); 
} 

handleTextChange(e){ 
	this.props.handleTextChange(e); 
} 

render() { 
	return ( 
		<input value={this.props.text} 
			onChange={this.handleTextChange} /> 
	); 
} 
} 
	
export default B;
