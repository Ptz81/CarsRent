import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonSecondary} from '../../styles/shared.jsx';

export const ButtonMain = ({ type, buttonName, onClick, buttonStyle }) => {
  let ButtonComponent;
  
  if (buttonStyle === 'active') {
    ButtonComponent = ButtonPrimary;
  } else if(buttonStyle === 'secondary') {
    ButtonComponent = ButtonSecondary; 
  }

  return (
    <ButtonComponent
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </ButtonComponent>
  );
};

ButtonMain.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
};