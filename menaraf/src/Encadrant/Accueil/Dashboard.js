// Dashboard.js
import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import './Dashboard.css';

const initialTasks = {
  todo: [
    { id: 1, title: 'Le développement du partie backend de l\'interface encadrant', color: 'blue' },
    { id: 2, title: 'Le développement du partie frontend de l\'interface encadrant', color: 'red' }
  ],
  inProgress: [
    { id: 3, title: 'Le développement du partie backend de l\'interface stagiaire', color: 'green' },
    { id: 4, title: 'La conception du partie frontend de l\'interface encadrant', color: 'lightgreen' }
  ],
  done: [
    { id: 5, title: 'La création de la base de donnée', color: 'red' }
  ]
};

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', color: 'blue' });

  const moveTask = (taskId, newStatus) => {
    setTasks(prevState => {
      const newState = { ...prevState };
      const task = Object.values(prevState).flat().find(t => t.id === taskId);
      if (task) {
        Object.keys(newState).forEach(status => {
          newState[status] = newState[status].filter(t => t.id !== taskId);
        });
        newState[newStatus].push(task);
      }
      return newState;
    });
  };

  const addTask = () => {
    const newId = Math.max(...Object.values(tasks).flat().map(t => t.id)) + 1;
    const taskToAdd = { id: newId, ...newTask };
    setTasks(prevState => ({
      ...prevState,
      todo: [...prevState.todo, taskToAdd]
    }));
    setPopupOpen(false);
    setNewTask({ title: '', color: 'blue' });
  };

  const changeTaskColor = (taskId, color) => {
    setTasks(prevState => {
      const newState = { ...prevState };
      Object.keys(newState).forEach(status => {
        newState[status] = newState[status].map(t =>
          t.id === taskId ? { ...t, color } : t
        );
      });
      return newState;
    });
  };

  const [, dropTodo] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, 'todo')
  });

  const [, dropInProgress] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, 'inProgress')
  });

  const [, dropDone] = useDrop({
    accept: 'TASK',
    drop: (item) => moveTask(item.id, 'done')
  });

  return (
    <div className="dashboard">
      <div className="projects">
        <div>Projets</div>
        <div>10</div>
      </div>
      <div className="tasks">
        <div ref={dropTodo} className="task-column">
          <h3>To do</h3>
          {tasks.todo.map(task => <TaskCard key={task.id} task={task} changeTaskColor={changeTaskColor} />)}
          <button onClick={() => setPopupOpen(true)}>Ajouter tâche</button>
        </div>
        <div ref={dropInProgress} className="task-column">
          <h3>In progress</h3>
          {tasks.inProgress.map(task => <TaskCard key={task.id} task={task} changeTaskColor={changeTaskColor} />)}
        </div>
        <div ref={dropDone} className="task-column">
          <h3>Done</h3>
          {tasks.done.map(task => <TaskCard key={task.id} task={task} changeTaskColor={changeTaskColor} />)}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>Nouvelle tâche</h3>
            <input
              type="text"
              placeholder="Titre de la tâche"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <button onClick={addTask}>Ajouter</button>
            <button onClick={() => setPopupOpen(false)}>Annuler</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
