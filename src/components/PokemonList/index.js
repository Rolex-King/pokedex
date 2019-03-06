import React from 'react';
import Pokemon from './Pokemon';
import './index.css';
 

const PokemonList = (props) => {
		
		const pokemonComponents = props.pokemonList && props.pokemonList.map(pokemon => (
			<Pokemon pokemon={pokemon} key={pokemon.name}/>
		))

        return (
        	<div className="list">
	            <h2>Lista de pokemones</h2>
	            { props.pokemonList !== undefined ? pokemonComponents : <h2>Esta vacio</h2> }
            </div>
        );
    
}

export default PokemonList;
