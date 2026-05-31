import './App.css'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-400">
      <Navbar />
      <HomeScreen />
    </div>
  )
}

export default App