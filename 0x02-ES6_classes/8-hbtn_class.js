export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // The class is cast to a Number, return the size
    valueOf() {
      return this._size;
    }
  
    // The class is cast to a String, return the location
    toString() {
      return this._location;
    }
  }
  