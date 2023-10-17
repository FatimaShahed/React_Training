import React from 'react';
import ReactDOM from 'react-dom/client';
import B from './B'
import C from './C'

class A extends React.Component { 

constructor(props) { 
	super(props); 
	this.handleTextChange = this.handleTextChange.bind(this); 
	this.state = {text: ''}; 
} 

handleTextChange(e) { 
	this.setState({text: e.target.value}); 
} 

render() { 
	return ( 
		<React.Fragment> 
		<B text={this.state.text} 
			handleTextChange={this.handleTextChange}/> 
		<C text={this.state.text} /> 
		</React.Fragment> 
	); 
} 
} 

export default A;
