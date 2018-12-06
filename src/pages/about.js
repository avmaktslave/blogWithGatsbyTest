import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>Hi ept</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ea, dolor incidunt id animi
        laudantium atque sunt possimus cupiditate ratione blanditiis doloremque eius eveniet dolorem
        ducimus vero commodi dicta quibusdam!
      </p>
    </div>
  </Layout>
);

About.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default About;
