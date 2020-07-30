import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default function store() {
	return createStore(reducer, applyMiddleware(thunk));
}
