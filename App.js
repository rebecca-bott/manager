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
            apiKey: "AIzaSyBeogp45tsA5QI30Ftwe_U49bFzF1-sT3E",
            authDomain: "manager-9514c.firebaseapp.com",
            databaseURL: "https://manager-9514c.firebaseio.com",
            projectId: "manager-9514c",
            storageBucket: "",
            messagingSenderId: "399189744976",
            appId: "1:399189744976:web:fdee5a25cf65263a"
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
