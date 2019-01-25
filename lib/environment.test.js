const Environment = require('./environment');

test('it initialize with the room size', () => {
  const env = new Environment(10,10);
  expect(env.seek()).toEqual([
    ['#', '#' , '#'],
    ['#', null, '.'],
    ['#', '.' , '.']
  ])
});
