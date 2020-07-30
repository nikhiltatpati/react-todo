import React from "react";
import moment from "moment";
import { Form, Button } from "react-bootstrap";
import { priority } from "../../constants/index";

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      priority: "0",
      date: moment().add(2, "hours").format("YYYY-MM-DDTHH:mm"),
      validated: false,
    };
  }

  inputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmitted = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ validated: true });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    const { name, priority, date } = this.state;
    const { formSubmit } = this.props;
    formSubmit({ name, priority, date });

    this.setState({
      name: "",
      priority: "",
      date: moment().format("YYYY-MM-DDTHH:mm"),
    });
  };

  renderPriorityOptions() {
    const options = Object.keys(priority).map((key) => {
      return (
        <option key={key} value={key}>
          {priority[key].title}
        </option>
      );
    });
    return options;
  }

  render() {
    const { name, priority, date, validated } = this.state;

    return (
      <Form noValidate validated={validated} onSubmit={this.formSubmitted}>
        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            required
            as="select"
            value={priority}
            onChange={this.inputChange}
            name="priority"
          >
            {this.renderPriorityOptions()}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="due-date">
          <Form.Label>Due date</Form.Label>
          <Form.Control
            required
            type="datetime-local"
            value={date}
            onChange={this.inputChange}
            name="date"
          />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            placeholder="Enter todo name"
            onChange={this.inputChange}
            name="name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a todo.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    );
  }
}
