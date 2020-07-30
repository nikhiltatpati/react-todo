import { todosRef, firebaseAppAuth } from '../firebase';

export const FETCH_TODOS_START = 'FETCH_TODOS_START';
export const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';
export const FETCH_TODOS_COMPLETED = 'FETCH_TODOS_COMPLETED';
export const FETCH_TODOS_EVENT = 'FETCH_TODOS_EVENT';

// this should set the state also on loading
export const addTodo = newToDo => {
	return dispatch => {
		// the user should be in a separate reducer and inserted from the create todo form,
		// for the time being i will insert the user here
		const todoWithUserInfo = {
			...newToDo,
			photoURL: firebaseAppAuth.currentUser.providerData[0].photoURL,
			displayName: firebaseAppAuth.currentUser.providerData[0].displayName
		};

		dispatch({ type: FETCH_TODOS_START });
		todosRef.push().set(todoWithUserInfo, error => {
			if (error) {
				dispatch({ type: FETCH_TODOS_ERROR, error: error });
			} else {
				dispatch({ type: FETCH_TODOS_COMPLETED });
			}
		});
	};
};

export const completeTodo = completeToDo => {
	return dispatch => {
		dispatch({ type: FETCH_TODOS_START });
		todosRef
			.child(completeToDo)
			.remove()
			.then(() => {
				dispatch({ type: FETCH_TODOS_COMPLETED });
			});
	};
};

// this should remove the state from loading
export const fetchTodos = () => {
	return dispatch => {
		todosRef.on('value', snapshot => {
			dispatch({
				type: FETCH_TODOS_EVENT,
				payload: snapshot.val()
			});
		});
	};
};
