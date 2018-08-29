import BaseValidator from './base';

export default class LineNumberValidator extends BaseValidator {
  constructor(...args) {
    super(...args);
    this._validator = 'LineNumberValidator';
  }

  validate(...args) {
    super.validate(...args);

    // need to start with 1
    if (this.parsedJSON[0].sequenceNumber !== 1) {
      this._addToResult({
        message: 'number of sequence need to start with 1',
        lineNumber: 1,
      });
    }

    // need to increment by 1
    // todo: refactor to reduce
    this.parsedJSON.map((obj, index) => {
      const { sequenceNumber } = obj;
      if (sequenceNumber !== index + 1) {
        this._addToResult({
          message: 'number of sequence need to increment by 1',
          lineNumber: index * 4 + 1, // FIX: text may larger than 1 line
        });
      }
    });

    return this.result;
  }
}
