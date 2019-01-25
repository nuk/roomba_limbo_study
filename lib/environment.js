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
        let value;
        if (incY == 0 && incX == 0) {
          value = null;
        } else if (this.board[this.position.y + incY] &&
            this.board[this.position.y + incY][this.position.x + incX]) {
          value = this.board[this.position.y + incY][this.position.x + incX];
        } else {
           value = '#';
        }
        view[incY + 1][incX + 1] = value
      })
    });
    return view;
  }

  move(direction) {
    this.position.x += 1
  }
}

module.exports = Environment;
