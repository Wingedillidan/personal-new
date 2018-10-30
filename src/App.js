import * as React from 'react';

// Components
import Intro from './components/Intro';

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
        <Intro ready={ready} />
      );
    } else {
      return (
        <div />
      )
    }
  }
}

export default App;
