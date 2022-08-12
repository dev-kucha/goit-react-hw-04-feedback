import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((item, idx) => (
        <button
          key={idx}
          type="button"
          name={item}
          onClick={e => onLeaveFeedback(e.currentTarget.name)}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
