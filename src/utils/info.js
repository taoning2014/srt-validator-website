import ParseError from 'srt-validator/srtparser/parseerror';

export function cleanInfo(el) {
  while (el.lastChild) {
    el.removeChild(el.lastChild);
  }
}

export function displayInfo(el, { message } = {}) {
  const li = document.createElement('li');
  const textNode = document.createTextNode(message);
  li.appendChild(textNode);
  li.classList.add('caption-validator__info');
  el.appendChild(li);
}

export function displayError(el, error) {
  const { message, lineNumber, validator } = error;

  let errorText;
  if (error instanceof ParseError) {
    errorText = `Parse Error: ${message} on line ${lineNumber}`;
  } else {
    errorText = `${validator}: ${message} on line ${lineNumber}`;
  }

  const li = document.createElement('li');
  const textNode = document.createTextNode(errorText);
  li.appendChild(textNode);
  li.classList.add('caption-validator__info', 'caption-validator__info--error');
  el.appendChild(li);
}
