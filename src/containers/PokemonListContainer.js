import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from './../actions/PokemonActions';
import PokemonList from './../components/PokemonList';


class PokemonListContainer extends Component {

	componentDidMount(){
	  this.props.getPokemonList();
	}

	imprimir(datos){
		console.log(datos);
		//console.log(this.props.pokemonList.data.results)
		//<h1 onClick={()=> {this.imprimir(pokemonList)}}>Lista de pokemon</h1>

	}

    render() {
    	const pokemonList = this.props.pokemonList;
        return (
        	<div style={{width: "30%"}}>
	           <div className="pokemonList">
	           <PokemonList style={{height: "50%"}} pokemonList={pokemonList}/>
	           </div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
	pokemonList: state.pokemonListReducer.pokemonList.pokemon
});

const mapDispatchToProps = dispatch => ({
	getPokemonList: () => dispatch(getPokemon)
})



export default connect(mapStateToProps,mapDispatchToProps)(PokemonListContainer);


