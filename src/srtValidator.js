// import parser
import SRTParser from './srtparser';

// import validators
import LineNumberValidator from './validators/lineNumberValidator';
import CaptionTimeSpanValidator from './validators/captionTimeSpanValidator';

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

function _runValidator(Validators, parsedObj) {
  return Validators.map(Validator => {
    const validator = new Validator(parsedObj);
    return validator.validate();
  }).reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []);
}

export default function srtValidator() {
  const result = [];
  let parsedObj;

  try {
    parsedObj = SRTParser.parse(srtString);
  } catch (error) {
    result.push(error);
  }

  if (result.length) {
    console.log('There is an error when parse the file');
    return result;
  }

  result.push(
    ..._runValidator([LineNumberValidator, CaptionTimeSpanValidator], parsedObj)
  );
  return result;
}
