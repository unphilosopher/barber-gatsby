import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = false
}) => (
  <StaticQuery
    query={graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />

            <meta itemprop="name" content={defaultTitle} />
            <meta itemprop="description" content={seo.description} />
            <meta itemprop="image" content={seo.image} />

            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:site_name" content={defaultTitle} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:site" content={defaultTitle} />
            <meta name="twitter:description" content={seo.description} />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            <meta property="twitter:image" content={seo.image} />
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
};