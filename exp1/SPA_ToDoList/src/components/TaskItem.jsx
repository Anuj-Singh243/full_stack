export default function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        className="task-checkbox"
      />
      <span className="task-text">{task.text}</span>
      <button
        onClick={() => deleteTask(task.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  )
}
