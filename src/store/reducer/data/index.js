import { FETCH_TODOS } from '../../constant';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      state[action.payload.place] = action.payload.todos;
      return { ...state };
    default:
      return state;
  }
};
