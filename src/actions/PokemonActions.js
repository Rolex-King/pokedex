import axios from 'axios';
import { store }  from './../store';

export const FETCH_POKEMON = 'FETCH_POKEMON';

export const fetchPokemon = pokemon => ({
	type: FETCH_POKEMON,
	payload: { pokemon }
});


export const getPokemon = () => {
		return axios.get('https://pokeapi.co/api/v2/pokemon').then(resultSet => {
			//console.log(resultSet.data.results);
			store.dispatch(fetchPokemon(resultSet.data.results))
		}).catch(
			error => {console.log(error)}
		);
}

/*
export const getPokemon = () => {
	console.log("1")
	return (dispatch) => {
		 console.log("se cuela en el dispatch");
		return axios.get('https://pokeapi.co/api/v2/pokemon').then(resultSet => {
			console.log(resultSet);
			dispatch(fetchPokemon(resultSet))
		}).catch(
			error => {console.log(error)}
		);
	};
}
*/
