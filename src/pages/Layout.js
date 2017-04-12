import React from 'react';
import ReactDOM from 'react-dom';

export default class Layout extends React.Component{

	render(){
		return(
			<div>
				<h1>PICTURE PICTURE PICTURE</h1>
				<h1>NAVBAR</h1>
				{this.props.children}
			</div>);
	}
}
