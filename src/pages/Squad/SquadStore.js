import { EventEmitter } from 'events';

class SquadStore extends EventEmitter{
	constructor(){
		super();
		this.data = [
				{id:1, name: 'Jose Mourinho', role: 'Manager', birthplace: 'Portugal', image: ''},
				{id:2, name: 'David De Gea', position: 'Goalkeeper', birthplace: 'Spain', number: '1', image: ''},
				{id:3, name: 'Sergio Romero', position: 'Goalkeeper', birthplace: 'Argentina', number: '20', image: ''},
				{id:4, name: 'Eric Bailly', position: 'Defender', birthplace: 'Ivory Coast', number: '3', image: ''},
				{id:5, name: 'Daley Blind', position: 'Defender / Midfielder', birthplace: 'Netherlands', number: '17', image: ''},
				{id:6, name: 'Matteo Darmian', position: 'Defender', birthplace: 'Italy', number: '36', image: ''},
				{id:7, name: 'Timothy Fosu-Mensah', position: 'Defender / Midfielder', birthplace: 'Netherlands', number: '24', image: ''},
				{id:8, name: 'Phil Jones', position: 'Defender', birthplace: 'England', number: '4', image: ''},
				{id:9, name: 'Luke Shaw', position: 'Defender', birthplace: 'England', number: '23', image: ''},
				{id:10, name: 'Marcos Rojo', position: 'Defender', birthplace: 'Argentina', number: '5', image: ''},
				{id:11, name: 'Axel Tuanzebe', position: 'Defender', birthplace: 'Congo', number: '38', image: ''},
				{id:12, name: 'Chris Smalling', position: 'Defender', birthplace: 'England', number: '12'},
				{id:13, name: 'Ander Herrera', position: 'Midfielder', birthplace: 'Spain', number: '21', image: ''},
				{id:14, name: 'Antonio Valencia', position: 'Defender / Midfielder', birthplace: 'Ecuador', number: '25', image: ''},
				{id:15, name: 'Jesse Lingard', position: 'Midfielder', birthplace: 'England', number: '14', image: ''},
				{id:16, name: 'Michael Carrick', position: 'Midfielder', birthplace: 'England', number: '16', image: ''},
				{id:17, name: 'Juan Mata', position: 'Midfielder', birthplace: 'Spain', number: '8', image: ''},
				{id:18, name: 'Henrikh Mkhitaryan', position: 'Midfielder', birthplace: 'Armenia', number: '22', image: ''},
				{id:19, name: 'Marouane Fellaini', position: 'Midfielder / Forward', birthplace: 'Belgium', number: '27', image: ''},
				{id:20, name: 'Anthony Martial', position: 'Forward', birthplace: 'France', number: '11', image: ''},
				{id:21, name: 'Marcus Rashford', position: 'Forward', birthplace: 'England', number: '19', image: ''},
				{id:22, name: 'Wayne Rooney', position: 'Midfielder / Forward', birthplace: 'England', number: '10', image: ''},
				{id:23, name: 'Paul Pogba', position: 'Midfielder', birthplace: 'France', number: '6', image: ''},
				{id:24,name: 'Zlatan Ibrahimović', position: 'Forward', birthplace: 'Sweden', number: '9', image: ''},
				{id:25, name: 'Bastian Schweinsteiger', position: 'Midfielder', birthplace: 'Germany', number: '31', image: ''},
				{id:26, name: 'Ashley Young', position: 'Midfielder', birthplace: 'England', number: '18', image: ''}
			]

	}
}

const squadStore = new SquadStore;

export default squadStore;