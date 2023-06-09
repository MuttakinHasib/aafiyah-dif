import { GraphQLClient } from 'graphql-request';
import { RequestConfig } from 'graphql-request/build/esm/types';

const GRAPHQL_ENDPOINT = 'http://localhost:3333/graphql' as string;

const graphqlRequestClient = (request: RequestConfig = {}) =>
  new GraphQLClient(GRAPHQL_ENDPOINT, {
    credentials: 'include',
    mode: 'cors',
    ...request,
  });

export default graphqlRequestClient;
