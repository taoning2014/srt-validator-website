import BaseValidator from './base';

export default class CaptionTimeSpanValidator extends BaseValidator {
  constructor(...args) {
    super(...args);
    this._validator = 'CaptionTimeSpanValidator';
  }

  validate(...args) {
    super.validate(...args);

    let previousEndTime = 0;
    this.parsedJSON
      .map(({ time: { start, end } }) => ({ start, end }))
      .map(({ start, end }, index) => {
        if (start >= end) {
          this._addToResult({
            message: 'start time should be less than end time',
            lineNumber: index * 4 + 2,
          });
        }

        return { start, end };
      })
      .map(({ start, end }, index) => {
        if (index === 0) {
          previousEndTime = end;
          return;
        }

        if (previousEndTime >= start) {
          this._addToResult({
            message: 'start time should be less than previous start time',
            lineNumber: index * 4 + 2,
          });
        }

        previousEndTime = end;
      });

    return this.result;
  }
}
