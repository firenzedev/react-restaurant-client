import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://nodejs-restaurant-server.herokuapp.com/graphql",
});

const wsLink = isServerSide()
  ? new GraphQLWsLink(
      createClient({
        url: "wss://nodejs-restaurant-server.herokuapp.com/subscriptions",
      })
    )
  : null;

const link =
  isServerSide() && wsLink != null
    ? split(splitRule, wsLink, httpLink)
    : httpLink;

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

export default client;

function isServerSide() {
  return typeof window !== "undefined";
}

function splitRule({ query }) {
  const definition = getMainDefinition(query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}
