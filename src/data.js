
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

export function percentual(valorParcial, valorTotal) {
  const porcentagem = (valorParcial / valorTotal) * 100;
  const porcentagemRound = Math.round(porcentagem);
  return porcentagemRound;
}

