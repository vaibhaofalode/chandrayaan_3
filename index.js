
class Chandrayaan {

  constructor() {
    this.inputs = [];
    this.direction = 'N';
    this.position = { x: 0, y: 0, z: 0 }; // [0, 0, 0]
  }

  getPosition() {
    return this.position;
  }

  getDirection() {
    return this.direction;
  }

  getInputs() {
    return this.inputs;
  }

  addInput(char) {
    if (!['f', 'b', 'l', 'r', 'u', 'd'].includes(char)) {
      console.log('Invalid Characters');
    } else {
      this.inputs.push(char);
    }
  }

  addPosition(key) {
    this.position[key] = this.position[key] + 1
  }

  substractPosition(key) {
    this.position[key] = this.position[key] - 1
  }

  runChandrayaan() {
    console.log(this.inputs)
    this.inputs.forEach(item => {
      switch (item) {
        case 'f':
          switch (this.direction) {
            case 'N':
              this.addPosition('y')
              break
            case 'S':
              this.substractPosition('y')
              break
            case 'E':
              this.addPosition('x')
              break
            case 'W':
              this.substractPosition('x')
              break
            case 'U':
              this.addPosition('z')
              break
            case 'D':
              this.substractPosition('z')
              break
            default:
          }
          break;
        case 'b':
          switch (this.direction) {
            case 'N':
              this.substractPosition('y')
              break
            case 'S':
              this.addPosition('y')
              break
            case 'E':
              this.substractPosition('x')
              break
            case 'W':
              this.addPosition('x')
              break
            case 'U':
              this.substractPosition('z')
              break
            case 'D':
              this.addPosition('z')
              break
            default:
          }
          break;
        case 'l':
          switch (this.direction) {
            case 'N':
              this.direction = 'W'
              break
            case 'S':
              this.direction = 'E'
              break
            case 'E':
              this.direction = 'N'
              break
            case 'W':
              this.direction = 'S'
              break
            case 'U':
              this.direction = 'N'
              break
            case 'D':
              this.direction = 'S'
              break
            default:
          }
          // console.log('Left')
          console.log('this.direction', this.direction)
          break;
        case 'r':
          switch (this.direction) {
            case 'N':
              this.direction = 'E'
              break
            case 'S':
              this.direction = 'W'
              break
            case 'E':
              this.direction = 'S'
              break
            case 'W':
              this.direction = 'N'
              break
            case 'U':
              this.direction = 'S'
              break
            case 'D':
              this.direction = 'N'
              break
            default:
          }
          // console.log('Right')
          break;
        case 'u':
          this.direction = 'U'
          break;
        case 'd':
          this.direction = 'D'
          break;
        default:
        // code block
      }
    });
  }

}

a = new Chandrayaan();
a.addInput('f')
a.addInput('r')
a.addInput('u')
a.addInput('b')
a.addInput('l')

a.runChandrayaan();

// console.log('getInputs', a.getInputs())
console.log('getDirection => ', a.getDirection())
console.log('getPosition => ', Object.values(a.getPosition()))