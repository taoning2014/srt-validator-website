import srtValidator from './srtValidator';
import { cleanInfo, displayInfo, displayError } from './utils/info';
import CodeMirror from 'codemirror/lib/codemirror';
import CodeMirrorCSS from 'codemirror/lib/codemirror.css';

window.onload = () => {
  const captionFile = document.getElementById('caption-file');
  const captionValidatorBtn = document.getElementById('caption-validator');
  const infoContainer = document.getElementById('info');
  const captionEditor = CodeMirror.fromTextArea(
    document.getElementById('caption-editor'),
    {
      lineNumbers: true,
    }
  );

  infoContainer.onclick = function(event) {
    const line = Number(event.target.dataset.lineNumber);
    if (line) {
      captionEditor.scrollIntoView({ line });
    }
  };

  function updateEditor({ target: { result } } = {}) {
    captionEditor.getDoc().setValue(result);
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
    const srtString = captionEditor.getDoc().getValue();
    updateResult(srtValidator(srtString));
  });
};
