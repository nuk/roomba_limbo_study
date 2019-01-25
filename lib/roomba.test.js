const roomba = require('./roomba')

const mockField = {
  seek: () => {
    return environment;
  }
}

let environment = [['#','#', '#'],['#',null,'.'],['#','#', '#']]

test('moves over the only possibility', () => {
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('R')
})

test('moves over the only possibility', () => {
  environment = [['#','#', '#'],['#',null,'#'],['#','.','#']]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('D')
})