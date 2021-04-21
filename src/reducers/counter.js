import { DECREMENT, INCREMENT } from '../actions/counter';

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
