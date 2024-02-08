
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
      console.log('Invalid Character');
    } else {
      this.inputs.push(char);
    }
  }

  runChandrayaan() {
    this.inputs.forEach(item => {
      switch (item) {
        case 'f':
          console.log('Forward')
          switch (this.direction) {
            case 'N':
              this.position.y = this.position.y + 1
              break
            case 'S':
              this.position.y = this.position.y - 1
              break
            case 'E':
              this.position.x = this.position.x + 1
              break
            case 'W':
              this.position.x = this.position.x - 1
              break
            case 'U':
              this.position.z = this.position.z + 1
              break
            case 'D':
              this.position.z = this.position.z - 1
              break
            default:
          }
          break;
        case 'b':
          console.log('Backward')
          switch (this.direction) {
            case 'N':
              this.position.y = this.position.y - 1
              break
            case 'S':
              this.position.y = this.position.y + 1
              break
            case 'E':
              this.position.x = this.position.x - 1
              break
            case 'W':
              this.position.x = this.position.x + 1
              break
            case 'U':
              this.position.z = this.position.z - 1
              break
            case 'D':
              this.position.z = this.position.z + 1
              break
            default:
          }
          break;
        case 'l':
          console.log('Left')
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
          break;
        case 'r':
          console.log('Right')
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
          break;
        case 'u':
          console.log('Up')
          this.direction = 'U'
          break;
        case 'd':
          console.log('Down')
          this.direction = 'D'
          break;
        default:
        // my code
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

console.log('getInputs', a.getInputs())
console.log('getDirection => ', a.getDirection())
console.log('getPosition => ', a.getPosition())



