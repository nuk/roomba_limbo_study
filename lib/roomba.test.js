const roomba = require('./roomba')

const mockField = {
  seek: () => {
    return environment;
  }
}

let environment = [['#','#', '#'],['#',null,'.'],['#','#', '#']]

test('moves right when its the only available path', () => {
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('R')
})

test('moves down when its the only available path', () => {
  environment = [['#','#', '#'],['#',null,'#'],['#','.','#']]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('D')
})

test('moves left when its the only available path', () => {
  environment = [['#','.', '#'],['#',null,'#'],['#','#','#']]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('L')
})