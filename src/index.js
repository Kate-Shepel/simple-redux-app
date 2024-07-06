import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux';
import reducer from './reducer';
import App from './components/App';
import { Provider } from 'react-redux';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //added to use Redux Devtools in Browser

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* передаём store по всей иерархии нашего дерева компонентов */}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
