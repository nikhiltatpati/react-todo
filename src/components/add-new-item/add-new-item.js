import React from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "../form/form";

export default class AddNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }

  formSubmitted = (item) => {
    this.props.formSubmit(item);
    this.toggleVisibility();
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="py-3">
        <Button
          className="mb-3"
          variant="outline-secondary"
          onClick={this.toggleVisibility.bind(this)}
        >
          Add TODO
        </Button>

        <Modal show={visible} onHide={this.toggleVisibility.bind(this)}>
          <Modal.Body>
            <Form formSubmit={this.formSubmitted} />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
