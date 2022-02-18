/*
Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon 
*/
import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon.jsx';
import './Pokedex.css';

class Pokedex extends React.Component {
	render() {
		const list = this.props.lista;
		return	<div className='pokemonList'>
			{ list.map((item) => <Pokemon key={item.id} pokemon={item} />)}
		</div>;
	}
}

Pokedex.propTypes = {
	lista: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			type: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			averageWeight: PropTypes.shape({
				value:PropTypes.number.isRequired,
				measurementUnit:PropTypes.string.isRequired,
				}).isRequired,
			moreInfo: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
}

export default Pokedex;
