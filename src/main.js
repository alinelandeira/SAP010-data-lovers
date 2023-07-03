import data from './data/pokemon/pokemon.js';
import { pokeType } from './data.js';
import { pokeOrder } from './data.js';

//for (let i = 0; i < data.pokemon.length; i++){ //Atribuimos o valor 0 ao I, e definimos que se i for menos que o comprimento da pasta de pokemons, seria adicionado mais 1, tornando i=1. Fazendo isso consequentemente até que chegue ao numero certo//
//console.log (data.pokemon[i].name); // Aqui printamos no console o nome de todos os pokemons. Primeiro acessamos o data, depois o pokemon e o seu indice (i) e depois acessamos seu nome.
//}

const pokeCards = document.getElementById("cards");
const pokeFilterType = document.getElementById("elements");
const pokeFilterOrganize = document.getElementById("order");
const dataPokemon = data.pokemon; //Criei uma variavel pra colocar os dados de todos os pokemons
const typeColors = {
  normal: '#aaa69ddc',
  fire: '#f98753',
  water: '#78b8d9',
  grass: '#9cd281',
  electric: '#fddb52ec',
  bug:'#41814b' ,
  ground: '#ab9842',
  poison: '#b97fc9',
  fighting:'#b95537' ,
  psychic: '#fa85c9',
  rock: '#a08c37',
  flying: '#bdb9b8',
  ghost:'#7b62a3' ,
  ice: '#9ad3c4f6',
  dragon: '#f16e57',
  steel: '#9eb7b8',
  dark:'#040d1fcf',
  fairy: '#fdb9e9',
};

function createCards(pokemons) {
  return ` 
<div class="flip-container" id= "all-content"> 
  <div class="flipper" style="background-color: ${typeColors[pokemons.type[0]]};">
    <div class="front">
      <div class="cardPoke">
        <div id= "poke-numbers">
          <h4>Nº: ${pokemons.num} </h4> 
        </div>
      
        <div id= "poke-image">
          <img src="${pokemons.img}" alt="Imagem do Pokémon">
        </div>

          <h2>${pokemons.name.charAt(0).toUpperCase() + pokemons.name.slice(1)}</h2> 
          <br>
          <p> <img src="imagens/turn.png" id="turn-icon"> </p>
      </div>
    </div>

    <div class="back"
     <div class="cardPoke" id="poke-info">
        <div id="poke-types">
          <p> <strong>Tipo: </strong> ${pokemons.type.join(", ")}. </p>  
     
          <p> <strong>Raridade: </strong> ${pokemons["pokemon-rarity"]}</p>

          <p><strong>Altura: </strong> ${pokemons.size.height}</p>

         <p><strong>Peso: </strong>${pokemons.size.weight}</p>

          <p><strong>Ataque especial: </strong>${pokemons["special-attack"].map(attack => attack.name).join(',  ')}.</p>
        </div>
      </div>  
    </div>
  </div>
</div>
`
}

const allPokemons = dataPokemon.map(pokemons => createCards(pokemons)).join(" ");

pokeCards.innerHTML = allPokemons;

function flipCards() {
  const flipContainers = document.querySelectorAll('.flip-container');
  flipContainers.forEach(container => {
    container.addEventListener("click", function () {
      container.classList.toggle("flipped");
    });
  });
}

flipCards();

pokeFilterType.addEventListener("change", function (event) {
  const pokeChange = event.target.value;
  const pokemonFiltered = pokeType(dataPokemon, pokeChange);
  const returnCard = pokemonFiltered.map(pokemons => createCards(pokemons)).join(" ");
  pokeCards.innerHTML = returnCard;
  flipCards();
});

pokeFilterOrganize.addEventListener("change", function (event) {
  const changeOrder = event.target.value;
  const pokemonAlphaOrder = pokeOrder(dataPokemon, changeOrder);
  const returnCardOrder = pokemonAlphaOrder.map(pokemons => createCards(pokemons)).join(" ");
  pokeCards.innerHTML = returnCardOrder;
  flipCards();
});






