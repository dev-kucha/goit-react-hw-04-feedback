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

const Accent = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box>
      <p>
        Good: <Accent>{good}</Accent>
      </p>
      <p>
        Neutral: <Accent>{neutral}</Accent>
      </p>
      <p>
        Bad: <Accent>{bad}</Accent>
      </p>
      <p>
        Total: <Accent> {total}</Accent>
      </p>
      <p>
        Positive feedback: <Accent> {positivePercentage.toFixed(2)}%</Accent>
      </p>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
