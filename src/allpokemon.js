import React from 'react';

const PokeMonDetails = ({pokemonDetails,loading}) =>{
    let pokemonItem = []
    pokemonItem.push(pokemonDetails)
    let pokemon = []
    pokemonItem.forEach((item,index)=>{

        console.log('item>>>>>',item)

})

    // pokemonItem['abilities']= pokemonDetails.abilities
    // pokemonItem['forms']= pokemonDetails.forms
    // pokemonItem['stats']= pokemonDetails.stats
    // pokemonItem['name']= pokemonDetails.name
    // pokemonItem['weight']= pokemonDetails.name

    console.log('abilities>>',pokemonItem[0])


    return(
<div>

</div>
)}






const AllPokemon = ({loading,pokemonData,pokemon,showDetails,pokemonDetails}) => (
<div>
<h1>All Pokemon </h1>
{loading && (<div>Loading Pokemon...</div>)}
<ul>
{pokemonData.length > 0 &&
pokemonData
    .filter(x => x.name.includes(pokemon))
.map((item,i)=>(
<span key={i}>
    <li>{item.name}</li>
<li><button onClick={()=>showDetails(i)}> Details of {item.name}</button></li>
</span>
))
}
</ul>
    <PokeMonDetails loading={loading} pokemonDetails={pokemonDetails}/>

</div>

)

export default AllPokemon