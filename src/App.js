import logo from './logo.svg';
import './App.css';
import Todo from './Todo/Todo';

function App() {
  return (
    <div style={{width: '500px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}>Simple Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;
