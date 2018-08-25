import parser from './parser';

export function parseSRT(fileContents) {
  return new parser(fileContents).parse();
};
