import { pokeType,pokeOrder } from '../src/data.js';

const pArray = [{type: 'fire'}, {type: 'water'}, {type: 'ear'}];
const todos = 'allPoke';
const pChage = 'fire';

describe('pokeType', () => {
  it('is a function', () => {
    expect(typeof pokeType).toBe('function');
  });

  it('returns `tipo todos`', () => {
    expect(pokeType(pArray, todos)).toEqual(pArray);
  });

  it('returns `tipo filtrado`', () => {
    expect(pokeType(pArray, pChage)).toEqual([{type: 'fire'}]);
  });
});

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
  


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

