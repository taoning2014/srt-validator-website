# Welcome SRT Parser

Sean Johnson, Shane Afsar and Tao Ning is buiding this parser

## Visit and play with our new UI: https://taoning2014.github.io/srt-validator/

## How to run this project (node version v8.9+)

1. `git clone https://github.com/taoning2014/srt-validator`
2. `cd srt-validator`
3. `npm install`
4. `npm run serve`

Open browser console, visit `http://127.0.0.1:8080/`, the console should log validation errors:

![UI](/image/UI.png)

![validation errors screenshot](/image/validation-errors.png)

## Running tests
Tests are automatically run on precommit, but you can also run them manually:
1. `npm test`
2. `npm run test:watch` - watches files for changes

## Deploy

Currently the app is deployed to [github pages](https://pages.github.com/), unber /docs in master branch. Before push to origin, do a `npm run build`, this command will build the latest code into /docs.

## TODOS
- [ ] Add hot reload.
- [ ] Add missing tests.
- [ ] Refactor UI.
- [ ] Add more logic to UI e.g. disable button before user upload or type in the textarea.
- [ ] Refactor prettier to only check changed files, add eslint to pre-commit.
- [ ] User should be able to download the valid caption file by SRTParser.serialize.
- [ ] Add deploy stript
- [ ] Improve page loading time for the new HTML5UP template
- [ ] MOST IMPORT :fire::fire::fire: play with UI, capture missing validation error (don't go too wild, just the regular errors, please)

## DONE
- [X] Implement a master function to: 1, call each validator 2, catch error in parser 3, aggregate errors and output.
- [X] Add tests.
- [X] Add precommit hook (eslint, prettier).
- [X] Implement file picker in UI, bind master validator function to onchange event, display error in UI.
- [X] Implement text editor in UI, which will parse the input file and display it in the editor. User can use it to change the caption content and valide it.
- [X] Add style to make UI looks better.
- [X] Add line numbers to the textarea

update parser / validators to capture those errors.
