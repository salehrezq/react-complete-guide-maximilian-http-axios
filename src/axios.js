import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// The following interceptors are related to sending a request.
instance.interceptors.request.use(request => {
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
instance.interceptors.response.use(response => {
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

export default instance;
