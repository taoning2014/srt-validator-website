import ParseError from './parseerror';
import { toMS } from './date';

const EOL = /\r?\n/;
const TIME_STAMP_REGEX = /(\d+):(\d{1,2}):(\d{1,2})[,\.](\d{1,3})/;

/**
 * Parses a given SRT file contents
 * @param  {String} file - Contents of an SRT file
 * @return {Array} - A list of subtitle metadata
 */
export default function parse(file) {
  const lines = file.split(EOL);

  const result = [];

  for (var i = 0; i < lines.length; i++) {
    const lineNumbers = { chunkStart: i };

    // First line
    lineNumbers.sequenceNumber = i;
    const sequenceNumber = parseSequenceNumber(lines[i], i);

    // Second line
    i++;
    lineNumbers.timeSpan = i;
    const time = parseTimeSpan(lines[i], i);

    // Text can span multiple lines, so consume all lines
    // until the separator

    i++;
    lineNumbers.text = i;
    const _linesOfText = [];
    while (lines[i] && lines[i].trim()) {
      _linesOfText.push(lines[i]);
      i++;
    }
    const text = _linesOfText.join('\n');
    if (!text) {
      throw new ParseError(`Missing caption text`, i);
    }

    lineNumbers.chunkEnd = i - 1;

    result.push({
      lineNumbers,
      sequenceNumber,
      time,
      text,
    });
  }

  return result;
}

/**
 * Parse a sequence number
 * @param  {String} sequenceNumber
 * @param  {Number} lineNumber - The line number currently being parsed
 * @return {Number}
 */
function parseSequenceNumber(sequenceNumber, lineNumber) {
  if (!sequenceNumber) {
    throw new ParseError(`Missing sequence number`, lineNumber);
  }
  const _sequenceNumber = Number(sequenceNumber);
  if (!Number.isInteger(_sequenceNumber)) {
    throw new ParseError(
      `Expected Integer for sequence number: ${sequenceNumber}`,
      lineNumber
    );
  }
  return _sequenceNumber;
}

/**
 * Parse a timespan into integer start and end values
 * @example
 * Input:
 * "00:00:02,820 --> 00:00:05,120"
 * Output:
 * { start: 2820, end: 5120 }
 *
 * @param  {String} timeSpan
 * @param  {Number} lineNumber - The line number currently being parsed
 * @return {Object}
 */
function parseTimeSpan(timeSpan, lineNumber) {
  if (!timeSpan) {
    throw new ParseError(`Missing time span: ${timeSpan}`, lineNumber);
  }
  const [start, end] = timeSpan.split(' --> ');
  if (!start || !end) {
    throw new ParseError(`Invalid time span: ${timeSpan}`, lineNumber);
  }
  return {
    start: parseTimeStamp(start, lineNumber),
    end: parseTimeStamp(end, lineNumber),
  };
}

/**
 * Parse a timestamp into an integer
 * @example
 * Input:
 * "00:00:02,820"
 * Output:
 * 2820
 * @param  {String} timeStamp - a timestamp from a timespan.
 * @param  {Number} lineNumber - The line number currently being parsed
 * @return {Number}
 */
export function parseTimeStamp(timeStamp, lineNumber) {
  const match = TIME_STAMP_REGEX.exec(timeStamp);
  if (!match) {
    throw new ParseError(`Invalid time stamp: ${timeStamp}`, lineNumber);
  }
  const [hours, minutes, seconds, millis] = match.slice(1).map(Number);
  return (
    hours * toMS.hour + minutes * toMS.minute + seconds * toMS.second + millis
  );
}
