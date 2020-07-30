import { connect } from 'react-redux';

import Home from '../components/home/home';
import { addTodo, completeTodo, fetchTodos } from '../actions';

const mapStateToProps = state => ({
	todoData: state.todoData
});

export default connect(
	mapStateToProps,
	{ addTodo, completeTodo, fetchTodos }
)(Home);
