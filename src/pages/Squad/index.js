import React from 'react';
import ReactDOM from 'react-dom';
import SquadData from './SquadData';
// import SquadInfo from './SquadInfo';

export default class Squad extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			players: 
			[
				{"id":1,"name":"Jose Mourinho","role":"Manager","birthplace":"Portugal","image":"./pages/Squad/assets/jose_mourinho.jpg"},
				{"id":13,"name":"Ander Herrera","position":"Midfielder","birthplace":"Spain","number":21,"image":"./pages/Squad/assets/ander_herrera.jpg"},
				{"id":20,"name":"Anthony Martial","position":"Forward","birthplace":"France","number":11,"image":"./pages/Squad/assets/anthony_martial.jpg"},
				{"id":14,"name":"Antonio Valencia","position":"Defender / Midfielder","birthplace":"Ecuador","number":25,"image":"./pages/Squad/assets/antonio_valencia.jpg"},
				{"id":25,"name":"Ashley Young","position":"Midfielder","birthplace":"England","number":18,"image":"pages/Squad/assets/ashley_young.jpg"},
				{"id":11,"name":"Axel Tuanzebe","position":"Defender","birthplace":"Congo","number":38,"image":"./pages/Squad/assets/axel_tuanzebe.jpg"},
				{"id":5,"name":"Daley Blind","position":"Defender / Midfielder","birthplace":"Netherlands","number":17,"image":"./pages/Squad/assets/daley_blind.jpg"},
				{"id":2,"name":"David De Gea","position":"Goalkeeper","birthplace":"Spain","number":1,"image":"./pages/Squad/assets/david_degea.jpg"},
				{"id":4,"name":"Eric Bailly","position":"Defender","birthplace":"Ivory Coast","number":3,"image":"./pages/Squad/assets/eric_bailly.jpg"},
				{"id":18,"name":"Henrikh Mkhitaryan","position":"Midfielder","birthplace":"Armenia","number":22,"image":"./pages/Squad/assets/henrikh_mkhitaryan.jpg"},
				{"id":15,"name":"Jesse Lingard","position":"Midfielder","birthplace":"England","number":"14","image":"./pages/Squad/assets/jesse_lingard.jpg"},
				{"id":17,"name":"Juan Mata","position":"Midfielder","birthplace":"Spain","number":8,"image":"./pages/Squad/assets/juan_mata.jpg"},
				{"id":9,"name":"Luke Shaw","position":"Defender","birthplace":"England","number":23,"image":"./pages/Squad/assets/luke_shaw.jpg"},
				{"id":10,"name":"Marcos Rojo","position":"Defender","birthplace":"Argentina","number":5,"image":"./pages/Squad/assets/marcos_rojo.jpg"},
				{"id":21,"name":"Marcus Rashford","position":"Forward","birthplace":"England","number":19,"image":"./pages/Squad/assets/marcus_rashford.jpg"},
				{"id":19,"name":"Marouane Fellaini","position":"Midfielder / Forward","birthplace":"Belgium","number":27,"image":"./pages/Squad/assets/marouane_fellaini.jpg"},
				{"id":6,"name":"Matteo Darmian","position":"Defender","birthplace":"Italy","number":36,"image":"./pages/Squad/assets/matteo_darmian.jpg"},
				{"id":16,"name":"Michael Carrick","position":"Midfielder","birthplace":"England","number":16,"image":"./pages/Squad/assets/michael_carrick.jpg"},
				{"id":12,"name":"Mike Smalling","position":"Defender","birthplace":"England","number":12,"image":"./pages/Squad/assets/mike_smalling.jpg"},
				{"id":23,"name":"Paul Pogba","position":"Midfielder","birthplace":"France","number":6,"image":"./pages/Squad/assets/paul_pogba.jpg"},
				{"id":8,"name":"Phil Jones","position":"Defender","birthplace":"England","number":4,"image":"./pages/Squad/assets/phil_jones.jpg"},
				{"id":3,"name":"Sergio Romero","position":"Goalkeeper","birthplace":"Argentina","number":20,"image":"./pages/Squad/assets/sergio_romero.jpg"},
				{"id":7,"name":"Timothy Fosu-Mensah","position":"Defender / Midfielder","birthplace":"Netherlands","number":24,"image":"./pages/Squad/assets/timothy_fosu-mensah.jpg"},
				{"id":22,"name":"Wayne Rooney","position":"Midfielder / Forward","birthplace":"England","number":10,"image":"./pages/Squad/assets/wayne_rooney.jpg"},
				{"id":24,"name":"Zlatan Ibrahimović","position":"Forward","birthplace":"Sweden","number":9,"image":"./pages/Squad/assets/zlatan_ibrahimovic.jpg"}
			],
			selectedPlayer: ''
		};
	}

	handleChange(e){

		this.setState({
			selectedPlayer: e.target.value
		});
	}

	findPlayerByName(name){
		return this.state.players.find(player => player.name ==name);
	}

	// findPlayerByIndex(name)
	// {
	// 	for(var i =0; i<this.state.players.length; i++)
	// 	{
	// 		if(this.state.players[i].name == name)
	// 		{
	// 			return i;
	// 		}
	// 	}
	// }

	weGotName(player)
	{
		if(player)
		{
			return(	
			<div>
				<div>
					<img src = {this.findPlayerByName(this.state.selectedPlayer).image}/>
				</div>	
				<div>{this.findPlayerByName(this.state.selectedPlayer).number}</div>
				<div>{this.findPlayerByName(this.state.selectedPlayer).birthplace}</div>
				
			</div>)
		}
		else
		{
			return;
		}
	}

	render(){
		const playerList = this.state.players;
		const playerName = playerList.map((player)=>
		{
			return <option key = {player.id}>
						{player.name}
				   </option>
		});
		return(
				<div>
					<select value = {this.state.selectedPlayer} onChange ={(e) =>{this.handleChange(e)}}>
						<option>Select a bro</option>
						{playerName}
					</select>
					<div>{this.state.selectedPlayer}</div>
					<div>{this.weGotName(this.state.selectedPlayer)}</div>
				</div>
			)

		
	}
}