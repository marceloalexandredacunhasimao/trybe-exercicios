/*
    Pokemon : como o próprio nome diz, esse componente representa um pokemon. Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico. Esse componente precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando PropTypes:

    nome do pokemon;
    tipo do pokemon;
    peso médio do pokemon, acompanhado da unidade de medida usada;
    imagem do pokemon.
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
	render() {
		const {  pokemon: { name, type, averageWeight:{value:weight, measurementUnit:unit}, image }  } = this.props;
//		console.log('name:',name,'type:',type,'weigth:',weight,'unit:',unit,'image:',image);
		return (
		<div className='pokemon'>
			<img src={image} alt={name}></img>
			<p>{name}</p>
			<p>{type}</p>
			<p>Average Weight: {weight} {unit}</p>
		</div>
		);
	}
}

Pokemon.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		averageWeight: PropTypes.shape({
			value:PropTypes.number.isRequired,
			measurementUnit:PropTypes.string.isRequired,
			}).isRequired,
		moreInfo: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	}
	).isRequired,
}

export default Pokemon;
