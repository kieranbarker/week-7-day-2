import Task from "./Task.jsx";

function App() {
  const tasks = [
    { id: 1, text: "Walk the dogs", isComplete: true },
    { id: 2, text: "Buy groceries", isComplete: false },
    { id: 3, text: "Work out", isComplete: false },
  ];

  return (
    <>
      <h1>Tasks</h1>
      <ul className="taskList">
        {tasks.map((task) => (
          <Task key={task.id} text={task.text} isComplete={task.isComplete} />
        ))}
      </ul>
    </>
  );
}

export default App;
