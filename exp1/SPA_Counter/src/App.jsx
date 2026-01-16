import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  return (
    <div className="card">
      <h1>Simple Counter SPA</h1>
      <p className="count">{count}</p>
      <div className="controls">
        <button onClick={() => setCount(c => c - 1)}>Decrement</button>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
    </div>
  )
}
