import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2em;
  margin: 2em;
  width: 360px;
  background: papayawhip;
  box-shadow: 10px 5px 5px lightgrey;
`;

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
