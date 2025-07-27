
export default async function TodoItems() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const todos = await response.json()

  return (
    <div>
          <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
