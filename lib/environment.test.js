const Environment = require('./environment');

test('it initialize in the left upper corner', () => {
  const env = new Environment(10,10);
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});

test('can move right', () => {
  const env = new Environment(10,10);
  env.move('R')
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['.', null, '.'],
    ['.', '.' , '.']
  ])
});


test('can move right and back to original position', () => {
  const env = new Environment(10,10);
  env.move('R')
  env.move('L')
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});

test('can move down', () => {
  const env = new Environment(10,10);
  env.move('D')
  expect(env.seek()).toEqual([
    ['#', '.' , '.'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});

test('can move down and back to original position', () => {
  const env = new Environment(10,10);
  env.move('D')
  env.move('U')
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});

test('can move down and back to original position', () => {
  const env = new Environment(10,10);
  env.move('D')
  env.move('U')
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});

test('can\'t move into the wall', () => {
  const env = new Environment(10,10);
  env.move('L')
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});
