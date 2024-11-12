import { useState } from "react";
import Task from "./Task.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Walk the dogs", isComplete: true },
    { id: 2, text: "Buy groceries", isComplete: false },
    { id: 3, text: "Work out", isComplete: false },
  ]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <>
      <h1>Tasks</h1>
      <ul className="taskList">
        {tasks.map((task) => (
          <Task {...task} key={task.id} toggleTask={toggleTask} />
        ))}
      </ul>
    </>
  );
}

export default App;
