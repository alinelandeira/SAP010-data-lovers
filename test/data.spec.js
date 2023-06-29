import { pokeType, pokeOrder } from '../src/data.js';
import { pokeType,pokeOrder } from '../src/data.js';

const pokeArray = [{ type: 'fire' }, { type: 'water' }, { type: 'grass' }];
const todos = 'allPoke';
const pokeChange = 'fire';

describe('pokeType', () => {
  it('é uma função', () => {
    expect(typeof pokeType).toBe('function');
  });

  it('returns `tipo todos`', () => {
    expect(pokeType(pArray, todos)).toEqual(pArray);
  });

  it('deve retornar `filtrado por tipo`', () => {
    expect(pokeType(pokeArray, pokeChange)).toEqual([{ type: 'fire' }]);
  });
});

<<<<<<< HEAD
const pokeArraySort = [{ name: 'abra' }, { name: 'aerodactyl' }, { name: 'aipom' }];
const pokeChangeA = 'abra';
const pokeChangeZ = 'zubat';
=======
const poArray = [{'num': '001','name': 'bulbasaur'}, {'num': '005','name': 'alossauro'}, {'num': '002','name': 'alossauro'}, {'num': '002', 'name': 'Venusaur'}, {'num': '003','name': 'duldosaur'}, {'num': '004','name': 'pokehcty'}];
const poChange = "nameAsc";
const poNChange = "nameDesc";
const poNuChange = "numberAsc";
const poNuDChange = "numberDesc";

describe('pokeOrder', () => {
  it('is a function', () => {
    expect(typeof pokeOrder).toBe('function');
  });
  it('returs `nomes ordem crescente`', () => {
    expect(pokeOrder(poArray, poChange)).toEqual([{'num': '002','name': 'alossauro'}, {'num': '001','name': 'bulbasaur'}, {'num': '003','name': 'duldosaur'}, {'num': '004','name': 'pokehcty'}]);
  });
  it('returs `nomes ordem decrescente`', () => {
    expect(pokeOrder(poArray, poNChange)).toEqual([{'num': '004','name': 'pokehcty'}, {'num': '003','name': 'duldosaur'}, {'num': '001','name': 'bulbasaur'}, {'num': '002','name': 'alossauro'}]);
  });
  it('returs `números ordem crescente`', () => {
    expect(pokeOrder(poArray, poNuChange)).toEqual([{'num': '001','name': 'bulbasaur'}, {'num': '002','name': 'alossauro'}, {'num': '003','name': 'duldosaur'}, {'num': '004','name': 'pokehcty'}]);
  });
  it('returs `números ordem decrescente`', () => {
    expect(pokeOrder(poArray, poNuDChange)).toEqual([{'num': '004','name': 'pokehcty'}, {'num': '003','name': 'duldosaur'} , {'num': '002','name': 'alossauro'}, {'num': '001','name': 'bulbasaur'}]);
  });
});
  

>>>>>>> 25e4a4b2c7ea8cf8ef2cea3d3af3dd656723d260

describe('pokeOrder - ordem alfabética', () => {
  it('é uma função', () => {
    expect(typeof pokeOrder).toBe('function');
  });

  it('deve retornar a lista em ordem alfabética de A-Z', () => {
    expect(pokeOrder(pokeArraySort, pokeChangeA)).toEqual([{ name: 'abra' }]);
  });
<<<<<<< HEAD

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
=======
}); */

>>>>>>> 25e4a4b2c7ea8cf8ef2cea3d3af3dd656723d260
