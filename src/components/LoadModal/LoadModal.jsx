// // import PropTypes from 'prop-types';
// // import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { StyledIconClose } from '../UserInfoModal/UserInfoModal';
// // import {
// //   StyledBackdrop,
// //   StyledModal,
// //   LogoutModalContainer,
// //   LogoutTitle,
// //   LogoutButton,
// // } from './LoadModal.styled.js';
// // import { xCross } from '../Images/index.js';
// // import { logOutThunk } from '../../redux/thunks';

// // const LoadModal = ({ closeModal }) => {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     localStorage.setItem('token', '');
// //     localStorage.clear();
// //     dispatch(logOutThunk());
// //     window.location.reload();
// //     navigate('/');
// //     closeModal();
// //   };

// //   const handleCancel = () => {
// //     closeModal();
// //   };

// //   return (
// //     <StyledBackdrop>
// //       <StyledModal>
// //         <StyledIconClose src={xCross} alt="close" onClick={closeModal} />
// //         <LogoutTitle>Are you sure you want to log out?</LogoutTitle>
// //         <LogoutModalContainer>
// //           <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
// //           <LogoutButton onClick={handleCancel}>Cancel</LogoutButton>
// //         </LogoutModalContainer>
// //       </StyledModal>
// //     </StyledBackdrop>
// //   );
// // };

// // LoadModal.propTypes = {
// //   closeModal: PropTypes.func.isRequired,
// // };

// // export default LoadModal;
// import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
// import { StyledIconClose } from '../UserInfoModal/UserInfoModal';
// import {
//   StyledBackdrop,
//   StyledModal,
//   LogoutModalContainer,
//   LogoutTitle,
//   LogoutButton,
// } from './LoadModal.styled.js';
// import { xCross } from '../Images/index.js';

// const LoadModal = ({ closeModal }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.reload();
//     navigate('/');
//     closeModal();
//   };

//   const handleCancel = () => {
//     closeModal();
//   };

//   return (
//     <StyledBackdrop>
//       <StyledModal>
//         <StyledIconClose src={xCross} alt="close" onClick={closeModal} />
//         <LogoutTitle>Are you sure you want to log out?</LogoutTitle>
//         <LogoutModalContainer>
//           <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
//           <LogoutButton onClick={handleCancel}>Cancel</LogoutButton>
//         </LogoutModalContainer>
//       </StyledModal>
//     </StyledBackdrop>
//   );
// };

// LoadModal.propTypes = {
//   closeModal: PropTypes.func.isRequired,
// };

// export default LoadModal;
