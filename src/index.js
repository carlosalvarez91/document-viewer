import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import Router from './router';
import Layout from './Layout';
import './styles/global.css';
import { HeaderProvider } from './context/headerContext';

const client = new ApolloClient({
  uri: 'https://graphql.sketch.cloud/api',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <HeaderProvider>
    <React.StrictMode>
        <BrowserRouter>
          <Layout >
            <Router />
          </Layout>
        </BrowserRouter>
    </React.StrictMode>
    </HeaderProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
