import {
	FETCH_TODOS_EVENT,
	FETCH_TODOS_START,
	FETCH_TODOS_ERROR,
	FETCH_TODOS_COMPLETED
} from '../actions';

export default (state = { todos: [], loading: true }, action) => {
	switch (action.type) {
		case FETCH_TODOS_START:
			return { ...state, loading: true };

		case FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.error };

		case FETCH_TODOS_COMPLETED:
			return { ...state, loading: false };

		case FETCH_TODOS_EVENT:
			// order by priority first
			if (!action.payload) return { ...state, todos: [], loading: false };
			const orderedTodos = Object.keys(action.payload)
				.map(key => {
					action.payload[key].id = key;
					return action.payload[key];
				})
				.sort((a, b) => b.priority.localeCompare(a.priority));
			return { ...state, todos: orderedTodos, loading: false };

		default:
			return state;
	}
};
