//import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Tarefas = ['Acordar','Comer','Estudar','Dormir'];

function App() {
  return (
    <div className="App">
      <ul>
        {Tarefas.map((tarefa) => Task(tarefa))}
      </ul>
    </div>
  );
}

export default App;
