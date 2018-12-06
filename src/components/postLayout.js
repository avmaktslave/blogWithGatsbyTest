import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class postLayout extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object).isRequired,
    location: PropTypes.instanceOf(Object).isRequired,
  };

  state = {};

  render() {
    const {
      data: { markdownRemark },
      location,
    } = this.props;
    return (
      <Layout location={location}>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
