import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { getPokemonById } from './../actions/PokemonActions';
import PokemonDetail from './../components/PokemonDetail';


class PokemonListContainer extends Component {

	imprimir(datos){
		console.log(datos);
	}

    render() {
        return (
        	<div className="continue">
	           <PokemonDetail/>
            </div>
        );
    }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps,mapDispatchToProps)(PokemonListContainer);


