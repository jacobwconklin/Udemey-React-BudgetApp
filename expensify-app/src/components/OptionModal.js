import React from 'react';
import Modal from 'react-modal';


// Stateless functional components can be written even simpler
// with the implicit return option used previously for SetState
// Modals support otherthings like onRequestClose that let the
// escape key and clicking outside the modal close a modal
const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption} 
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200} // set how long closing out the modal takes
        className="modal" // override the default modal styles
    >
        <h3 className='modal__title'>Selected Option</h3>
        {
            props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>
        }
        <button className='button' onClick={props.handleClearSelectedOption} >Okay</button>
    </Modal>
)
// Modal requires 2 props in order to work. isOpen set to a boolean and
// contentLabel, a name used for accessibility uses



export default OptionModal;
