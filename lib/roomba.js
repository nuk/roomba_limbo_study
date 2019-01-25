class Roomba {
  constructor(environment) {
    this.environment = environment
  }

  go() {
    const map = this.environment.seek()
    if(map[1][2] == '.') {
      return 'R';
    }

    if(map[2][1] == '.') {
      return 'D';
    }

    if(map[1][0] == '.') {
      return 'L';
    }

    if(map[0][1] == '.') {
      return 'U';
    }
  }
}

module.exports = Roomba;