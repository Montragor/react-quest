import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center"> 
          <Header />
      </div>
    </>
  )
}

export default App
