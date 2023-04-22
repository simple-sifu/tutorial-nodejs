import React from 'react';
import ProductComponent from './Products/ProductComponent'
import { Provider } from 'react-redux';
import store from '../core/redux/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <ProductComponent />
      </div>
    </Provider>
  );
}
export default App;