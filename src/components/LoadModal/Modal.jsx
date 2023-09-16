// import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 540px;
  height: 720px;
  position: relative;
  padding: 20px;
  overflow-y: auto;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;

const Modal = ({ isOpen, closeModal, children}) => {
  
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".ModalContent")) {
//         onClose();
//       }
//     };
// const handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       onClose();
//     }
//   };
//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent className="ModalContent" onClick={handleModalClick}>
            <CloseButton onClick={closeModal}>
              <FaTimes size={24} />
            </CloseButton>
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
        
  
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
