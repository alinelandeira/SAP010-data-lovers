import { pokeType, pokeOrder, percentual } from '../src/data.js';

describe('pokeType', () => {
  it('deve ser uma função', () => {
    expect(typeof pokeType).toBe('function');
  });

  it('deve retornar o tipo "todos"', () => {
    const pokArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
    const todos = 'allPoke';
    expect(pokeType(pokArray, todos)).toEqual(pokArray);
  });

  it('deve retornar o tipo filtrado', () => {
    const pokArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
    const pokChage = 'fire';
    expect(pokeType(pokArray, pokChage)).toEqual([{ type: 'fire' }]);
  });
});

describe('pokeOrder', () => {
  it('deve ser uma função', () => {
    expect(typeof pokeOrder).toBe('function');
  });

  it('deve retornar nomes em ordem crescente', () => {
    const poArray = [
      { 'num': '063', 'name': 'Abra' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '168', 'name': 'Ariados' }
    ];
    const poChange = "nameAsc";
    expect(pokeOrder(poArray, poChange)).toEqual([
      { 'num': '063', 'name': 'Abra' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '168', 'name': 'Ariados' }
    ]);
  });

  it('deve retornar nomes em ordem decrescente', () => {
    const poArray = [
      { 'num': '063', 'name': 'Abra' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '168', 'name': 'Ariados' }
    ];
    const poNChange = "nameDesc";
    expect(pokeOrder(poArray, poNChange)).toEqual([
      { 'num': '168', 'name': 'Ariados' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '063', 'name': 'Abra' }
    ]);
  });

  it('deve retornar números em ordem crescente', () => {
    const poArray = [
      { 'num': '063', 'name': 'Abra' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '168', 'name': 'Ariados' }
    ];
    const poNuChange = "numberAsc";
    expect(pokeOrder(poArray, poNuChange)).toEqual([
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '063', 'name': 'Abra' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '168', 'name': 'Ariados' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '190', 'name': 'Aipom' }
    ]);
  });

  it('deve retornar números em ordem decrescente', () => {
    const poArray = [
      { 'num': '063', 'name': 'Abra' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '024', 'name': 'Arbok' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '168', 'name': 'Ariados' }
    ];
    const poNuDChange = "numberDesc";
    expect(pokeOrder(poArray, poNuDChange)).toEqual([
      { 'num': '190', 'name': 'Aipom' },
      { 'num': '181', 'name': 'Ampharos' },
      { 'num': '168', 'name': 'Ariados' },
      { 'num': '142', 'name': 'Aerodactyl' },
      { 'num': '065', 'name': 'Alakazam' },
      { 'num': '063', 'name': 'Abra' },
      { 'num': '059', 'name': 'Arcanine' },
      { 'num': '024', 'name': 'Arbok' }
    ]);
  });
})

describe('percentual', () => {
  it('deve ser uma função', () => {
    expect(typeof percentual).toBe('function');
  });

  it('Deve retornar a porcentagem de pokémons por cada tipo', () => {
    const poArray = [
    { 'type': 'normal' },
    { 'type': 'fire' },
    { 'type': 'water' },
    { 'type': 'grass' },
    { 'type': 'electric' },
    { 'type': 'bug' },
    { 'type': 'ground' },
    { 'type': 'poison' },
    { 'type': 'fighting' },
    { 'type': 'psychic' },
    { 'type': 'rock' },
    { 'type': 'flying' },
    { 'type': 'ghost' },
    { 'type': 'ice' },
    { 'type': 'dragon' },
    { 'type': 'steel' },
    { 'type': 'dark' },
    { 'type': 'fairy' }
  ];

  const tipoNormal = tiposPokemon.filter(pokemon => pokemon.type === 'normal');
  const tipoFire = tiposPokemon.filter(pokemon => pokemon.type === 'fire');
  const tipoWater = tiposPokemon.filter(pokemon => pokemon.type === 'water');
  const tipoGrass = tiposPokemon.filter(pokemon => pokemon.type === 'grass');
  const tipoElectric = tiposPokemon.filter(pokemon => pokemon.type === 'electric');
  const tipoBug = tiposPokemon.filter(pokemon => pokemon.type === 'bug');
  const tipoGround = tiposPokemon.filter(pokemon => pokemon.type === 'ground');
  const tipoPoison = tiposPokemon.filter(pokemon => pokemon.type === 'poison');
  const tipoFighting = tiposPokemon.filter(pokemon => pokemon.type === 'fighting');
  const tipoPsychic = tiposPokemon.filter(pokemon => pokemon.type === 'psychic');
  const tipoRock = tiposPokemon.filter(pokemon => pokemon.type === 'rock');
  const tipoFlying = tiposPokemon.filter(pokemon => pokemon.type === 'flying');
  const tipoGhost = tiposPokemon.filter(pokemon => pokemon.type === 'ghost');
  const tipoIce = tiposPokemon.filter(pokemon => pokemon.type === 'ice');
  const tipoDragon = tiposPokemon.filter(pokemon => pokemon.type === 'dragon');
  const tipoSteel = tiposPokemon.filter(pokemon => pokemon.type === 'steel');
  const tipoDark = tiposPokemon.filter(pokemon => pokemon.type === 'dark');
  const tipoFairy = tiposPokemon.filter(pokemon => pokemon.type === 'fairy');

    const resultadoFramboesa = percentual(poTipoFramboesa.length, poArray.length);
    const resultadoAmor = percentual(poTipoAmor.length, poArray.length);
    const resultadoAmora = percentual(poTipoAmora.length, poArray.length);

    expect(resultadoFramboesa).toEqual(30);
    expect(resultadoAmor).toEqual(30);
    expect(resultadoAmora).toEqual(50);
  });
});

