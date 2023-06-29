import { pokeType, pokeOrder } from '../src/data.js';

const pokeArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
const todos = 'allPoke';
const pokeChange = 'fire';

describe('pokeType', () => {
  it('é uma função', () => {
    expect(typeof pokeType).toBe('function');
  });

  it('deve retornar `todos os tipos`', () => {
    expect(pokeType(pokeArray, todos)).toEqual(pokeArray);
  });

  it('deve retornar `filtrado por tipo`', () => {
    expect(pokeType(pokeArray, pokeChange)).toEqual([{ type: 'fire' }]);
  });
});

const pokeArraySort = [{ name: 'abra' }, { name: 'aerodactyl' }, { name: 'aipom' }];
const pokeChangeA = 'abra';
const pokeChangeZ = 'zubat';

describe('pokeOrder - ordem alfabética', () => {
  it('é uma função', () => {
    expect(typeof pokeOrder).toBe('function');
  });

  it('deve retornar a lista em ordem alfabética de A-Z', () => {
    expect(pokeOrder(pokeArraySort, pokeChangeA)).toEqual([{ name: 'abra' }]);
  });

  it('deve retornar a lista em ordem alfabética de Z-A', () => {
    expect(pokeOrder(pokeArraySort, pokeChangeZ)).toEqual([{ name: 'zubat' }]);
  });
});

const pokeArrayOrder = [{ num: '001' }, { num: '002' }, { num: '003' }];
const pokeChangeNumAsc = '001';
const pokeChangeNumDesc = '251';

describe('pokeOrder - ordem numérica', () => {
  it('é uma função', () => {
    expect(typeof pokeOrder).toBe('function');
  });

  it('deve retornar a lista em ordem numérica crescente', () => {
    expect(pokeOrder(pokeArrayOrder, pokeChangeNumAsc)).toEqual([{ num: '001' }]);
  });

  it('deve retornar a lista em ordem numérica decrescente', () => {
    expect(pokeOrder(pokeArrayOrder, pokeChangeNumDesc)).toEqual([{ num: '251' }]);
  });
});
