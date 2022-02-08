import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { css } from '@codemirror/lang-css';

// https://github.com/eslint/website/blob/22488d817a09f0bacea3b32c82c8bc7dd72eb2d9/src/js/demo/utils/unicode.js
function encodeToBase64(text) {
  return window.btoa(unescape(encodeURIComponent(text)));
}

function decodeFromBase64(base64) {
  return decodeURIComponent(escape(window.atob(base64)));
}

function getUrlState() {
  const maxHashLength = 300000;
  const validConfigs = new Set([
    'cssnano-preset-lite',
    'cssnano-preset-default',
    'cssnano-preset-advanced',
  ]);

  /* Reject huge hashes
     (longer than the whole Bootstrap CSS) */
  if (window.location.hash.length > maxHashLength) {
    return null;
  }
  try {
    const parsed = JSON.parse(
      decodeFromBase64(window.location.hash.replace(/^#/u, ''))
    );
    if (Object.keys(parsed).length > 2) {
      return null;
    }
    if (!validConfigs.has(parsed.config)) {
      return null;
    }
    if (typeof parsed.input !== 'string') {
      return null;
    }
    return parsed;
  } catch (err) {
    return null;
  }
}

function setError(err) {
  console.log(err);
}

function saveState(inputView) {
  const serializedState = JSON.stringify({
    input: inputView.state.doc.sliceString(0, inputView.state.doc.length),
    config: config,
  });

  if (typeof window !== 'undefined') {
    window.location.hash = encodeToBase64(serializedState);
  }
}

const urlState = getUrlState();
const { input, config } = urlState || {
  input: '/* write your css below */',
  config: 'cssnano-preset-default',
};

const inputView = new EditorView({
  state: EditorState.create({
    doc: input,
    extensions: [basicSetup, css()],
  }),
  parent: document.getElementById('inputArea'),
});

const outputView = new EditorView({
  state: EditorState.create({
    doc: '/* your optimized output here */',
    extensions: [basicSetup, css(), EditorView.editable.of(false)],
  }),
  parent: document.getElementById('outputArea'),
});

const presetSelector = document.getElementById('presetSelector');
presetSelector.value = config;

document.getElementById('runButton').addEventListener('click', () => {
  const userInput = inputView.state.doc.sliceString(
    0,
    inputView.state.doc.length
  );
  import('./playground-runner.js').then((module) => {
    module.runOptimizer(userInput, outputView, presetSelector.value, setError);
  });
});
