import React from 'react'
import './index.css';


const getPokemonId = (url) => {
	var numeros = "0123456789";
	var idPokemon = url.substring(url.length -4, url.length -1).split("");

	const ID = idPokemon.map(caracter => {
		if(numeros.indexOf(caracter) !== -1){
			return caracter;
		}}).join("");

	return <h3>{`#${ID}`}</h3>;
}


const Pokemon = (props) => (
	<div className="pokemon">
		<div className="spriteContainer " style={{backgroundImage: "url(" + "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" + ")",backgroundPosition: 'center',
            backgroundSize: 'cover'}}></div>
            {getPokemonId(props.pokemon.url)}
		<h3 className="continue" style={{textAlign: "center", marginLeft: "15px"}}> {props.pokemon.name}</h3>

	</div>
)

export default Pokemon;