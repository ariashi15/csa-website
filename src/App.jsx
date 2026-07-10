import { useState } from 'react'
import Header from './components/Header'
import ItemList from './components/ItemList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        
        <div className="counter-box">
          <p>React State Counter Test:</p>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
        </div>

        <div className="Navigation-Bar">
          <h2>Navigation Bar</h2>
          <ItemList />
        </div>

      </main>
    </div>
  )
}

export default App