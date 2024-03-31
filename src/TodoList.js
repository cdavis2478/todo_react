import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [editingIndex, setEditingIndex] = useState(null); 
    const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    if (name.trim() && description.trim() && deadline.trim()) {
      setTasks([...tasks, { name, description, deadline }]);
      setName('');
      setDescription('');
      setDeadline('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index); 
    setName(tasks[index].name);
    setDescription(tasks[index].description);
    setDeadline(tasks[index].deadline);
  };

  const handleSaveTask = () => {
    if (name.trim() && description.trim() && deadline.trim()) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = { name, description, deadline };
      setTasks(updatedTasks);
      setEditingIndex(null); 
      setName('');
      setDescription('');
      setDeadline('');
    }
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };
  
  const handleMoveDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  };

  const handleViewTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="Todo">
      <h1>Todo List</h1>
      <div class="inputName">
      <input 
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div class="inputDescription">
      <input 
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div class="inputDeadline">
      <input 
        type="date"
        placeholder="Task Deadline"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      </div>
      <button class="button" onClick={handleAddTask}>Add Task</button>
      <table class='center'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{task.deadline}</td>
              <td>
              {editingIndex === index ? (
                  <button onClick={() => handleSaveTask()}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleViewTask(task)}>View</button>
                    <button onClick={() => handleEditTask(index)}>Edit</button>
                    <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    <button onClick={() => handleMoveUp(index)}>Move Up</button>
                    <button onClick={() => handleMoveDown(index)}>Move Down</button>
                  </>
                )}
             </td>
            </tr>    
          ))}
          {selectedTask && (
            <div className="modal">
                <h2>{selectedTask.name}</h2>
                <p>{selectedTask.description}</p>
                <p>Deadline: {selectedTask.deadline}</p>
                <button onClick={() => setSelectedTask(null)}>Close</button>
            </div>
)}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
