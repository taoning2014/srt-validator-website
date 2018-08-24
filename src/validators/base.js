export default class BaseValidator {
  constructor(parsedJSON) {
    this.result = [];
    this.parsedJSON = parsedJSON;
  }

  // Need to be Override
  validate() {}

  // Push to result
  _addToResult({ message = '', lineNumber }) {
    this.result.push({ message, lineNumber, validator: this._validator });
  }
}
