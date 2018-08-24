import BaseValidator from './base';

export default class LineNumberValidator extends BaseValidator {
  constructor(...args) {
    super(...args);
    this._validator = 'LineNumberValidator';
  }

  validate() {
    if (!this.parsedJSON.length) {
      return this.result;
    }

    // need to start with 1
    if (this.parsedJSON[0] !== 1) {
      this._addToResult({
        message: 'number of sequence need to start with 1',
        lineNumber: 1,
      });
    }

    // need to increment by 1
    // todo: refactor to reduce
    let curSequenceNum = 1;
    this.parsedJSON.map((obj, index) => {
      if (index === 0) {
        return;
      }

      const { sequenceNumber } = obj;
      if (sequenceNumber !== curSequenceNum + 1) {
        this._addToResult({
          message: 'number of sequence need to increment by 1',
          lineNumber: index * 4 + 1, // FIX: text may larger than 1 line
        });
      }

      curSequenceNum += 1;
    });

    return this.result;
  }
}
