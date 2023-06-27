import { pokeType } from '../src/data.js';

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


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
