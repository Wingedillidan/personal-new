import * as React from 'react';

// Components
import Home from './components/Home';

// Styles
import './App.scss';
import './assets/fonts.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.ready = this.ready.bind(this);

    this.state = {
      ready: false
    }
  }

  componentDidMount () {
    window.addEventListener('load', this.ready);
  }

  componentWillUnmount () {
    window.removeEventListener('load', this.ready);
  }

  ready () {
    this.setState({ready: true});
  }

  render() {
    const {ready} = this.state;
    if(ready) {
      return (
        <Home ready={ready} />
      );
    } else {
      return (
        <div />
      )
    }
  }
}

export default App;
