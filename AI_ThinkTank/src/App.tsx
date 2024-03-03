import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'

function App() {
  const [ideasCount, setIdeasCount] = useState(0)

  return (
    <div className='app-container'>
      <div className='header'>
        <a href='https://your-aithinktank-website.com' target='_blank'>
          <img src={viteLogo} className='logo' alt='AI Think Tank logo' />
        </a>
        <h1>AI Think Tank</h1>
      </div>
      <div className='card'>
        <button className='ideas-button' onClick={() => setIdeasCount((count) => count + 1)}>
          💡 Generate Idea
        </button>
        <p className='ideas-count'>Total Ideas: {ideasCount}</p>
        <p className='description'>
          Discuss innovative ideas and advancements in AI.
          <br />
          Edit the AI codebase to enhance intelligence!
        </p>
      </div>
      <p className='read-the-docs'>Visit the AI Think Tank website to explore more ideas.</p>
    </div>
  )
}

export default App
