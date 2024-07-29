import './styles/App.css'
import { AppRouter } from './routing/AppRouter'
import { Context } from './context/Context'
import { useEffect, useState } from 'react'

function App() {

  const [user, setUser] = useState(() => {
    
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : {};
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <Context.Provider value={{
      user,
      setUser
    }}>
      <div className='App'>
        <AppRouter />
      </div>
    </Context.Provider>
  )
}

export default App
