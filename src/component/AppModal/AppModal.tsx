import React from 'react'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#FBFBFB',
      borderRadius: 40,
    },
  };

interface AppModalProps {
    children: React.ReactNode
    modalIsOpen: boolean
}

const AppModal: React.FC<AppModalProps> = ({
    children,
    modalIsOpen,
}) => {
  
    return (
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Modal"
        >
          {children}
        </Modal>
    );
  }

  export default AppModal