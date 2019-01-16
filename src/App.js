import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Ducks';
import AppRouter from './Routes/index';
export const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {AppRouter}
        </div>
       </Provider>
    );
  }
}

export default App;
