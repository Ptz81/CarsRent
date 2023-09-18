import PropTypes from 'prop-types';
import { ConditionsType } from './CardsModal.styled ';
// import { ConditionsType } from './CardsModal.styled';

const ConditionsArray = ({ rentalConditions }) => {
  const conditionElements = rentalConditions.split('\n').map((phrase, index) => {
    const parts = phrase.split(/(\d+)/);
    const styledPhrase = parts.map((part, partIndex) => {
      const isNumber = /\d+/.test(part);
      return isNumber ? (
        <span style={{ color: 'blue' }} key={partIndex}>
          {part}
        </span>
      ) : (
        part
      );
    });

    return (
      <ConditionsType key={index}>
        {styledPhrase}
      </ConditionsType>
    );
  });

  return <div>{conditionElements}</div>;
};

ConditionsArray.propTypes = {
  rentalConditions: PropTypes.string.isRequired,
};

export default ConditionsArray;
