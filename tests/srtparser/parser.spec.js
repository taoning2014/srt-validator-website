import { parseSRT } from 'srt-validator/srtparser';

const { test } = QUnit;

test('Simple caption file test', function(assert) {
  assert.deepEqual(parseSRT(
`1
0:0:0,0 --> 0:0:0,1
hello`
  ), [{ sequenceNumber: 1, text: 'hello', time: { start: 0, end: 1 }}]);
});
