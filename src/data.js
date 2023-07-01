
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



export function calculoRaridade (pokeArray, pokeRaridade) {

  const porcentagemRaridade = (pokeArray.filter(pokemon => pokemon[pokemon-rarity(pokeRaridade)])) / pokeArray * 100;
  return porcentagemRaridade;

  }







