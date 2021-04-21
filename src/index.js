import { store } from './store';
import {
  asyncIncrement,
  decrementCounter,
  incrementCounter,
} from './actions/counter';
import { changeTheme } from './actions/theme';

// Vars
const body = document.body;
const counterEl = document.getElementById('counter-value');
const addButton = document.getElementById('add-button');
const subButton = document.getElementById('subtract-button');
const asyncButton = document.getElementById('async-button');
const changeThemeButton = document.getElementById('change-theme-button');

// Events
addButton.addEventListener('click', () => {
  store.dispatch(incrementCounter());
});

subButton.addEventListener('click', () => {
  store.dispatch(decrementCounter());
});

asyncButton.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});

changeThemeButton.addEventListener('click', () => {
  const state = store.getState();
  let { themeMode } = state.theme;

  if (themeMode === 'light') {
    themeMode = 'dark';
  } else themeMode = 'light';

  store.dispatch(changeTheme(themeMode));
});

// Elements update
store.subscribe(() => {
  const {
    counter,
    theme: { themeMode, buttonsDisabled },
  } = store.getState();

  counterEl.textContent = counter;

  if (themeMode === 'light') {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }

  [addButton, subButton, asyncButton, changeThemeButton].forEach((btn) => {
    btn.disabled = buttonsDisabled;
  });
});

store.dispatch({ type: 'INITIAL_STATE' });
