export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
