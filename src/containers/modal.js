import React from 'react';
import { useHistory } from 'react-router';
import { Modal } from '../components';

const ModalContainer = ({ title, text, primaryButton, secondaryButton, setEmailExist }) => {

    const history = useHistory();

    const clickSecondary = () => {
        history.push("/signup");
    };

    return (
        <Modal>
            <Modal.Group>
                <Modal.Title>{title}</Modal.Title>
                <Modal.Text>{text}</Modal.Text>

                <Modal.ButtonGroup>
                    <Modal.PrimaryButton onClick={() => { setEmailExist(true) }}>{primaryButton}</Modal.PrimaryButton>
                    <Modal.SecondaryButton onClick={clickSecondary}>{secondaryButton}</Modal.SecondaryButton>
                </Modal.ButtonGroup>
            </Modal.Group>
        </Modal>
    )
}

export default ModalContainer;
