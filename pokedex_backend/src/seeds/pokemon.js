const pokemonSeeder = async () => {
    const pokemons = await fetch ('https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0').then (res=>
        res.json())
        
        console.log(pokemons)
}
module.exports = {pokemonSeeder}