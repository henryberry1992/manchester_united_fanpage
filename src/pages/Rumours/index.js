import React from 'react';
import ReactDOM from 'react-dom';

export default class Rumours extends React.Component{
	render(){
		return(
			<div>
				<h1>RUMOURS</h1>
				<h1>We be price gouged for {this.props.rumouredPlayer}</h1>
			</div>);
	}
}