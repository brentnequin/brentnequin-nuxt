import { InMemoryCache } from '@apollo/client'
import introspectionResult from '~/apollo/fragmentTypes.json';

export default ({req, app}) => {
    return {
      httpEndpoint: process.env.graphql_url || "http://localhost:1337/graphql",
      cache: new InMemoryCache({ introspectionResult })
    }
}