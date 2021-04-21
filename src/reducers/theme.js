import {
  CHANGE_THEME,
  DISABLE_BUTTONS,
  ENABLE_BUTTONS,
} from '../actions/theme';

const initialState = {
  themeMode: 'light',
  buttonsDisabled: false,
};

export function themeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_THEME:
      return { ...state, themeMode: payload };
    case DISABLE_BUTTONS:
      return { ...state, buttonsDisabled: true };
    case ENABLE_BUTTONS:
      return { ...state, buttonsDisabled: false };
    default:
      return state;
  }
}
