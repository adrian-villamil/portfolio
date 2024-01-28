import './App.css'
import { Introduction } from './components/Introduction'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <Introduction />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
