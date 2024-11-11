function Task(props) {
  let className = "task";

  if (props.isComplete) {
    className += " task-isComplete";
  }

  return (
    <li className={className}>
      <label>
        <input type="checkbox" checked={props.isComplete} readOnly={true} />
        {props.text}
      </label>
    </li>
  );
}

export default Task;
