import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar, Overlay, OverlayTrigger, Popover } from 'react-bootstrap';

export default class Fixtures extends React.Component{

	render(){

		return(
			<div className ={`recent-matches`}>
				<div className ={`last-match`}>
					<h3>Last Match</h3><span>{this.props.lastMatchDate}</span>
					<div className = {`lastmatch-score`}>
						<div className = {`team-names`}>
							<div className = {`hometeam-name`}>
								{this.props.lastMatchHomeTeam}
							</div>
							<div className = {`awayteam-name`}>
								{this.props.lastMatchAwayTeam}
							</div>
						</div>
						<div className = {`team-scores`}>
							<div className = {`hometeam-score`}>
								{this.props.lastMatchHomeTeamScore}
							</div>
							<div className ={`awayteam-score`}>
								{this.props.lastMatchAwayTeamScore}
							</div>
						</div>
						<div className = {`game-info`}>
							<div className = {`competition`}>
								{this.props.lastMatchCompetition}
							</div>
						</div>
					</div>
				</div>

				<div className = {`next-match`}>
					<h3>Next Match</h3><span>{this.props.nextMatchDate}</span>
					<div className = {`nextmatch-score`}>
						<div className = {`team-names`}>
							<div className = {`hometeam-name`}>
								{this.props.nextMatchHomeTeam}
							</div>
							<div className = {`awayteam-name`}>
								{this.props.nextMatchAwayTeam}
							</div>
						</div>
						<div className = {`game-info`}>
							<div className = {`competition`}>
								{this.props.nextMatchCompetition}
							</div>
						</div>
					</div>
				</div>
			</div>);
	}
}