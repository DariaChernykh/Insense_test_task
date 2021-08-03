import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";


const client = new ApolloClient({
    uri: "https://graphqlzero.almansi.me/api",
    clientState: {
        defaults: {
            counter: 0
        },
        resolvers: {}
    }
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
