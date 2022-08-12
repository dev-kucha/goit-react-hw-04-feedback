import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, typography, color, flexbox } from 'styled-system';

const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
    ${flexbox}
`;

const Button = styled.button`
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box width={1 / 2} display="flex" justifyContent="space-between">
      {options.map((item, idx) => (
        <Button
          key={idx}
          type="button"
          name={item}
          onClick={e => onLeaveFeedback(e.currentTarget.name)}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </Button>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
