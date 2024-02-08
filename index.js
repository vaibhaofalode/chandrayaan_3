
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
  
}

a = new Chandrayaan();

a.addInput('f')
a.addInput('r')
a.addInput('u')
a.addInput('b')
a.addInput('l')

console.log('getInputs', a.getInputs())
console.log('getDirection => ', a.getDirection())
console.log('getPosition => ', a.getPosition())


