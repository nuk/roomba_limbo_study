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
    if (direction == 'R') {
      this.position.x += 1
    } else if (direction == 'L') {
      this.position.x -= 1
    } else if (direction == 'D') {
      this.position.y += 1
    }

  }


}

module.exports = Environment;
