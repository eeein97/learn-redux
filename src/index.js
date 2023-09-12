import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import { legacy_createStore as createStore } from 'redux';  //새로운 버전 나와서 이렇게 써줘야함
import { devToolsEnhancer } from '@redux-devtools/extension';
import { Provider } from 'react-redux';
//redux-devtools를 프로젝트에 적용
const store = createStore(rootReducer, devToolsEnhancer());
console.log(store.getState());  //getState() 리덕스가 가지고있는 기본함수
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
