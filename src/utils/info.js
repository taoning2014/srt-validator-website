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

export function displayError(el, { message, lineNumber, validator } = {}) {
  const li = document.createElement('li');
  const textNode = document.createTextNode(
    `${message} at ${lineNumber} from ${validator}`
  );
  li.appendChild(textNode);
  li.classList.add('caption-validator__info', 'caption-validator__info--error');
  el.appendChild(li);
}
