import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import useStore from "../../store/AppContext.jsx";
import useForms from "../../store/useForms.jsx";
import { FormattedMessage } from "react-intl";

import "./ModalForm.css";

const ModalForm = () => {
  const { store, action } = useStore();
  const { show } = store;
  const { handleClose, setShow } = action;
  const { formInput, myHandleInput } = useForms();

  const handleLog = () => {
    console.log(formInput);
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FormattedMessage id="contactModalTittle"></FormattedMessage></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label><FormattedMessage id="contactModalName"></FormattedMessage></Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formInput[name]}
                placeholder={<FormattedMessage id="contactModalName"></FormattedMessage>}
                autoFocus
                onChange={myHandleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><FormattedMessage id="contactModalEmail"></FormattedMessage></Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formInput[name]}
                placeholder="name@example.com"
                onChange={myHandleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label><FormattedMessage id="contactModalCity"></FormattedMessage></Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formInput[name]}
                placeholder={<FormattedMessage id="contactModalCity"></FormattedMessage>}
                onChange={myHandleInput}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label><FormattedMessage id="contactModalTextHeader"></FormattedMessage></Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formInput[name]}
                rows={3}
                onChange={myHandleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
              <FormattedMessage id="buttonCancel"></FormattedMessage>
          </Button>
          <Button variant="success" onClick={handleLog}>
              <FormattedMessage id="buttonSendMessage"></FormattedMessage>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
