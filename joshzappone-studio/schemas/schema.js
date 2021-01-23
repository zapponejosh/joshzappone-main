// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// import documents
import author from "./documents/author"
import post from "./documents/blogPost"
import homePage from "./documents/homePage"
import portfolio from "./documents/portfolio"
import project from "./documents/project"
import siteConfig from "./documents/siteConfig"

// import objects
import button from "./objects/button"
import figure from "./objects/figure"
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    author,
    post,
    homePage,
    portfolio,
    project,

    // objects
    button,
    figure,
    internalLink,
    link,
    portableText
    
  ]),
})
