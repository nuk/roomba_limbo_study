const roomba = require('./roomba')

const mockField = {
  seek: () => {
    return environment;
  }
}

let environment = []

test('moves right when its the only available path', () => {
  environment = [
    ['#','#', '#'],
    ['#',null,'.'],
    ['#','#', '#']
  ]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('R')
})

test('moves down when its the only available path', () => {
  environment = [
    ['#','#', '#'],
    ['#',null,'#'],
    ['#','.','#']
  ]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('D')
})

test('moves left when its the only available path', () => {
  environment = [
    ['#','.', '#'],
    ['#',null,'#'],
    ['#','#','#']
  ]
  let robot = new roomba(mockField)
  expect(robot.go()).toBe('L')
})

test('prefers to move right', () => {
  environment = [
    ['.','.', '.'],
    ['.',null,'.'],
    ['.','.', '.']
  ]

  let robot = new roomba(mockField)
  expect(robot.go()).toBe('R')
})

test('prefers to move down when right is blocked', () => {
  environment = [
    ['.','.', '.'],
    ['.',null,'#'],
    ['.','.', '.']
  ]

  let robot = new roomba(mockField)
  expect(robot.go()).toBe('D')
})

test('prefers to move left when right and down are blocked', () => {
  environment = [
    ['.','.', '.'],
    ['.',null,'#'],
    ['.','#', '.']
  ]

  let robot = new roomba(mockField)
  expect(robot.go()).toBe('L')
})