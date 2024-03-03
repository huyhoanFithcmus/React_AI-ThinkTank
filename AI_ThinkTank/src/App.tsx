// App.tsx

import { Input, Button } from '@mui/material'
import './App.css'
import runChat from './api/geminiAPI'
import { useState, useEffect } from 'react'

const MAX_DEBATES = 3 // Set the desired maximum number of debates

function App() {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState<string[]>([])
  const [debateCount, setDebateCount] = useState<number>(0)
  const [debatesStarted, setDebatesStarted] = useState<boolean>(false)

  const handleDebate = async () => {
    if (question.trim() !== '') {
      try {
        const apiResponse = await runChat(question)
        setAnswers((prevAnswers) => [...prevAnswers, apiResponse])
        setDebateCount((count) => count + 1)
      } catch (error) {
        console.error('Error while fetching data:', error)
      }
    }
  }

  useEffect(() => {
    if (debatesStarted && debateCount < MAX_DEBATES) {
      const debateInterval = setInterval(() => {
        handleDebate()
      }, 2000) // Adjust the interval as needed

      return () => clearInterval(debateInterval)
    }
  }, [debatesStarted, debateCount, question])

  const handleStartDebates = () => {
    setDebatesStarted(true)
  }

  const handleStopDebates = () => {
    setDebatesStarted(false)
  }

  return (
    <div className='app-container'>
      <h1>AI Think Tank</h1>
      <div className='input-container'>
        <Input
          className='custom-input'
          placeholder='Ask a question...'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button
          className='custom-button'
          variant='contained'
          onClick={debatesStarted ? handleStopDebates : handleStartDebates}
        >
          {debatesStarted ? 'Stop Debates' : 'Start Debates'}
        </Button>
      </div>
      {answers.length > 0 && (
        <div className='answer-container'>
          {answers.map((answer, index) => (
            <div key={index} className='answer-card'>
              <p className='answer-text'>{answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
