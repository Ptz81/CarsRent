import { useState } from 'react';
import { StyledLogoutBtn } from './LoadBtn.styled.js';
// import LoadModal from '../LoadModal/LoadModal.jsx';

const LoadBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.classList.add('no-scroll');
  };

  return (
    <>
      <StyledLogoutBtn type="button" onClick={handleOpenModal}>
        Log out
      </StyledLogoutBtn>
      {/* {isModalOpen && (
        <LoadModal
          closeModal={() => {
            setIsModalOpen(false);
            document.body.classList.remove('no-scroll');
          }}
        />
      )} */}
    </>
  );
};

export default LoadBtn;