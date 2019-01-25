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
    if (this.position.x > 0){
      return [
        ['#', '#' , '#'],
        ['.', null, '.'],
        ['.', '.' , '.']
      ];
    }
    return [
      ['#', '#' , '#'],
      ['#', null, '.'],
      ['#', '.' , '.']
    ];
  }

  move(direction) {
    this.position.x += 1
  }
}

module.exports = Environment;
