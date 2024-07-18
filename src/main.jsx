
import React, { useState } from 'react';
import './App.css'; 

function App() {
  
  const [containers, setContainers] = useState({
    container1: "Container 1",
    container2: "Container 2",
    container3: "Container 3",
    container4: "Container 4"
  });

  
  const changeContent = (containerId, newContent) => {
    setContainers(prevContainers => ({
      ...prevContainers,
      [containerId]: newContent
    }));
  };

  return (
    <div className="App">
      <div className="top-container">
        <div id="container1" className="flexible-container" onClick={() => changeContent("container1", "To-Do List Creator 1")}>
          {containers.container1}
        </div>
        <div id="container2" className="flexible-container" onClick={() => changeContent("container2", "To-Do List Creator 2")}>
          {containers.container2}
        </div>
        <div id="container3" className="flexible-container" onClick={() => changeContent("container3", "To-Do List Creator 3")}>
          {containers.container3}
        </div>
      </div>

      <div className="middle-container">
        <div id="vertical1" className="vertical-container">
          {containers.container1} (Vertical)
        </div>
        <div id="vertical2" className="vertical-container">
          {containers.container2} (Vertical)
        </div>
      </div>

      <div className="bottom-container">
        <div id="container4" className="flexible-container" onClick={() => changeContent("container4", "New Content for Container 4")}>
          {containers.container4}
        </div>
      </div>
    </div>
  );
}

export default App;
