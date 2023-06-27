import { pokeType, pokeOrder } from '../src/data.js';

const pokeArray = [{type: 'fire'}, {type: 'water'}, {type: 'ear'}];
const todos = 'allPoke';
const pokeChage = 'fire';


describe('pokeType', () => {
  it('is a function', () => {
    expect(typeof pokeType).toBe('function');
  });

  it('returns `tipo todos`', () => {
    expect(pokeType(pokeArray, todos)).toEqual(pArray);
  });

  it('returns `tipo filtrado`', () => {
    expect(pokeType(pokeArray, pokeChage)).toEqual([{type: 'fire'}]);
  });
});

/*const pokeArraySort = [{name: 'abra'}, {type: 'mew'}, {type: 'chikorita'}];
const pokeChangeA = 'abra'; 
const pokeChangeZ = 'z'; 

describe('pokeOrder', () => {
  it('is a function', () => {
    expect(typeof pokeOrder).toBe('function');
  });

  it('returns `ordem alfabetica de A-Z`', () => {
    expect(pokeOrder(pokeArraySort, pokeChangeA)).toBe([{name: 'abra'}]);
  });
}); 

describe('pokeOrder', () => {
  it('returns `ordem alfabetica de Z-A', () => {
    expect(pokeOrder(pokeArraySor, pokeChangeZ)).toBe([{name: 'mew'}]);
  });
}); 

const pokeArraySort = [{num: '001'}, {num: '002'}, {num: '003'}];
const pokeChangeNumAsc = '001'; 
const pokeChangeNumDesc = '003'; 

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
