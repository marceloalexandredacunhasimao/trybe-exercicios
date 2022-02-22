import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
	constructor(props) {
	super(props);
	this.selecionaPokemon = this.selecionaPokemon.bind(this);
	this.listPokemonTypes = this.listPokemonTypes.bind(this);
	this.filtraPokemons = this.filtraPokemons.bind(this);
	this.allPokemons = this.allPokemons.bind(this);
	this.state = {
		index: 0,
		types: this.listPokemonTypes(),
		/*types: this.props.pokemons
			.reduce((acc,pokemon) => acc.includes(pokemon.type) ? acc:[...acc,pokemon.type], []),*/
		filtrados: this.props.pokemons,
		}
	}
	
	selecionaPokemon() {
		this.setState((PrevStat) => (
		{
			index: PrevStat.index >= this.state.filtrados.length-1 ? 0 : PrevStat.index+1,
		}));
		}

	listPokemonTypes() {
		const types = this.props.pokemons
			.reduce((acc,pokemon) => acc.includes(pokemon.type) ? acc:[...acc,pokemon.type], []);
		return types;
	}
	
	filtraPokemons(event) {
		this.setState({index: 0});
		this.setState((prevStat,prevProps) => ({
			filtrados: prevProps.pokemons.filter((pokemon) => pokemon.type === event.target.innerText),
		}));
	}
	
	allPokemons() {
		this.setState({filtrados: this.props.pokemons,});
	}

	render() {
		//const proximoPokemenDisabled = this.state.filtrados.length <=1 ? 'disabled' : '';
		//console.log('proximoPokemenDisabled:',proximoPokemenDisabled);
		let proximoPokemon = <button onClick={this.selecionaPokemon}>Próximo pokemon</button>;
		if(this.state.filtrados.length <=1 ) {
			proximoPokemon = <button onClick={this.selecionaPokemon} disabled>Próximo pokemon</button>;
		}
		
		return (
			<>
            	<div className="pokedex">
            		<Pokemon pokemon={this.state.filtrados[this.state.index]} />
            	</div>
            	<div>
           			{proximoPokemon}
           		</div>
           		<button onClick={this.allPokemons}>All</button>
           		{this.state.types.map((type) => <button key={type} onClick={this.filtraPokemons}>{type}</button>)}
           	</>
		)
	}
}

export default Pokedex;
