import React from 'react';
import ProductComponent from './Products/ProductComponent'
import { Provider } from 'react-redux';
import store from './common/store';
import './styles/main.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header class="full-screen-header">
          <nav class="nav nav-top">
              <h1>ELC</h1>
              <ul class="nav-list" >
                  <li><a href="#">Curriculum</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a class="btn" href="#">Contact</a></li>
              </ul>
          </nav>
          <h1 class="title">BUY MORE,</h1>
          <h1 class="title">SAVE MORE</h1>
          <span class="sub-title">Plus free mystery gift with purchases over $85! </span>
          <span class="sub-title">Available online only. Exclusions apply</span>
          <a class="btn" href="#">SHOP BEST-SELLERS</a>
          <img class="scroll-down-icon" src="img/arrow_down.svg" alt="Scroll Down Icon"/>
        </header>
        <ProductComponent />
      </div>
    </Provider>
  );
}
export default App;