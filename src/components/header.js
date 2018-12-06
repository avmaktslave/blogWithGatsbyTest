import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import gatsbyLogo from '../images/gatsby-icon.png';

const HeaderWrapper = styled.div`
  background-color: #524763;
  margin-bottom: 1.45rem;
  img {
    margin: 0;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle, description }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            display: 'grid',
          }}
        >
          {siteTitle}
          <hr style={{ marginTop: 20, backgroundColor: 'white' }} />
          {description}
          <img style={{ width: '100px' }} src={gatsbyLogo} alt="logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
  description: '',
};

export default Header;
