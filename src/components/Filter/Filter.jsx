import styled from "@emotion/styled"
import PropTypes from 'prop-types';
import { colors } from "../../styles/GlobalStyles";

const inputPrimary= styled.input`
max-width: 166px;
  padding: 18px 24px;
  padding-left: 70px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  font-size: 14px;
  border-radius: 14px 0 0 14px;
  background: ${colors.disabled};
  color: ${colors.textMainColor};
  outline: none;
  z-index:9;
  @media only screen and (min-width: 768px) {
    width: 160px;
    padding: 15px;
    padding-left: 70px;
    font-size: 17px;
  }
  
 :focus{
      border: 1px solid rgba(243, 243, 243, .5);
     
    }
  ::placeholder{
        color: #f3f3f3;
        font-size: 14px;
        @media only screen and (min-width: 768px){
    padding: 15px ;
    font-size: 17px;
  }
    }
    :focus::placeholder {
    color: transparent; 
  }
  ::before {
    content: "";
    background-repeat: no-repeat;
    background-position: left center; 
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px; 
    width: 16px;
    height: 16px;
    z-index: 10; 
  }
`;
const inputSecondary = styled(inputPrimary)`
border-radius: 0 14px 14px 0;
border-right: 0;
border-left: 1px solid rgba(138, 138, 137, 0.2);
@media only screen and (min-width: 768px) {
    padding-left: 50px;
  }
`
const Prefix = styled.span`
margin-right: 10px;
position: absolute;
top: 18px;
left: 24px;
z-index: 99;
`

const InputFilter = ({ filter, onFilterChange, inputStyle, inputPrefix }) => {
    let InputComponent;
   if (inputStyle === 'active') {
    InputComponent = inputPrimary;
  } else if(inputStyle === 'secondary') {
    InputComponent = inputSecondary; 
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', position:'relative' }}>
      <Prefix>{inputPrefix}</Prefix>
      <InputComponent
        type="text"
        name="text"
        placeholder="Enter the text"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
};

export default InputFilter;
InputFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onMileageChange: PropTypes.func,
  inputStyle: PropTypes.string.isRequired,
  inputPrefix: PropTypes.string,
};