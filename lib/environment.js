class Environment {
  constructor() {
    this.board = [
      ['.', '.', '.'],
      ['.', '.', '.'],
      ['.', '.', '.']
    ]
    this.position = {x: 0, y: 0};
  }

  seek() {
    const vector = [-1, 0, 1]
    const view = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]

    vector.forEach((incX) => {
      vector.forEach((incY) => {
        view[incY + 1][incX + 1] = this.computeValue(incY, incX)
      })
    });
    return view;
  }

  computeValue(incY, incX) {
    if (incY == 0 && incX == 0) {
      return null;
    } else if (this.board[this.position.y + incY] &&
        this.board[this.position.y + incY][this.position.x + incX]) {
      return this.board[this.position.y + incY][this.position.x + incX];
    } else {
       return '#';
    }
  }

  move(direction) {
    const movements = {
      R: [ 0,  1],
      L: [ 0, -1],
      D: [ 1,  0],
      U: [-1,  0]
    }
    this.position.x += movements[direction][1]
    this.position.y += movements[direction][0]
  }


}

module.exports = Environment;
