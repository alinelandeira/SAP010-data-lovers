
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

/*export function pokeOrder(pokeArray, changeOrder) {
  const ordered = pokeArray.sort((a, b) => {
    if (changeOrder === "nameAsc") {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    } else if (changeOrder === "nameDesc") {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return 0;
      }
      return 0;
    } else if (changeOrder === "numberAsc") {
      if (a.num > b.num) {
        return 1;
      }
      if (a.num < b.num) {
        return -1;
      }
      return 0;
    } else if (changeOrder === "numberDesc") {
      if (a.num > b.num) {
        return -1;
      }
      if (a.num < b.num) {
        return 1;
      }
      return 0;
    }
  });

  return ordered;
}*/


