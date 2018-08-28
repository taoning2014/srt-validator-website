# Welcome SRT Parser

Sean Johnson, Shane Afsar and Tao Ning is buiding this parser

## Visit and play with our new UI: https://taoning2014.github.io/srt-validator/

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

## Deploy

Currently the app is deployed to [github pages](https://pages.github.com/), follow steps:

1. Commit changes in development branch, check out master, rebase with develoment branch.
2. Delete the exising gh-pages, and checkout new branch with same name from master. gh-pages is a special branch that github used to deploy static website.
3. Run `npm run build`, this will build app in production environment, the build result is under `/dist`.
4. Run `cp -R dist/* ./`.
5. Add and commit change: `git add . && git commit -m 'deploy'`.
6. Push to github: `git push --set-upstream origin gh-pages --force`.

## TODOS

- [X] Implement a master function to: 1, call each validator 2, catch error in parser 3, aggregate errors and output
- [X] Add tests
- [X] Add precommit hook (eslint, prettier)
- [X] Implement file picker in UI, bind master validator function to onchange event, display error in UI
- [X] Implement text editor in UI, which will parse the input file and display it in the editor. User can use it to change the caption content and valide it.
- [ ] Add hot reload
