LEFT_DIRECTIONS = {
  N: 'W',
  S: 'E',
  E: 'N',
  W: 'S',
  U: 'N',
  D: 'S'
}

RIGHT_DIRECTIONS = {
  N: 'E',
  S: 'W',
  E: 'S',
  W: 'N',
  U: 'S',
  D: 'N'
}

FORWARD_POSITIONS_ADD = {
  N: 'y',
  E: 'x',
  U: 'z',
}
FORWARD_POSITIONS_SUBSTRACT = {
  S: 'y',
  W: 'x',
  D: 'z'
}

class Chandrayaan {
  constructor() {
    this.inputs = [];
    this.direction = "N";
    this.position = { x: 0, y: 0, z: 0 };
  }

  addInput(char) {
    if (!["f", "b", "l", "r", "u", "d"].includes(char)) {
      console.log("Invalid Characters");
    } else {
      this.inputs.push(char);
    }
  }

  addPosition(key) {
    this.position[key]++;
  }

  substractPosition(key) {
    this.position[key]--;
  }

  runChandrayaan() {
    this.inputs.forEach((item) => {
      switch (item) {
        case "f":
          if (["N", "E", "U"].includes(this.direction)) {
            this.addPosition(FORWARD_POSITIONS_ADD[this.direction]);
          } else {
            this.substractPosition(FORWARD_POSITIONS_SUBSTRACT[this.direction]);
          }
          break;
        case "b":
          if (["N", "E", "U"].includes(this.direction)) {
            this.substractPosition(FORWARD_POSITIONS_ADD[this.direction]);
          } else {
            this.addPosition(FORWARD_POSITIONS_SUBSTRACT[this.direction]);
          }
          break;
        case "l":
          this.direction = LEFT_DIRECTIONS[this.direction];
          break;
        case "r":
          this.direction = RIGHT_DIRECTIONS[this.direction];
          break;
        case "u":
          this.direction = "U";
          break;
        case "d":
          this.direction = "D";
          break;
        default:
          console.log('Something went wrong')
      }
    });
  }
}

a = new Chandrayaan();
a.addInput("f");
a.addInput("r");
a.addInput("u");
a.addInput("b");
a.addInput("l");

a.runChandrayaan();

console.log("Direction => ", a.direction);
console.log("Position =>", Object.values(a.position));