import { disableButtons, enableButtons } from './theme';

// Types
export const DECREMENT = 'DECREMENT';

export const INCREMENT = 'INCREMENT';

export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';

// Action
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const asyncIncrement = () => {
  return (dispatch) => {
    dispatch(disableButtons());
    setTimeout(() => {
      dispatch({ type: INCREMENT });
      dispatch(enableButtons());
    }, 1500);
  };
};
