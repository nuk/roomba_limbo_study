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
