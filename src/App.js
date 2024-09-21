import logo from './logo.svg';
import './App.css';
import SelectTextFields from './components/TemperatureConverter/TemperatureConverter';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>HomeWork 3.</h2>
      </header>
      <div>
      <SelectTextFields />
      <TodoList />
      </div>
    </div>
  );
}

export default App;
