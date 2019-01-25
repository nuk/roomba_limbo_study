const roomba = require('./roomba')

const mockField = {
  seek: () => {
    [['#','#', '#'],
     ['#',null,'.'],
     ['#','#', '#']]
  }
}

test('moves over the only possibility', () => {
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('R')
})