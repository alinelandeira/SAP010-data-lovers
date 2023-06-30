import { pokeType, pokeOrder } from '../src/data.js';

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