import React from 'react';
import './index.css';
import {Row,Col} from 'react-flexbox-grid';
import { getColor} from '../../services/pokemonService';


const mapTypesToDiv = types =>{
	
	return  types.map(type=>{
		const color = getColor(type.type.name);
	 return <Col xs={4} key={type.type.name} className="pokeType" style={{backgroundColor: color}}>{type.type.name}</Col>
	 })}


const PokemonDetail = (props) => {

	return (
		<div className="detailContainer detailContainerBackground">
		<h1 onClick={()=> console.log(props.pokemon)}>Detalles de {props.pokemon ? props.pokemon.data.name : "alguno"} </h1>
		<Row>
			<Col xs={12}>
				<Row center="xs">
      				<div className="imageBox">
      					<img height="300px" width="300px" src={props.pokemon ? props.pokemon.data.sprites.front_default : "Cargando"}></img>
      				</div>
    			</Row>
			</Col>
		</Row>

		<Row around="xs">
		{props.pokemon ? mapTypesToDiv(props.pokemon.data.types) : "Cargando"}		
		</Row>

		</div>
	)
}

/*
 props.pokemon.data.types[0].type.name
*/
export default PokemonDetail;
