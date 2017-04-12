import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './pages/Layout';
import ClubHistory from './pages/ClubHistory/index';
import Fixtures from './pages/Fixtures/index';
import Home from './pages/Home/index';
import Rumours from './pages/Rumours/index';
import Squad from './pages/Squad/index';


const app = document.getElementById('app');

let fixtureInfo ={
	lastMatchDate: '13 Mar 2017',
	lastMatchHomeTeam: 'Chelsea',
	lastMatchAwayTeam: 'Manchester United',
	lastMatchHomeTeamScore: '1',
	lastMatchAwayTeamScore: '0',
	lastMatchCompetition: 'FA Cup',
	nextMatchDate: '16 Mar 2017',
	nextMatchHomeTeam: 'Manchester United',
	nextMatchAwayTeam: 'FC Rostov',
	nextMatchCompetition: 'Europa League'
};

ReactDOM.render(
	<Router history = {browserHistory}>
		<Route path ="/" component = {Layout}>
			<IndexRoute component = {() => (<Home result="1-1"/>)}></IndexRoute>
			<Route path ="clubhistory" component ={ClubHistory}></Route>
			<Route path ="fixtures" component ={() => (<Fixtures {...fixtureInfo}/>)}></Route>
			<Route path ="rumours" component ={() => (<Rumours rumouredPlayer ="Wesley Sneijder" />)}></Route>
			<Route path ="squad" component ={Squad}></Route>
		</Route>
	</Router>,
	 app);