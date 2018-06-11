import React from 'react'

const MyPokemon = ({myPokemon,pokemon,deletePokemon}) =>(

<div>
<h1>My Pokemon </h1>
<ul>
{myPokemon.length > 0 &&
myPokemon
    .filter(x => x.name.includes(pokemon))
.map((item,i)=>(
<span key={i}>
    <li>{item.name}</li>
<li><a href={item.url}> Details of {item.name}</a></li>
<li><button onClick={()=>deletePokemon(i)}><span style={{textSize:'18px'}}>x</span> Delete</button></li>
</span>
))
}
</ul>
</div>
)

export default MyPokemon