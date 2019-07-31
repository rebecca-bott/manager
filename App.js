import React, {Component } from 'react';
import {View} from 'react-native';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router'


class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDPZzuCwP09mAa1ivShKNgxlrfNz4Lo6Qg",
            authDomain: "manager2-5f06f.firebaseapp.com",
            databaseURL: "https://manager2-5f06f.firebaseio.com",
            projectId: "manager2-5f06f",
            storageBucket: "",
            messagingSenderId: "439145671457",
            appId: "1:439145671457:web:986e037024240c0a"
          };
          firebase.initializeApp(firebaseConfig);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>  
            <Router />
            </Provider>
        )
    }
}
export default App;
