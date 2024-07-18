import React, { useState } from 'react';
import './App.css';

function App() {
  const [lists, setLists] = useState({
    study: [],
    mentalHealth: [],
    physicalHealth: []
  });

  const handleAddTask = (category, task) => {
    setLists(prevLists => ({
      ...prevLists,
      [category]: [...prevLists[category], task]
    }));
  };

  const handleDeleteTask = (category, index) => {
    setLists(prevLists => ({
      ...prevLists,
      [category]: prevLists[category].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="App">
      
      <div className="lists">
        <div className="list">
          <h2>Study Tasks</h2>
          <ul>
            {lists.study.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask('study', index)}>Delete</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add task"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                handleAddTask('study', e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        </div>
        <div className="list">
          <h2>Mental Health Tasks</h2>
          <ul>
            {lists.mentalHealth.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask('mentalHealth', index)}>Delete</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add task"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                handleAddTask('mentalHealth', e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        </div>
        <div className="list">
          <h2>Physical Health Tasks</h2>
          <ul>
            {lists.physicalHealth.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => handleDeleteTask('physicalHealth', index)}>Delete</button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add task"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target.value.trim() !== '') {
                handleAddTask('physicalHealth', e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        </div>
        
      </div>
      <div className='calendar'>
        <h2>Daily Quote</h2>
      </div>
      <div id="meditation" className='meditation'>
            <h3>Meditation for Concentration</h3>
            <button className='medBTN'>Start Meditation</button>
        </div>

        <div id="meditation" className='meditation'>
            <h3>Meditation for Activation</h3>
            <button className='medBTN'>Start Meditation</button>
        </div>

        <div className='calendar'>
            <h2>Calendar</h2>
        </div>
    </div>
  );
}

export default App;
