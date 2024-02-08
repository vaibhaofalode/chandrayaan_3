
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
          break;
        case 'l':
          console.log('Left')
          break;
        case 'r':
          console.log('Right')
          break;
        case 'u':
          console.log('Up')
          break;
        case 'd':
          console.log('Down')
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



