import { useState } from 'react'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  const [screen, setScreen] = useState('welcome')

  if (screen === 'login') {
    return <Login onRegister={() => setScreen('register')} />
  }

  if (screen === 'register') {
    return <Register onLogin={() => setScreen('login')} />
  }

  return (
    <Welcome
      onLogin={() => setScreen('login')}
      onRegister={() => setScreen('register')}
    />
  )
}

export default App