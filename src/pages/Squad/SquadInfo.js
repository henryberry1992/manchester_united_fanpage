import React from 'react';
import ReactDOM from 'react-dom';

export default class SquadInfo extends React.Component {
	
	constructor(props)
	{
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e)
	{
		this.props.onPlayerInfoChange(e.target.value);
	}

	render(){
		const name = this.props.name;
		const role = this.props.role;
		const birthplace = this.props.birthplace;
		const number = this.props.number;
		return(
			<div>
				<div>{name}</div>
				<div>{role}</div>
				<div>{birthplace}</div>
				<div>{number}</div>
			</div>);
	}
}