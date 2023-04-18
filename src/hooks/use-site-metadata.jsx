import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          image
          siteUrl
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
