export default class SRTParser {
  constructor(file) {
    this.file = file;

    this.EOL = /\r?\n/;
    this.CHUNK_DELIMETER = /\r?\n\r?\n/;
  }

  parse() {
    const chunks = this.file.split(this.CHUNK_DELIMETER);
    return chunks.map(chunk => this._parseChunk(chunk));
  }

  _parseChunk(chunk) {
    const [sequenceNumber, timeSpan, text] = chunk.split(this.EOL);
    if (!text) {
      throw new Error(`Missing subtitle text: ${chunk}`);
    }
    return {
      text,
      sequenceNumber: this._parseSequenceNumber(sequenceNumber),
      time: this._parseTimeSpan(timeSpan),
    };
  }

  _parseSequenceNumber(sequenceNumber) {
    if (!sequenceNumber) {
      throw new Error(`Missing Line Number: ${chunk}`);
    }
    const _sequenceNumber = Number(sequenceNumber);
    if (!Number.isInteger(_sequenceNumber)) {
      throw new Error(`Expected Integer for line number: ${chunk}`);
    }
    return _sequenceNumber;
  }

  _parseTimeSpan(timeSpan) {
    if (!timeSpan) {
      throw new Error(`Missing time span: $timeSpan}`);
    }
    const [start, end] = timeSpan.split(' --> '); // ---> or -> aslo need a space between `-->`
    if (!start || !end) {
      throw new Error(`Invalid TimeSpan: ${timeSpan}`);
    }
    return {
      start: this._parseTimeStamp(start),
      end: this._parseTimeStamp(end),
    };
  }

  _parseTimeStamp(timeStamp) {
    const match = /(\d+):(\d+):(\d+),(\d+)/.exec(timeStamp);
    if (!match) {
      throw new Error('Invalid Timestamp: ' + timeStamp);
    }
    const [hours, minutes, seconds, millis] = match.slice(1).map(Number);
    return hours * 36e5 + minutes * 6e4 + seconds * 1e3 + millis;
  }
}