import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const BLOG_POST_ARCHIVE = graphql`
  query BlogPostArchive {
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`;

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    text-decoration: none;
  }
`;

const Archive = () => (
  <StaticQuery
    query={BLOG_POST_ARCHIVE}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => (
              <li key={edge.node.id}>
                <Link to={`/posts${edge.node.frontmatter.slug}`}>
                  {edge.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ArchiveList>
        </aside>
      </>
    )}
  />
);

export default Archive;
