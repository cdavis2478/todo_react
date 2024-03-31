// App.js
// eslint-disable-next-line
import React from 'react';
import './style.css';
import TodoList from './TodoList';

//import Form from './components/TableForm';
//import TaskTable from './components/TaskTable';
  

function App() {

  /*const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };*/

  return (
    <div className="App">
      <TodoList />
     {/* <h1>Tasks</h1>*/ }
      {/*<Form />*/}
     {/* <button onClick={handleShowForm}>Add Task</button>*/}
      {/*<TaskTable />*/}
    </div>
  );
}


export default App;
