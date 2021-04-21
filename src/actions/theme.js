// Types
export const CHANGE_THEME = 'CHANGE_THEME';

export const ENABLE_BUTTONS = 'ENABLE_BUTTONS';

export const DISABLE_BUTTONS = 'DISABLE_BUTTONS';

// Action
export const changeTheme = (themeMode) => {
  return {
    type: CHANGE_THEME,
    payload: themeMode,
  };
};

export const enableButtons = () => {
  return {
    type: ENABLE_BUTTONS,
  };
};

export const disableButtons = () => {
  return {
    type: DISABLE_BUTTONS,
  };
};
