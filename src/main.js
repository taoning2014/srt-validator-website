import SRTParser from './parser';
import LineNumberValidator from './validators/captionTimeSpanValidator';
import CaptionTimeSpanValidator from './validators/lineNumberValidator';

const srtString = `0
00:00:00,970 --> 00:00:03,000
Jellyfish at the Monterey Aquarium

2
00:00:04,080 --> 00:00:06,080
Dude - get out of the way!

3
00:00:09,350 --> 00:00:13,350
Shaky Hands...

5
00:00:17,000 --> 00:00:22,000
Ah yes, this is better...

5
00:00:24,825 --> 00:00:23,825
Pro Tip: Turn off the camera flash!

5
00:00:0,000 --> 00:00:41,000
Thanks for watching and I hope you'll have fun with the VideoSub library!`;

const srtParser = new SRTParser(srtString);
console.log('====parser result====');
const parsedObj = srtParser.parse();
console.log(JSON.stringify(parsedObj));

console.log('====lineNumberValidator result====');
const lineNumberValidator = new LineNumberValidator(parsedObj);
console.log(lineNumberValidator.validate());

console.log('====captionTimeSpanValidator result====');
const captionTimeSpanValidator = new CaptionTimeSpanValidator(parsedObj);
console.log(captionTimeSpanValidator.validate());
