
class Chandrayaan {

  constructor() {
    this.inputs = '';
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

}

a = new Chandrayaan();

console.log('getInputs', a.getInputs())
console.log('getDirection => ', a.getDirection())
console.log('getPosition => ', a.getPosition())


