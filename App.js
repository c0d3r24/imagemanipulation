import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from "./RouterComponent";
import reducers from './src/reducers';

class App extends React.Component {
  render() {
    return (
        <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <RouterComponent />
        </Provider>
    );
  }
}

export default App;

const styles = {
    container: {
        flex: 1
    }
};
