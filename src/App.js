import Sidebar from './components/Sidebar';
import Header from './components/Header';
// import TaskItem from './components/TaskItem';
import Board from './components/Board';

import './App.css';

function App() {
  return (
    <div className="app">
     < Sidebar/>
      <div className="main-content">
       <Header/>
        <Board/>

      </div>
    </div>

  );
}

export default App;
