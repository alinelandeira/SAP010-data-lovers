
export function pokeType(pokeArray, pokeChange) {
  if (pokeChange === "allPoke") {
    return pokeArray;
  }
  const typeFiltered = pokeArray.filter(pokemon => pokemon.type.includes(pokeChange))
  return typeFiltered;
}

export function pokeOrder(pokeArray, changeOrder) {
  const compareByName = (a, b) => a.name.localeCompare(b.name);
  const compareByNumber = (a, b) => a.num.localeCompare(b.num);

  const orderingFunctions = {
    nameAsc: compareByName,
    nameDesc: (a, b) => -compareByName(a, b),
    numberAsc: compareByNumber,
    numberDesc: (a, b) => -compareByNumber(a, b),
  };

  const ordered = pokeArray.sort(orderingFunctions[changeOrder]);

  return ordered;
}


/*export const computeStats = {

  calculatePokemonTypesInPercentages: function (data) {

    const totalNumberOfPokemons = data.pokemon.length;

    const count = {};

    for (const object in data.pokemon) {

      data.pokemon[object].type.forEach(type => {
        count[type] = (count[type] || 0) + 1;
      });

    }

    for (const property in count) {
      count[property] = ((count[property] / totalNumberOfPokemons) * 100).toFixed(2);
    }//endFor
    return count;
*/







