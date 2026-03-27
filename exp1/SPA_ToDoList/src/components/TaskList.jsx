import TaskItem from './TaskItem'

export default function TaskList({ tasks, deleteTask, toggleTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks yet. Add one to get started!</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
