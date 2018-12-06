import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Listing from '../components/listing';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default IndexPage;
