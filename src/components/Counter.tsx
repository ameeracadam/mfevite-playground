import { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => { document.title = `${count}` }, [count])
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
