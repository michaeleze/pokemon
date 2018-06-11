import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AllPokemon from './allpokemon';
import MyPokemon from './mypokemon';

class App extends Component {
      constructor(props){
        super(props)
          this.state = {
              store:JSON.parse(localStorage.getItem('things')),
              pokemonData:[],
              loading:true,
              pokemon:'',
              addUrl:'',
              addName:'',
              myPokemon:[],
              pokemonDetails:[]

          }

      }
      componentDidMount(){
      //Retrieve pokemon data from api
          axios.get('http://pokeapi.co/api/v2/pokemon')
              .then((res)=>{
          const pokemonData = res.data.results
            localStorage.setItem('things',JSON.stringify(pokemonData))
          this.setState({pokemonData:this.state.store, loading:false})

        })
          .catch((err)=>console.log(err))
      }
    showDetails(x){
        axios.get(`http://pokeapi.co/api/v2/pokemon/${x+1}`)
            .then((res)=>{
            const pokemonDetails = res.data
        this.setState({pokemonDetails:pokemonDetails, loading:false})

    })
    .catch((err)=>console.log(err))
    }

      filterPokemon(event){
          //filter pokename
        let pokemon = event.target.value;
        this.setState({pokemon})

    }
    addUrl(event){
        //Add pokeurl
      let addUrl= event.target.value;
      this.setState({addUrl})
    }
    addName(event){
          //Add pokename
        let addName= event.target.value;
        this.setState({addName})
    }
    addPokemon(){

          //Add new pokemon
        let {myPokemon,addName,addUrl} = this.state;
        myPokemon.push({url:addUrl,name:addName});
        this.setState({myPokemon});

        //Reset input field
        this.pokemonName.value = '';
        this.pokemonUrl.value = '';

    }
    deletePokemon(x){
          // Delete pokemon from myPokemon
      let {myPokemon} =this.state;
        myPokemon.splice(x,1);
        this.setState({myPokemon})

}


  render() {
    let {pokemonData,loading,pokemon,myPokemon,pokemonDetails} = this.state;

      return(
    <div className='App'>
         <div>
          <input
            className = 'search'
            placeholder = 'Search PokeMon'
            onChange= {this.filterPokemon.bind(this)}
            />
            <input
      ref={el => this.pokemonName = el}
      className = 'search'
      placeholder = 'Add Pokemon Name'
      onChange= {this.addName.bind(this)}
      />
      <input
      ref={el => this.pokemonUrl = el}
      className = 'search'
      placeholder = 'Add Pokemon Url'
      onChange= {this.addUrl.bind(this)}
      />
  <button onClick={this.addPokemon.bind(this)}>Add Item </button>
      </div>
   <AllPokemon loading={loading} pokemonData={pokemonData} pokemon={pokemon} showDetails={this.showDetails.bind(this)} pokemonDetails={pokemonDetails}/>

      < MyPokemon myPokemon={myPokemon} pokemon={pokemon} deletePokemon={this.deletePokemon.bind(this)} / >



      </div>
  )
  }
}

export default App;
