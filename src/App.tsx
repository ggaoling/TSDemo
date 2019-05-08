import * as React from 'react';
import './App.css';

// 引入 container 组件 CountCon
import Counter from './components/Counter';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
