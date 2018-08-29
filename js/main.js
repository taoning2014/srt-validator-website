import srtValidator from './srtValidator';
import { cleanInfo, displayInfo, displayError } from './utils/info';

window.onload = () => {
  const captionFile = document.getElementById('caption-file');
  const captionEditor = document.getElementById('caption-editor');
  const captionValidatorBtn = document.getElementById('caption-validator');
  const infoContainer = document.getElementById('info');

  function updateEditor({ target: { result } } = {}) {
    captionEditor.value = result;
  }

  function updateResult(result) {
    cleanInfo(infoContainer);

    if (!result.length) {
      displayInfo(infoContainer, { message: 'no errors in your caption file' });
    } else {
      result.forEach(errorInfo => {
        displayError(infoContainer, errorInfo);
      });
    }
  }

  captionFile.addEventListener('change', event => {
    const inputFile = event.target.files[0];
    if (!inputFile) {
      return;
    }

    const reader = new FileReader();
    reader.onload = updateEditor;
    reader.readAsText(inputFile);
  });

  captionValidatorBtn.addEventListener('click', () => {
    const srtString = captionEditor.value;
    updateResult(srtValidator(srtString));
  });
};
