import * as React from "react"
import Modal from 'react-bootstrap/Modal'
import "./some-modal.modal.scss"

export default class SomeModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { phone: '', email: '', name: '', sent: false }
  }
  render() {
    return (
      <Modal
        show={this.props.isOpen}
        onHide={this.props.closeModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Modal Title
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modal Body
        </Modal.Body>
        <Modal.Footer>
          Modal Footer
        </Modal.Footer>
      </Modal>
    )
  }
}
