import React from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h1>HOME</h1>
				<h1>Man United Lose {this.props.result}</h1>
			</div>);
	}
}