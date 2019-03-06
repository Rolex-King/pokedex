import React from 'react';
import './index.css';
import {Grid,Row,Col} from 'react-flexbox-grid';


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
		</div>
	)
}

export default PokemonDetail;
