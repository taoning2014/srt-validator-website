# Welcome SRT Parser

Sean Johnson, Shane Afsar and Tao Ning is buiding this parser

## How to run this project (node version v8.9+)

1. `git clone https://github.com/taoning2014/srt-validator`
2. `cd srt-validator`
3. `npm install`
4. `npm run serve`

Open browser console, visit `http://127.0.0.1:8080/`, the console should log validation errors:

![validation errors screenshot](/image/validation-errors.png)

## Running tests
Tests are automatically run on precommit, but you can also run them manually:
1. `npm test`
2. `npm run test:watch` - watches files for changes

## TODOS

- [X] Implement a master function to: 1, call each validator 2, catch error in parser 3, aggregate errors and output
- [X] Add tests
- [X] Add precommit hook (eslint, prettier)
- [ ] Implement file picker in UI, bind master validator function to onchange event, display error in UI
- [ ] Implement text editor in UI, which will parse the input file and display it in the editor. User can use it to change the caption content and valide it.
- [ ] Add hot reload
