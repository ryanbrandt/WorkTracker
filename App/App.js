import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './Store/store';
import Container from './Containers/Components/Container';
import SplashScreen from './Screens/SplashScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({...this.state, showSplash: false}), 4000);
  }

  render() {
    const {showSplash} = this.state;

    return (
      <Provider store={store}>
        {showSplash ? <SplashScreen /> : <Container />}
      </Provider>
    );
  }
}

export default App;
