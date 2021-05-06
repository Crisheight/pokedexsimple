//audio volume first 
var audio = document.getElementById("myAudio");
audio.volume = 0.1;

//fetch quest starts! 
const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

//this function capitilizes the first letter of the const name 
//looping while calling function
const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
	}
};

//Use fetch to call the pokemon API
const getPokemon = async id => {
  const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
}

//creating a visual by showing info & adding the required html
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const {id, name, sprites, types} = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <div class = "img-container">
    <img src = "${sprites.front_default}" alt="${name}" />
  </div>
  <div class = "info">
    <span class = "number">#${id}</span>
    <h3 class = "name">${name.capitalizeFirstLetter()}</h3>
    <small class = "type"><span>Type: ${type}</span></small>
  </div>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

//this will call the above chain of functions
//now style it all in the styles css sheet



fetchPokemons(); 
