export default function TaskForm({ inputValue, setInputValue, addTask }) {
  return (
    <form onSubmit={addTask} className="task-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-btn">Add Task</button>
    </form>
  )
}
