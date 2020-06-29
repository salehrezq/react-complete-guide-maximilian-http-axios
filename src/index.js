import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Set default global configurations, for example base url for all requests.
// In all places where you need to add the url,
// you just omit this default segment of the url
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Set default global configurations for common headers
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

// Set default global configurations for only POST requests, for example the 'Content-Type'
axios.defaults.headers.post['Content-Type'] = 'application/json'; // 'application/json' is the default by the way

// In axios you can globally intercept all requests or responses in the app
// before they are handled by `then` or `catch`.
// This is useful if you want to make some general tasks such as logging info about them
// or edit or add some request common headers before sending them, and so on.

// The following interceptors are related to sending a request.
axios.interceptors.request.use(request => {
   console.log(request);
   // You can edit the request config before sending it
   // You must always return the request config,
   // otherwise all sending requests will be blocked here
   return request;
}, error => {
   console.log(error);
   // Do something with the "request sending" error
   // You must always do return this statement;
   // so that request can reach to the `catch` block
   return Promise.reject(error);
});

// The following interceptors are related to receiving a response.
axios.interceptors.response.use(response => {
   console.log(response);
   // You can edit the response config before handling it in `then` block
   // You must always return the response config,
   // otherwise the response will not reach to the `then` block
   return response;
}, error => {
   console.log(error);
   // Do something with the "response" error
   // You must always do return this statement;
   // so that response error can reach to the `catch` block
   return Promise.reject(error);
});

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
