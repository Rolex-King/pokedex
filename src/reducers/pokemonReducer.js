import { FETCH_POKEMON } from '../actions/PokemonActions';

const initialState = {
	pokemonList: []
};

export const pokemonListReducer = (state = initialState, action) =>{
	switch (action.type) {

		case FETCH_POKEMON:
			return {...state, pokemonList: action.payload}

		default:

			return state;
	}

} 