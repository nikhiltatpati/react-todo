import React from 'react';
import moment from 'moment';
import { priority } from '../../constants/index';
import { Button } from 'react-bootstrap';

export default class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			intervalId: 0,
			timePassed: false,
			dueDateSoon: false
		};
	}

	componentDidMount() {
		this.timer();

		const intervalId = setInterval(this.timer.bind(this), 1000);
		this.setState({ intervalId: intervalId });
	}

	componentWillUnmount() {

		clearInterval(this.state.intervalId);
	}

	timer() {
		const currentDate = moment(new Date());
		const end = moment(this.props.todo.date);
		const duration = moment.duration(end.diff(currentDate));
		const days = duration.asDays();

		this.setState({
			timePassed: days < 0,
			dueDateSoon: days >= 0 && days <= 1
		});
	}

	handleComplete(id) {
		const { completeTodo } = this.props;
		completeTodo(id);
	}

	renderStatus() {
		const { timePassed, dueDateSoon } = this.state;
		return (
			<th>
				{/* time passed */}
				{timePassed && (
					<span>
						<i className='far fa-sad-tear' /> Passed
					</span>
				)}

				{/* less than a day to complete the task */}
				{dueDateSoon && (
					<span className='text-danger'>
						<i className='far fa-grimace' /> Hurry
					</span>
				)}

				{/* time has passed */}
				{!timePassed && !dueDateSoon && (
					<span>
						<i className='far fa-smile' /> Active
					</span>
				)}
			</th>
		);
	}

	render() {
		const { todo } = this.props;
		const { timePassed } = this.state;
		const imgStyles = {
			maxWidth: '30px',
			paddingRight: '5px'
		};

		return (
			<tr className={timePassed ? 'text-muted' : ''}>
				{this.renderStatus()}
				<td>{todo.name}</td>
				<td>
					<span className={priority[todo.priority].class}>
						{priority[todo.priority].title}
					</span>
				</td>
				<td>{moment(todo.date).format('YYYY-MM-DD hh:mm')}</td>
				<td>
					<Button
						variant='outline-secondary'
						size='sm'
						onClick={() => this.handleComplete(todo.id)}
					>
						Done
					</Button>
				</td>
				<td>
					{todo.photoURL && (
						<img style={imgStyles} src={todo.photoURL} alt='User' />
					)}
					{todo.displayName}
				</td>
			</tr>
		);
	}
}
