// import parser
import SRTParser from './srtparser';

// import validators
import LineNumberValidator from './validators/lineNumberValidator';
import CaptionTimeSpanValidator from './validators/captionTimeSpanValidator';

function _runValidator(Validators, parsedObj) {
  return Validators.map(Validator => {
    const validator = new Validator(parsedObj);
    return validator.validate();
  }).reduce((acc, cur) => {
    acc.push(...cur);
    return acc;
  }, []);
}

export default function srtValidator(srtString) {
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
