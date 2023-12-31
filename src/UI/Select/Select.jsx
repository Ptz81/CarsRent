import { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { colors } from "../../styles/GlobalStyles";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const CustomSelect = styled.div`
  position: relative;
  width:100%;
   @media only screen and (min-width: 800px) {
    width: 125px;
  &:first-of-type{
    width: 224px;
  }
  }
  
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 18px 24px;
  border-radius: 14px;
  font-size: 14px;
  background: ${colors.disabled};
  color: ${colors.textMainColor};
  outline: none;
  text-align: left;
  border: 1px solid rgba(243, 243, 243, 0.2);
  cursor: pointer;
  margin-bottom: 4px;
  @media only screen and (min-width: 768px) {
    width: 100%;
    padding: 14px 10px 14px 18px;
    font-size: 17px;
    margin-bottom: 0;
  }
`;

const OptionsWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  background: ${colors.mainBgColor};
  color: ${colors.selectColor};
  -webkit-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
-moz-box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
box-shadow: 0px 4px 36px 0px rgba(247,247,251,0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${colors.mainBgColor};
  border-radius: 14px;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 100;
  scrollbar-width: 8px;
  scrollbar-color: ${colors.grayColor} transparent;
  ::-webkit-scrollbar {
    width: 8px;
    margin-right: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.disabled};
    border-radius: 10px;
    width: 8px;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  user-select: none;
`;

const Option = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: ${colors.disabled};
  }
`;

const Placeholder = styled.div`
  color: ${colors.textMainColor};
  font-size: 17px;
`;

const CustomSelectComponent = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleSelect = (option) => {
    if (option !== selectedValue) {
      setSelectedValue(option);
      onChange(option);
    }
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CustomSelect>
      <SelectButton onClick={toggleSelect}>
        {placeholder ? (
          selectedValue || <Placeholder>{placeholder}</Placeholder>
        ) : (
          selectedValue
        )}
      </SelectButton>
       {isOpen ? <FiChevronUp width={20} height={20} style={{position:'absolute', top:"15px", right: "20px"}} /> : <FiChevronDown style={{position:'absolute', top:"15px", right: "20px"}}/>}
      {isOpen && (
        <OptionsWrapper isOpen={isOpen}>
          {options.map((option) => (
            <Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </Option>
          ))}
        </OptionsWrapper>
      )}
    </CustomSelect>
  );
};

CustomSelectComponent.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default CustomSelectComponent;