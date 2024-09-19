// @ts-ignore
import React, { Component } from 'react';
import DataStreamer, { ServerRespond } from './DataStreamer';
import Graph from './Graph';
import './App.css';

interface IState {
  data: ServerRespond[],
  showGraph: boolean,
}

class App extends Component<{}, IState> {
  state: { data: never[]; showGraph: boolean; };
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      showGraph: false,
    };
  }

  renderGraph() {
    if (this.state.showGraph) {
      return (<Graph data={this.state.data}/>)
    }
  }

  getDataFromServer() {
    let x = 0;
    const interval = setInterval(() => {
      DataStreamer.getData((serverResponds: ServerRespond[]) => {
        this.setState({
          data: serverResponds,
          showGraph: true,
        });
      });
      x++;
      if (x > 1000) {
        clearInterval(interval);
      }
    }, 100);
  }

  setState(arg0: { data: ServerRespond[]; showGraph: boolean; }) {
        throw new Error('Method not implemented.');
    }

  render() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    const div = <>
      Bank Merge & Co Task 3
      Start Streaming Data
      {this.renderGraph()}
    </>;
    return div
  }
}

export default App;
