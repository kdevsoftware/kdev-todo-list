import { todosRefAtHome, todosRefAtOffice } from '../../config/firebase';
import { HOME, FETCH_TODOS } from '../constant';

export const addToDo = (place, newToDo) => async dispatch => {
  const todosRef = place === HOME ? todosRefAtHome : todosRefAtOffice;
  todosRef.push().set(newToDo);
};

export const completeToDo = (place, completeToDoId) => async dispatch => {
  const todosRef = place === HOME ? todosRefAtHome : todosRefAtOffice;
  todosRef.child(completeToDoId).remove();
};

export const fetchToDos = place => async dispatch => {
  const todosRef = place === HOME ? todosRefAtHome : todosRefAtOffice;

  todosRef.on('value', snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: { place, todos: snapshot.val() }
    });
  });
};
