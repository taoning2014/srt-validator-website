# Welcome SRT Parser

Sean Johnson, Shane Afsar and Tao Ning is buiding this parser

## How to run this project (node version v8.9+)

1. `git clone https://github.com/taoning2014/srt-validator`
2. `cd srt-validator`
3. `npm install`
4. `npm run serve`

Open browser console, visit `http://127.0.0.1:8080/`, the console should logout validation errors:

![validation errors screenshot](/image/validation-errors.png)

## TODOS

- [] Implement a master function to: 1, call each validator 2, catch error in parser 3, aggregate errors and output
- [] Implement file picker in UI, bind master validator function to onchange event, display error in UI
- [] Add precommit hook (eslint, prettier)
- [] Add tests